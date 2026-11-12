(() => {
  const profileKey = "roadrescue-demo-profiles";
  const requestKey = "roadrescue-demo-requests";
  const sessionKey = "roadrescue-demo-session";
  const shell = document.querySelector("[data-customer-shell]");
  if (!shell) return;

  const gate = document.querySelector("[data-auth-required]");
  let session;
  let profile;
  let requests;

  try {
    session = readSession();
    const profiles = readProfiles();
    profile = profiles.find((item) => item.email === session.email);
    if (!profile) {
      showGate("Your local demo profile could not be found. Register a profile before opening the customer portal.");
      return;
    }
    requests = readRequests();
  } catch (error) {
    showGate(`The customer demo could not load its browser data: ${error.message}`);
    return;
  }

  shell.hidden = false;
  gate.hidden = true;
  shell.querySelectorAll("form").forEach((form) => {
    const status = form.querySelector(".customer-status");
    form.addEventListener("invalid", (event) => {
      if (!status || !(event.target instanceof HTMLInputElement || event.target instanceof HTMLSelectElement || event.target instanceof HTMLTextAreaElement)) return;
      setStatus(status, event.target.validationMessage, "error");
    }, true);
    form.addEventListener("input", (event) => {
      if (!status || !(event.target instanceof HTMLInputElement || event.target instanceof HTMLSelectElement || event.target instanceof HTMLTextAreaElement)) return;
      if (event.target.validity.valid) setStatus(status, "", "");
    }, true);
  });
  document.querySelectorAll("[data-customer-name]").forEach((element) => {
    element.textContent = profile.name;
  });
  document.querySelectorAll(".customer-sidebar__link[href]").forEach((link) => {
    if (link.getAttribute("href") === window.location.pathname.split("/").pop()) {
      link.setAttribute("aria-current", "page");
    }
  });

  setupSidebar();
  setupLogout();
  const page = shell.dataset.customerPage;
  if (page === "overview") renderOverview();
  if (page === "request") setupRequestForm();
  if (page === "track") setupTracking();
  if (page === "request-details") setupRequestDetails();
  if (page === "history") renderHistory();
  if (page === "profile") setupProfileForm();

  function readSession() {
    const stored = sessionStorage.getItem(sessionKey) || localStorage.getItem(sessionKey);
    if (!stored) throw new Error("You are not signed in to a demo session.");
    const value = JSON.parse(stored);
    if (typeof value?.email !== "string" || !value.email) {
      throw new Error("The demo session is not in the expected format.");
    }
    return { ...value, email: value.email.toLowerCase() };
  }

  function readProfiles() {
    const stored = localStorage.getItem(profileKey);
    if (!stored) return [];
    const value = JSON.parse(stored);
    if (!Array.isArray(value) || value.some((item) => (
      typeof item?.email !== "string" || typeof item?.name !== "string"
    ))) {
      throw new Error("Stored demo profiles are not in the expected format.");
    }
    return value;
  }

  function readRequests() {
    const stored = localStorage.getItem(requestKey);
    if (!stored) return [];
    const value = JSON.parse(stored);
    if (!Array.isArray(value) || value.some((item) => (
      typeof item?.id !== "string" ||
      typeof item?.ownerEmail !== "string" ||
      typeof item?.service !== "string" ||
      typeof item?.status !== "string" ||
      typeof item?.createdAt !== "string"
    ))) {
      throw new Error("Stored demo requests are not in the expected format.");
    }
    return value;
  }

  function showGate(message) {
    shell.hidden = true;
    gate.hidden = false;
    const details = gate.querySelector("[data-gate-message]");
    details.textContent = message;
  }

  function setStatus(element, message, state) {
    element.textContent = message;
    element.dataset.state = state;
  }

  function setupSidebar() {
    const sidebar = shell.querySelector(".customer-sidebar");
    const toggle = shell.querySelector("[data-sidebar-toggle]");
    const backdrop = shell.querySelector("[data-sidebar-backdrop]");
    const closeSidebar = () => {
      sidebar.classList.remove("is-open");
      toggle.setAttribute("aria-expanded", "false");
      toggle.setAttribute("aria-label", "Open customer navigation");
      backdrop.hidden = true;
    };
    toggle.addEventListener("click", () => {
      const isOpen = toggle.getAttribute("aria-expanded") === "true";
      toggle.setAttribute("aria-expanded", String(!isOpen));
      toggle.setAttribute("aria-label", isOpen ? "Open customer navigation" : "Close customer navigation");
      sidebar.classList.toggle("is-open", !isOpen);
      backdrop.hidden = isOpen;
    });
    backdrop.addEventListener("click", closeSidebar);
    sidebar.querySelectorAll("a").forEach((link) => link.addEventListener("click", closeSidebar));
    document.addEventListener("keydown", (event) => {
      if (event.key === "Escape") closeSidebar();
    });
  }

  function setupLogout() {
    shell.querySelector("[data-logout]").addEventListener("click", () => {
      sessionStorage.removeItem(sessionKey);
      localStorage.removeItem(sessionKey);
      window.location.href = "login.html";
    });
  }

  function getOwnedRequests() {
    return requests
      .filter((item) => item.ownerEmail.toLowerCase() === session.email)
      .sort((first, second) => Date.parse(second.createdAt) - Date.parse(first.createdAt));
  }

  function renderOverview() {
    const ownRequests = getOwnedRequests();
    const activeCount = ownRequests.filter((item) => item.status !== "Completed").length;
    shell.querySelector("[data-stat-total]").textContent = String(ownRequests.length);
    shell.querySelector("[data-stat-active]").textContent = String(activeCount);
    shell.querySelector("[data-stat-complete]").textContent = String(ownRequests.length - activeCount);
    const list = shell.querySelector("[data-recent-requests]");
    renderRequestList(list, ownRequests.slice(0, 3), "No requests yet", "Create a roadside request to see it here.");
  }

  function setupRequestForm() {
    const form = shell.querySelector("[data-request-form]");
    const status = shell.querySelector("[data-request-status]");
    const result = shell.querySelector("[data-request-result]");
    form.addEventListener("submit", (event) => {
      event.preventDefault();
      status.textContent = "";
      status.dataset.state = "";
      result.replaceChildren();
      if (!form.reportValidity()) return;

      try {
        requests = readRequests();
        const request = {
          id: createRequestId(requests),
          ownerEmail: session.email,
          service: form.elements.service.value,
          vehicleType: form.elements.vehicleType.value,
          vehicleDetails: form.elements.vehicleDetails.value.trim(),
          location: form.elements.location.value.trim(),
          destination: form.elements.destination.value.trim(),
          description: form.elements.description.value.trim(),
          status: "Received",
          createdAt: new Date().toISOString()
        };
        requests.unshift(request);
        localStorage.setItem(requestKey, JSON.stringify(requests));
        form.reset();
        setStatus(status, `Request saved successfully. Your request ID is ${request.id}.`, "success");
        renderCreatedRequest(result, request);
      } catch (error) {
        setStatus(status, `The request could not be saved: ${error.message}`, "error");
      }
    });
  }

  function createRequestId(existingRequests) {
    const stamp = new Date().toISOString().slice(0, 10).replace(/-/g, "");
    for (let attempt = 0; attempt < 10; attempt += 1) {
      const random = new Uint32Array(1);
      window.crypto.getRandomValues(random);
      const suffix = random[0].toString(36).slice(0, 5).toUpperCase().padStart(5, "0");
      const id = `RR-${stamp}-${suffix}`;
      if (!existingRequests.some((item) => item.id === id)) return id;
    }
    throw new Error("A unique demo request ID could not be generated.");
  }

  function renderCreatedRequest(container, request) {
    const card = document.createElement("section");
    card.className = "page-panel";
    const heading = document.createElement("h2");
    heading.textContent = "Your request ID";
    const id = document.createElement("p");
    id.className = "customer-request-id";
    id.textContent = request.id;
    const note = document.createElement("p");
    note.textContent = "Keep this ID to look up the request in your local demo history.";
    const link = document.createElement("a");
    link.className = "button button--secondary";
    link.href = `track-request.html?id=${encodeURIComponent(request.id)}`;
    link.textContent = "Track this request";
    card.append(heading, id, note, link);
    container.append(card);
  }

  function setupTracking() {
    const form = shell.querySelector("[data-track-form]");
    const input = form.elements.requestId;
    const result = shell.querySelector("[data-track-result]");
    const status = shell.querySelector("[data-track-status]");
    const requestedId = new URLSearchParams(window.location.search).get("id");
    if (requestedId) input.value = requestedId;
    form.addEventListener("submit", (event) => {
      event.preventDefault();
      result.replaceChildren();
      status.textContent = "";
      status.dataset.state = "";
      if (!form.reportValidity()) return;
      const requestId = input.value.trim().toUpperCase();
      const request = getOwnedRequests().find((item) => item.id.toUpperCase() === requestId);
      if (!request) {
        setStatus(status, "No request with that ID was found for this demo account.", "error");
        return;
      }
      window.location.href = `request-details.html?id=${encodeURIComponent(request.id)}`;
    });
    if (requestedId) form.requestSubmit();
  }

  function setupRequestDetails() {
    const result = shell.querySelector("[data-request-details]");
    const requestId = new URLSearchParams(window.location.search).get("id");
    const request = requestId && getOwnedRequests().find((item) => item.id.toUpperCase() === requestId.trim().toUpperCase());
    if (!request) {
      setStatus(shell.querySelector("[data-request-details-status]"), "No request with that ID was found for this account.", "error");
      return;
    }
    renderTrackingResult(result, request);
  }

  function renderTrackingResult(container, request) {
    const card = document.createElement("section");
    card.className = "page-panel customer-result";
    const heading = document.createElement("h2");
    heading.textContent = request.service;
    const status = document.createElement("span");
    status.className = "request-status";
    const currentStage = normalizeRequestStatus(request.status);
    status.textContent = currentStage;
    card.append(heading, status);
    const details = document.createElement("dl");
    details.className = "request-details";
    [
      ["Request ID", request.id],
      ["Vehicle type", request.vehicleType],
      ["Vehicle details", request.vehicleDetails || "Not specified"],
      ["Location", request.location],
      ["Destination", request.destination || "Not specified"],
      ["Description", request.description || "Not specified"],
      ["Submitted", formatDate(request.createdAt)],
      ...(request.updatedAt ? [["Last status update", formatDate(request.updatedAt)]] : [])
    ].forEach(([label, value]) => {
      const entry = document.createElement("div");
      const term = document.createElement("dt");
      term.textContent = label;
      const description = document.createElement("dd");
      description.textContent = value;
      entry.append(term, description);
      details.append(entry);
    });
    const timeline = document.createElement("ol");
    timeline.className = "request-timeline";
    timeline.setAttribute("aria-label", "Request progress");
    const stages = ["Under Process", "Service Allocated", "On the Way", "Reached", "Completed"];
    const canceled = currentStage === "Cancelled";
    const activeIndex = stages.indexOf(currentStage);
    if (canceled) {
      const canceledStage = document.createElement("li");
      canceledStage.className = "request-timeline__cancelled";
      canceledStage.textContent = `Request cancelled${request.updatedAt ? ` · ${formatDate(request.updatedAt)}` : ""}`;
      timeline.append(canceledStage);
    } else {
      stages.forEach((label, index) => {
        const stage = document.createElement("li");
        stage.className = "request-timeline__step";
        if (index < activeIndex) stage.classList.add("is-complete");
        if (index === activeIndex) {
          stage.classList.add("is-current");
          stage.setAttribute("aria-current", "step");
        }
        const marker = document.createElement("span");
        marker.className = "request-timeline__marker";
        marker.setAttribute("aria-hidden", "true");
        const text = document.createElement("span");
        text.className = "request-timeline__label";
        text.textContent = label;
        stage.append(marker, text);
        timeline.append(stage);
      });
    }
    card.append(details, timeline);
    container.append(card);
  }

  function normalizeRequestStatus(status) {
    const legacyStatuses = { Received: "Under Process", Assigned: "Service Allocated", "En Route": "On the Way" };
    return legacyStatuses[status] || status;
  }

  function renderHistory() {
    const list = shell.querySelector("[data-request-history]");
    renderRequestList(list, getOwnedRequests(), "No request history", "Submitted requests will appear here.");
  }

  function renderRequestList(container, list, emptyTitle, emptyText) {
    container.replaceChildren();
    if (!list.length) {
      const empty = document.createElement("div");
      empty.className = "customer-empty";
      const heading = document.createElement("h3");
      heading.textContent = emptyTitle;
      const description = document.createElement("p");
      description.textContent = emptyText;
      const link = document.createElement("a");
      link.className = "button button--primary";
      link.href = "request-assistance.html";
      link.textContent = "Request assistance";
      empty.append(heading, description, link);
      container.append(empty);
      return;
    }
    list.forEach((request) => container.append(createRequestCard(request)));
  }

  function createRequestCard(request) {
    const card = document.createElement("article");
    card.className = "customer-request-card";
    const summary = document.createElement("div");
    const title = document.createElement("h3");
    title.textContent = `${request.service} · ${request.id}`;
    const details = document.createElement("p");
    details.textContent = `${request.vehicleType} · ${request.location} · ${formatDate(request.createdAt)}`;
    summary.append(title, details);
    const actions = document.createElement("div");
    actions.className = "d-flex flex-wrap align-items-center gap-2";
    const status = document.createElement("span");
    status.className = "request-status";
    status.textContent = normalizeRequestStatus(request.status);
    const link = document.createElement("a");
    link.href = `track-request.html?id=${encodeURIComponent(request.id)}`;
    link.textContent = "View status";
    actions.append(status, link);
    card.append(summary, actions);
    return card;
  }

  function setupProfileForm() {
    const form = shell.querySelector("[data-profile-form]");
    const status = shell.querySelector("[data-profile-status]");
    const phoneInput = form.querySelector("#profile-phone");
    const phoneError = form.querySelector("#profile-phone-error");

    if (phoneInput) {
      let errorTimeout = null;
      const showPhoneError = (message) => {
        if (!phoneError) return;
        phoneError.innerHTML = `<i class="bi bi-exclamation-circle-fill me-1" aria-hidden="true"></i>${message || "Numbers only are allowed in this field."}`;
        phoneError.classList.remove("d-none");
        phoneInput.classList.add("is-invalid");
        if (errorTimeout) clearTimeout(errorTimeout);
        errorTimeout = setTimeout(() => {
          phoneError.classList.add("d-none");
          phoneInput.classList.remove("is-invalid");
        }, 3500);
      };

      const hidePhoneError = () => {
        if (!phoneError) return;
        if (errorTimeout) clearTimeout(errorTimeout);
        phoneError.classList.add("d-none");
        phoneInput.classList.remove("is-invalid");
      };

      // Block non-digit keys on keydown
      phoneInput.addEventListener("keydown", (e) => {
        if (e.ctrlKey || e.metaKey || e.altKey) return;
        const allowedKeys = [
          "Backspace", "Delete", "Tab", "Escape", "Enter",
          "ArrowLeft", "ArrowRight", "ArrowUp", "ArrowDown",
          "Home", "End"
        ];
        if (allowedKeys.includes(e.key)) return;

        if (!/^[0-9]$/.test(e.key)) {
          e.preventDefault();
          showPhoneError("Numbers only are allowed in this field.");
        } else {
          hidePhoneError();
        }
      });

      // Filter pasted text: remove non-digits
      phoneInput.addEventListener("paste", (e) => {
        const pasteData = (e.clipboardData || window.clipboardData).getData("text");
        if (/[^0-9]/.test(pasteData)) {
          e.preventDefault();
          const digitsOnly = pasteData.replace(/\D/g, "");
          const currentVal = phoneInput.value;
          const start = phoneInput.selectionStart;
          const end = phoneInput.selectionEnd;
          const nextVal = (currentVal.slice(0, start) + digitsOnly + currentVal.slice(end)).slice(0, 15);
          phoneInput.value = nextVal;
          phoneInput.setSelectionRange(start + digitsOnly.length, start + digitsOnly.length);
          showPhoneError("Non-numeric characters were removed. Numbers only are allowed.");
        }
      });

      // Virtual keyboards and autofill input sanitization
      phoneInput.addEventListener("input", () => {
        if (/[^0-9]/.test(phoneInput.value)) {
          phoneInput.value = phoneInput.value.replace(/\D/g, "").slice(0, 15);
          showPhoneError("Numbers only are allowed in this field.");
        } else {
          hidePhoneError();
        }
      });
    }

    form.elements.name.value = "";
    form.elements.email.value = "";
    form.elements.phone.value = profile.phone || "";
    form.elements.preferredContact.value = profile.preferredContact || "email";
    form.addEventListener("submit", (event) => {
      event.preventDefault();
      status.textContent = "";
      status.dataset.state = "";
      if (!form.reportValidity()) return;
      try {
        const profiles = readProfiles();
        const previousEmail = session.email;
        const nextEmail = form.elements.email.value.trim().toLowerCase();
        const index = profiles.findIndex((item) => item.email === previousEmail);
        if (index < 0) throw new Error("The local demo profile is no longer available.");
        profile = {
          ...profiles[index],
          email: nextEmail,
          name: form.elements.name.value.trim(),
          phone: form.elements.phone.value.trim(),
          preferredContact: form.elements.preferredContact.value
        };
        profiles[index] = profile;
        localStorage.setItem(profileKey, JSON.stringify(profiles));
        requests = requests.map((item) => item.ownerEmail.toLowerCase() === previousEmail
          ? { ...item, ownerEmail: nextEmail }
          : item);
        localStorage.setItem(requestKey, JSON.stringify(requests));
        session = { ...session, email: nextEmail, name: profile.name };
        writeSession(session);
        document.querySelectorAll("[data-customer-name]").forEach((element) => {
          element.textContent = profile.name;
        });
        setStatus(status, "Your demo profile was updated in this browser.", "success");
      } catch (error) {
        setStatus(status, `The profile could not be updated: ${error.message}`, "error");
      }
    });
  }

  function writeSession(value) {
    const storage = value.rememberBrowser ? localStorage : sessionStorage;
    const otherStorage = value.rememberBrowser ? sessionStorage : localStorage;
    storage.setItem(sessionKey, JSON.stringify(value));
    otherStorage.removeItem(sessionKey);
  }

  function formatDate(value) {
    const date = new Date(value);
    return Number.isNaN(date.getTime())
      ? "Date unavailable"
      : new Intl.DateTimeFormat(undefined, { dateStyle: "medium", timeStyle: "short" }).format(date);
  }
})();
