(() => {
  const sessionKey = "roadrescue-admin-preview";
  const profileKey = "roadrescue-demo-profiles";
  const requestKey = "roadrescue-demo-requests";
  const messageKey = "roadrescue-contact-demo";
  const messageStatusKey = "roadrescue-admin-message-statuses";
  const settingsKey = "roadrescue-admin-settings";
  const shell = document.querySelector("[data-admin-shell]");
  if (!shell) return;

  const gate = document.querySelector("[data-admin-gate]");
  const startButton = document.querySelector("[data-admin-start]");
  const page = shell.dataset.adminPage;
  let requests = [];
  let profiles = [];
  let messages = [];
  let messageStatuses = [];

  startButton?.addEventListener("click", () => {
    try {
      sessionStorage.setItem(sessionKey, JSON.stringify({ startedAt: new Date().toISOString() }));
      showWorkspace();
    } catch (error) {
      showGateError(`The admin preview could not start in this browser: ${error.message}`);
    }
  });

  try {
    if (sessionStorage.getItem(sessionKey)) showWorkspace();
  } catch (error) {
    showGateError(`The admin preview session could not be read: ${error.message}`);
  }

  function showWorkspace() {
    shell.hidden = false;
    gate.hidden = true;
    setupSidebar();
    setupLogout();
    setActiveLink();
    try {
      profiles = readArray(profileKey, (item) => typeof item?.name === "string" && typeof item?.email === "string");
      requests = readArray(requestKey, (item) => typeof item?.id === "string" && typeof item?.ownerEmail === "string" && typeof item?.status === "string");
      messages = readArray(messageKey, (item) => typeof item?.email === "string" && typeof item?.message === "string");
      messageStatuses = readArray(messageStatusKey, (item) => typeof item?.index === "number" && typeof item?.state === "string");
    } catch (error) {
      showPageError(`Admin demo data could not be loaded: ${error.message}`);
      return;
    }

    if (page === "overview") renderOverview();
    if (page === "users") setupUsers();
    if (page === "requests") setupRequests();
    if (page === "messages") setupMessages();
    if (page === "analytics") renderAnalytics();
    if (page === "settings") setupSettings();
  }

  function readArray(key, validate) {
    const stored = localStorage.getItem(key);
    if (!stored) return [];
    const value = JSON.parse(stored);
    if (!Array.isArray(value) || value.some((item) => !validate(item))) {
      throw new Error(`Stored data for ${key} is not in the expected format.`);
    }
    return value;
  }

  function showGateError(message) {
    const status = gate.querySelector("[data-admin-gate-status]");
    status.textContent = message;
    status.dataset.state = "error";
  }

  function showPageError(message) {
    const status = shell.querySelector("[data-admin-status]");
    status.textContent = message;
    status.dataset.state = "error";
  }

  function setupSidebar() {
    const sidebar = shell.querySelector(".admin-sidebar");
    const toggle = shell.querySelector("[data-admin-sidebar-toggle]");
    const backdrop = shell.querySelector("[data-admin-sidebar-backdrop]");
    if (!toggle || !backdrop || !sidebar) return;
    const closeSidebar = () => {
      sidebar.classList.remove("is-open");
      toggle.setAttribute("aria-expanded", "false");
      toggle.setAttribute("aria-label", "Open admin navigation");
      backdrop.hidden = true;
    };
    toggle.addEventListener("click", () => {
      const isOpen = toggle.getAttribute("aria-expanded") === "true";
      toggle.setAttribute("aria-expanded", String(!isOpen));
      toggle.setAttribute("aria-label", isOpen ? "Open admin navigation" : "Close admin navigation");
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
    shell.querySelector("[data-admin-logout]").addEventListener("click", () => {
      sessionStorage.removeItem(sessionKey);
      window.location.href = "admin-dashboard.html";
    });
  }

  function setActiveLink() {
    const file = window.location.pathname.split("/").pop();
    shell.querySelectorAll(".admin-sidebar__link[href]").forEach((link) => {
      if (link.getAttribute("href") === file) link.setAttribute("aria-current", "page");
    });
  }

  function setupStatus(status, message, state) {
    status.textContent = message;
    status.dataset.state = state;
  }

  function renderOverview() {
    const total = requests.length;
    const active = requests.filter((request) => !["Completed", "Cancelled"].includes(request.status)).length;
    const unread = messages.filter((message, index) => getMessageStatus(message, index) === "New").length;
    shell.querySelector("[data-admin-stat-requests]").textContent = String(total);
    shell.querySelector("[data-admin-stat-active]").textContent = String(active);
    shell.querySelector("[data-admin-stat-users]").textContent = String(profiles.length);
    shell.querySelector("[data-admin-stat-messages]").textContent = String(unread);
    renderRequestRows(shell.querySelector("[data-admin-recent-requests]"), requests.slice().sort(sortNewest).slice(0, 5));
  }

  function setupUsers() {
    const search = shell.querySelector("#admin-user-search");
    const filter = shell.querySelector("#admin-user-filter");
    const body = shell.querySelector("[data-admin-user-rows]");
    const status = shell.querySelector("[data-admin-table-status]");
    const empty = shell.querySelector("[data-admin-empty]");
    const render = () => {
      const query = search.value.trim().toLocaleLowerCase();
      const selectedFilter = filter.value;
      const results = profiles.filter((user) => {
        const matchesText = `${user.name} ${user.email} ${user.phone || ""}`.toLocaleLowerCase().includes(query);
        const hasPhone = typeof user.phone === "string" && Boolean(user.phone.trim());
        return matchesText && (selectedFilter === "all" || (selectedFilter === "phone" ? hasPhone : !hasPhone));
      });
      body.replaceChildren();
      results.forEach((user) => {
        const row = document.createElement("tr");
        [
          user.name,
          user.email,
          user.phone || "Not provided",
          formatDate(user.createdAt),
          "Customer demo"
        ].forEach((value) => row.append(createCell(value)));
        body.append(row);
      });
      empty.hidden = results.length > 0;
      setTableStatus(status, results.length, "profiles");
    };
    search.addEventListener("input", render);
    filter.addEventListener("change", render);
    render();
  }

  function setupRequests() {
    const search = shell.querySelector("#admin-request-search");
    const filter = shell.querySelector("#admin-request-filter");
    const body = shell.querySelector("[data-admin-request-rows]");
    const status = shell.querySelector("[data-admin-table-status]");
    const empty = shell.querySelector("[data-admin-empty]");
    const feedback = shell.querySelector("[data-admin-status]");
    const render = () => {
      const query = search.value.trim().toLocaleLowerCase();
      const selectedStatus = filter.value;
      const results = requests
        .filter((request) => {
          const matchesText = `${request.id} ${request.service} ${request.ownerEmail} ${request.location}`.toLocaleLowerCase().includes(query);
          return matchesText && (!selectedStatus || normalizeRequestStatus(request.status) === selectedStatus);
        })
        .sort(sortNewest);
      body.replaceChildren();
      results.forEach((request) => {
        const row = document.createElement("tr");
        row.append(
          createCell(request.id),
          createCell(request.service),
          createCell(request.ownerEmail),
          createCell(request.location),
          createCell(formatDate(request.createdAt))
        );
        const statusCell = document.createElement("td");
        const select = document.createElement("select");
        select.className = "form-select";
        select.setAttribute("aria-label", `Update status for ${request.id}`);
        ["Under Process", "Service Allocated", "On the Way", "Reached", "Completed", "Cancelled"].forEach((value) => {
          const option = document.createElement("option");
          option.value = value;
          option.textContent = value;
          option.selected = value === normalizeRequestStatus(request.status);
          select.append(option);
        });
        const update = document.createElement("button");
        update.className = "button button--secondary mt-2";
        update.type = "button";
        update.textContent = "Save status";
        update.addEventListener("click", () => {
          try {
            const latest = readArray(requestKey, (item) => typeof item?.id === "string" && typeof item?.ownerEmail === "string" && typeof item?.status === "string");
            const index = latest.findIndex((item) => item.id === request.id);
            if (index < 0) throw new Error("This request is no longer available in local demo storage.");
            latest[index] = { ...latest[index], status: select.value, updatedAt: new Date().toISOString() };
            localStorage.setItem(requestKey, JSON.stringify(latest));
            requests = latest;
            setupStatus(feedback, `Request ${request.id} status saved locally as ${select.value}.`, "success");
            render();
          } catch (error) {
            setupStatus(feedback, `The request status could not be saved: ${error.message}`, "error");
          }
        });
        statusCell.append(select, update);
        row.append(statusCell);
        body.append(row);
      });
      empty.hidden = results.length > 0;
      setTableStatus(status, results.length, "requests");
    };
    search.addEventListener("input", render);
    filter.addEventListener("change", render);
    render();
  }

  function setupMessages() {
    const search = shell.querySelector("#admin-message-search");
    const topicFilter = shell.querySelector("#admin-message-topic");
    const statusFilter = shell.querySelector("#admin-message-status");
    const body = shell.querySelector("[data-admin-message-rows]");
    const status = shell.querySelector("[data-admin-table-status]");
    const empty = shell.querySelector("[data-admin-empty]");
    const feedback = shell.querySelector("[data-admin-status]");
    const render = () => {
      const query = search.value.trim().toLocaleLowerCase();
      const topic = topicFilter.value;
      const selectedStatus = statusFilter.value;
      const results = messages.map((message, index) => ({ message, index, state: getMessageStatus(message, index) }))
        .filter(({ message, index, state }) => {
          const matchesText = `${message.name || ""} ${message.email} ${message.topic || ""} ${message.message}`.toLocaleLowerCase().includes(query);
          return matchesText && (!topic || message.topic === topic) && (!selectedStatus || selectedStatus === state);
        })
        .sort((first, second) => Date.parse(second.message.submittedAt || 0) - Date.parse(first.message.submittedAt || 0));
      body.replaceChildren();
      results.forEach(({ message, index, state }) => {
        const row = document.createElement("tr");
        [
          message.name || "Name not provided",
          message.email,
          message.topic || "Other",
          message.phone || "Not provided",
          message.message,
          formatDate(message.submittedAt)
        ].forEach((value) => row.append(createCell(value)));
        const actionCell = document.createElement("td");
        const stateLabel = document.createElement("span");
        stateLabel.className = "admin-state-pill";
        stateLabel.textContent = state;
        const update = document.createElement("button");
        update.className = "button button--secondary mt-2";
        update.type = "button";
        update.textContent = state === "New" ? "Mark reviewed" : "Mark new";
        update.addEventListener("click", () => updateMessageStatus(index, state === "New" ? "Reviewed" : "New", feedback, render));
        actionCell.append(stateLabel, update);
        row.append(actionCell);
        body.append(row);
      });
      empty.hidden = results.length > 0;
      setTableStatus(status, results.length, "messages");
    };
    search.addEventListener("input", render);
    topicFilter.addEventListener("change", render);
    statusFilter.addEventListener("change", render);
    render();
  }

  function updateMessageStatus(index, nextState, feedback, rerender) {
    try {
      const statuses = readArray(messageStatusKey, (item) => typeof item?.index === "number" && typeof item?.state === "string");
      const existing = statuses.find((item) => item.index === index);
      if (existing) existing.state = nextState;
      else statuses.push({ index, state: nextState });
      localStorage.setItem(messageStatusKey, JSON.stringify(statuses));
      messageStatuses = statuses;
      setupStatus(feedback, `Message marked ${nextState.toLowerCase()} in this browser.`, "success");
      rerender();
    } catch (error) {
      setupStatus(feedback, `The message status could not be saved: ${error.message}`, "error");
    }
  }

  function getMessageStatus(message, index) {
    return messageStatuses.find((item) => item.index === index)?.state || message.reviewStatus || "New";
  }

  function renderAnalytics() {
    shell.querySelector("[data-admin-stat-requests]").textContent = String(requests.length);
    shell.querySelector("[data-admin-stat-active]").textContent = String(requests.filter((request) => !["Completed", "Cancelled"].includes(request.status)).length);
    shell.querySelector("[data-admin-stat-users]").textContent = String(profiles.length);
    shell.querySelector("[data-admin-stat-messages]").textContent = String(messages.length);
    const chart = shell.querySelector("[data-admin-activity-chart]");
    const start = new Date();
    start.setHours(0, 0, 0, 0);
    start.setDate(start.getDate() - 6);
    const counts = Array.from({ length: 7 }, (_, index) => {
      const date = new Date(start);
      date.setDate(start.getDate() + index);
      return { date, count: requests.filter((request) => {
        const created = new Date(request.createdAt);
        return created.getFullYear() === date.getFullYear() && created.getMonth() === date.getMonth() && created.getDate() === date.getDate();
      }).length };
    });
    const maximum = Math.max(1, ...counts.map((item) => item.count));
    chart.replaceChildren();
    counts.forEach(({ date, count }) => {
      const column = document.createElement("div");
      column.className = "admin-chart__column";
      const barWrap = document.createElement("div");
      barWrap.className = "admin-chart__bar-wrap";
      const bar = document.createElement("span");
      bar.className = "admin-chart__bar";
      bar.style.height = `${Math.max(2, (count / maximum) * 100)}%`;
      bar.setAttribute("aria-hidden", "true");
      barWrap.append(bar);
      const label = document.createElement("span");
      label.className = "admin-chart__label";
      label.textContent = new Intl.DateTimeFormat(undefined, { weekday: "short" }).format(date);
      const value = document.createElement("span");
      value.className = "admin-chart__value";
      value.textContent = String(count);
      column.append(barWrap, value, label);
      chart.append(column);
    });
    chart.setAttribute("aria-label", `Local demo requests for the last seven days: ${counts.map((item) => `${item.count}`).join(", ")}`);
    const breakdown = shell.querySelector("[data-admin-status-breakdown]");
    const statuses = ["Under Process", "Service Allocated", "On the Way", "Reached", "Completed", "Cancelled"]
      .map((label) => ({ label, count: requests.filter((request) => normalizeRequestStatus(request.status) === label).length }));
    const maximumStatus = Math.max(1, ...statuses.map((item) => item.count));
    breakdown.replaceChildren();
    statuses.forEach(({ label, count }) => {
      const row = document.createElement("div");
      row.className = "admin-progress-row";
      const title = document.createElement("span");
      title.textContent = label;
      const value = document.createElement("strong");
      value.textContent = String(count);
      const track = document.createElement("span");
      track.className = "admin-progress-track";
      const bar = document.createElement("span");
      bar.className = "admin-progress-bar";
      bar.style.width = `${(count / maximumStatus) * 100}%`;
      track.append(bar);
      row.append(title, value, track);
      breakdown.append(row);
    });
  }

  function normalizeRequestStatus(status) {
    const legacyStatuses = { Received: "Under Process", Assigned: "Service Allocated", "En Route": "On the Way" };
    return legacyStatuses[status] || status;
  }

  function setupSettings() {
    const form = shell.querySelector("[data-admin-settings-form]");
    const status = shell.querySelector("[data-admin-settings-status]");
    const defaults = {
      companyName: "RoadRescue",
      supportEmail: "hello@roadrescue.example.com",
      supportPhone: "+18005550199",
      dispatchNote: "Local demo settings only. Configure production systems before use."
    };
    const populate = () => {
      try {
        const stored = localStorage.getItem(settingsKey);
        const settings = stored ? JSON.parse(stored) : defaults;
        if (!settings || typeof settings !== "object" || Array.isArray(settings)) {
          throw new Error("Stored settings are not in the expected format.");
        }
        form.elements.companyName.value = settings.companyName || defaults.companyName;
        form.elements.supportEmail.value = settings.supportEmail || defaults.supportEmail;
        form.elements.supportPhone.value = settings.supportPhone || defaults.supportPhone;
        form.elements.dispatchNote.value = settings.dispatchNote || defaults.dispatchNote;
      } catch (error) {
        setupStatus(status, `Settings could not be loaded: ${error.message}`, "error");
      }
    };
    form.addEventListener("submit", (event) => {
      event.preventDefault();
      status.textContent = "";
      status.dataset.state = "";
      if (!form.reportValidity()) return;
      const settings = {
        companyName: form.elements.companyName.value.trim(),
        supportEmail: form.elements.supportEmail.value.trim(),
        supportPhone: form.elements.supportPhone.value.trim(),
        dispatchNote: form.elements.dispatchNote.value.trim()
      };
      try {
        localStorage.setItem(settingsKey, JSON.stringify(settings));
        setupStatus(status, "Admin demo settings saved in this browser only.", "success");
      } catch (error) {
        setupStatus(status, `Settings could not be saved: ${error.message}`, "error");
      }
    });
    shell.querySelector("[data-admin-settings-reset]").addEventListener("click", () => {
      try {
        localStorage.removeItem(settingsKey);
        populate();
        setupStatus(status, "Admin demo settings were reset to the sample defaults.", "success");
      } catch (error) {
        setupStatus(status, `Settings could not be reset: ${error.message}`, "error");
      }
    });
    populate();
  }

  function renderRequestRows(container, list) {
    container.replaceChildren();
    if (!list.length) {
      const empty = document.createElement("p");
      empty.className = "admin-empty";
      empty.textContent = "No local requests yet. Submitted customer requests will appear here.";
      container.append(empty);
      return;
    }
    list.forEach((request) => {
      const item = document.createElement("div");
      item.className = "admin-recent-item";
      const summary = document.createElement("div");
      const title = document.createElement("h3");
      title.textContent = `${request.service} · ${request.id}`;
      const details = document.createElement("p");
      details.textContent = `${request.ownerEmail} · ${formatDate(request.createdAt)}`;
      summary.append(title, details);
      const state = document.createElement("span");
      state.className = "admin-state-pill";
      state.textContent = request.status;
      item.append(summary, state);
      container.append(item);
    });
  }

  function createCell(value) {
    const cell = document.createElement("td");
    cell.textContent = String(value ?? "");
    return cell;
  }

  function setTableStatus(element, count, label) {
    element.textContent = `${count} ${count === 1 ? label.replace(/s$/, "") : label} found.`;
  }

  function sortNewest(first, second) {
    return Date.parse(second.createdAt || 0) - Date.parse(first.createdAt || 0);
  }

  function formatDate(value) {
    const date = new Date(value);
    return Number.isNaN(date.getTime())
      ? "Date unavailable"
      : new Intl.DateTimeFormat(undefined, { dateStyle: "medium", timeStyle: "short" }).format(date);
  }
})();
