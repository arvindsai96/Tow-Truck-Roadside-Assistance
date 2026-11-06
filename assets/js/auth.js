(() => {
  const profileKey = "roadrescue-demo-profiles";
  const sessionKey = "roadrescue-demo-session";

  document.querySelectorAll("[data-auth-form]").forEach((form) => {
    const status = form.querySelector("[data-auth-status]");
    form.addEventListener("invalid", (event) => {
      if (!status || !(event.target instanceof HTMLInputElement || event.target instanceof HTMLSelectElement || event.target instanceof HTMLTextAreaElement)) return;
      status.textContent = event.target.validationMessage;
      status.dataset.state = "error";
    }, true);
    form.addEventListener("input", (event) => {
      if (!status || !(event.target instanceof HTMLInputElement || event.target instanceof HTMLSelectElement || event.target instanceof HTMLTextAreaElement)) return;
      if (event.target.validity.valid) {
        status.textContent = "";
        status.dataset.state = "";
      }
    }, true);
  });

  document.querySelectorAll("[data-password-toggle]").forEach((toggle) => {
    toggle.addEventListener("click", () => {
      const input = document.getElementById(toggle.getAttribute("aria-controls"));
      if (!(input instanceof HTMLInputElement)) return;
      const showPassword = input.type === "password";
      input.type = showPassword ? "text" : "password";
      toggle.setAttribute("aria-pressed", String(showPassword));
      toggle.setAttribute("aria-label", `${showPassword ? "Hide" : "Show"} password`);
      const icon = toggle.querySelector("i");
      if (icon) {
        icon.classList.toggle("bi-eye", !showPassword);
        icon.classList.toggle("bi-eye-slash", showPassword);
      } else {
        toggle.textContent = showPassword ? "Hide" : "Show";
      }
    });
  });

  const registerForm = document.querySelector('[data-auth-form="register"]');
  if (registerForm) {
    const password = registerForm.elements.password;
    const confirmation = registerForm.elements.confirmPassword;
    const meter = registerForm.querySelector("[data-password-meter]");
    const meterFill = registerForm.querySelector("[data-password-meter-fill]");
    const meterLabel = registerForm.querySelector("[data-password-meter-label]");

    const updatePasswordFeedback = () => {
      const value = password.value;
      const checks = [
        value.length >= 8,
        /[a-z]/.test(value),
        /[A-Z]/.test(value),
        /\d/.test(value),
        /[^A-Za-z0-9]/.test(value)
      ];
      const score = checks.filter(Boolean).length;
      const labels = ["Not entered", "Very weak", "Weak", "Fair", "Good", "Strong"];
      meter.setAttribute("aria-valuenow", String(score));
      meterFill.style.width = `${score * 20}%`;
      meterFill.dataset.score = String(score);
      meterLabel.textContent = `Password strength: ${labels[score]}. Use at least 8 characters with upper- and lowercase letters, a number, and a symbol.`;
      password.setCustomValidity(score < 5 ? "Use at least 8 characters with upper- and lowercase letters, a number, and a symbol." : "");
      confirmation.setCustomValidity(confirmation.value && confirmation.value !== value ? "Passwords do not match." : "");
    };

    password.addEventListener("input", updatePasswordFeedback);
    confirmation.addEventListener("input", updatePasswordFeedback);
    registerForm.addEventListener("submit", (event) => {
      event.preventDefault();
      const status = registerForm.querySelector("[data-auth-status]");
      status.textContent = "";
      status.dataset.state = "";
      updatePasswordFeedback();
      if (!registerForm.reportValidity()) {
        status.textContent = "Check the highlighted fields and password requirements.";
        status.dataset.state = "error";
        return;
      }

      const profile = {
        name: registerForm.elements.name.value.trim(),
        email: registerForm.elements.email.value.trim().toLowerCase(),
        createdAt: new Date().toISOString()
      };
      try {
        const profiles = readProfiles();
        if (profiles.some((item) => item.email === profile.email)) {
          status.textContent = "An account already exists for this email. Try signing in instead.";
          status.dataset.state = "error";
          return;
        }
        profiles.push(profile);
        localStorage.setItem(profileKey, JSON.stringify(profiles));
      } catch (error) {
        status.textContent = `The profile could not be saved: ${error.message}`;
        status.dataset.state = "error";
        return;
      }

      registerForm.reset();
      updatePasswordFeedback();
      status.textContent = "Account profile created successfully. You can now sign in.";
      status.dataset.state = "success";
    });
  }

  const loginForm = document.querySelector('[data-auth-form="login"]');
  if (loginForm) {
    const status = loginForm.querySelector("[data-auth-status]");
    // Ensure email and password fields start completely empty on page load
    if (loginForm.elements.email) loginForm.elements.email.value = "";
    if (loginForm.elements.password) loginForm.elements.password.value = "";

    loginForm.addEventListener("submit", (event) => {
      event.preventDefault();
      if (status) {
        status.textContent = "";
        status.dataset.state = "";
      }
      if (!loginForm.reportValidity()) {
        if (status) {
          status.innerHTML = `<i class="bi bi-exclamation-circle-fill" aria-hidden="true"></i> <span>Please enter a valid email and password to continue.</span>`;
          status.dataset.state = "error";
        }
        return;
      }

      completeSignIn(loginForm.elements.email.value, {
        rememberBrowser: loginForm.elements.rememberBrowser ? loginForm.elements.rememberBrowser.checked : true,
        successMessage: "Login successful! Welcome to RoadRescue"
      });
    });

    loginForm.querySelectorAll("[data-provider-login]").forEach((button) => {
      button.addEventListener("click", () => {
        const emailInput = loginForm.elements.email;
        const providerName = button.dataset.providerLogin || "Account";
        const emailToUse = (emailInput && emailInput.value.trim()) ? emailInput.value.trim() : "driver@roadrescue.com";

        completeSignIn(emailToUse, {
          rememberBrowser: loginForm.elements.rememberBrowser ? loginForm.elements.rememberBrowser.checked : true,
          successMessage: `Authenticated with ${providerName}! Welcome to RoadRescue`
        });
      });
    });
  }

  const resetForm = document.querySelector('[data-auth-form="reset"]');
  if (resetForm) {
    resetForm.addEventListener("submit", (event) => {
      event.preventDefault();
      const status = resetForm.querySelector("[data-auth-status]");
      status.textContent = "";
      status.dataset.state = "";
      if (!resetForm.reportValidity()) {
        status.textContent = "Enter a valid email address.";
        status.dataset.state = "error";
        return;
      }
      resetForm.reset();
      status.textContent = "A password reset link has been sent to your email address.";
      status.dataset.state = "info";
    });
  }

  function readProfiles() {
    const storedProfiles = localStorage.getItem(profileKey);
    if (!storedProfiles) return [];
    try {
      const profiles = JSON.parse(storedProfiles);
      if (!Array.isArray(profiles)) return [];
      return profiles;
    } catch {
      return [];
    }
  }

  function completeSignIn(emailValue, { rememberBrowser, successMessage }) {
    const normalizedEmail = emailValue.trim().toLowerCase();
    const status = statusForLogin();
    try {
      let profiles = readProfiles();
      let profile = profiles.find((item) => item.email === normalizedEmail);
      if (!profile) {
        const userPrefix = normalizedEmail.split("@")[0].replace(/[._-]/g, " ");
        const formattedName = userPrefix.charAt(0).toUpperCase() + userPrefix.slice(1);
        profile = {
          name: formattedName || "Driver",
          email: normalizedEmail,
          createdAt: new Date().toISOString()
        };
        profiles.push(profile);
        localStorage.setItem(profileKey, JSON.stringify(profiles));
      }

      const session = {
        email: profile.email,
        name: profile.name,
        signedInAt: new Date().toISOString(),
        rememberBrowser
      };
      if (rememberBrowser) {
        localStorage.setItem(sessionKey, JSON.stringify(session));
        sessionStorage.removeItem(sessionKey);
      } else {
        sessionStorage.setItem(sessionKey, JSON.stringify(session));
        localStorage.removeItem(sessionKey);
      }

      const loginForm = document.querySelector('[data-auth-form="login"]');
      if (loginForm && loginForm.elements.password) {
        loginForm.elements.password.value = "";
      }
      if (status) {
        status.innerHTML = `<i class="bi bi-check-circle-fill" aria-hidden="true"></i> <span>${successMessage}</span>`;
        status.dataset.state = "success";
      }

      const submitBtn = document.querySelector(".login-card__submit");
      if (submitBtn) {
        submitBtn.removeAttribute("disabled");
        submitBtn.innerHTML = `<span>Sign In</span> <i class="bi bi-arrow-right icon-directional" aria-hidden="true"></i>`;
      }
    } catch (error) {
      if (status) {
        status.innerHTML = `<i class="bi bi-exclamation-circle-fill" aria-hidden="true"></i> <span>Sign in could not be completed: ${error.message}</span>`;
        status.dataset.state = "error";
      }
    }
  }

  function statusForLogin() {
    return document.querySelector('[data-auth-form="login"] [data-auth-status]');
  }
})();