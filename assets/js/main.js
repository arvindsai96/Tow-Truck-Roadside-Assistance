document.addEventListener("click", (event) => {
  const target = event.target;
  if (!(target instanceof Element)) return;

  const navToggle = target.closest("[data-nav-toggle]");
  if (navToggle) {
    const navigation = document.querySelector("#primary-navigation");
    const isExpanded = navToggle.getAttribute("aria-expanded") === "true";
    navToggle.setAttribute("aria-expanded", String(!isExpanded));
    navToggle.setAttribute("aria-label", isExpanded ? "Open navigation menu" : "Close navigation menu");
    navigation?.classList.toggle("is-open", !isExpanded);
    return;
  }

  const dropdownToggle = target.closest("[data-dropdown-toggle]");
  if (dropdownToggle) {
    const dropdown = dropdownToggle.closest("[data-nav-dropdown]");
    const isExpanded = dropdownToggle.getAttribute("aria-expanded") === "true";
    dropdownToggle.setAttribute("aria-expanded", String(!isExpanded));
    dropdown?.classList.toggle("is-open", !isExpanded);
    return;
  }

  if (target.closest(".site-nav__link, .site-nav__signin, .site-nav__actions .button")) {
    closeNavigation();
    return;
  }

  if (!target.closest(".site-nav")) closeNavigation();
});

document.addEventListener("keydown", (event) => {
  if (event.key === "Escape") closeNavigation();
});

document.addEventListener("DOMContentLoaded", () => {
  document.querySelectorAll("[data-current-year]").forEach((element) => {
    element.textContent = String(new Date().getFullYear());
  });

  const currentPage = window.location.pathname.split("/").pop() || "index.html";
  const navigationPage = currentPage === "service-details.html"
    ? "services.html"
    : currentPage === "blog-details.html"
      ? "blog.html"
      : ["register.html", "forgot-password.html"].includes(currentPage)
        ? "login.html"
        : currentPage;
  const links = Array.from(document.querySelectorAll(".site-nav__link[href], .site-nav__signin[href]"));
  const activeLink = links.find((link) => (
    link.getAttribute("href") === navigationPage && !link.closest(".site-nav__dropdown")
  )) || links.find((link) => link.getAttribute("href") === navigationPage);
  activeLink?.setAttribute("aria-current", "page");
  // Interactive Coverage Map Zone Switcher
  const zoneButtons = document.querySelectorAll("[data-coverage-zone-btn]");
  if (zoneButtons.length) {
    const iframe = document.querySelector("#coverage-map-iframe");
    const extLink = document.querySelector("#coverage-map-ext-link");
    const zoneLabel = document.querySelector("#coverage-zone-label");

    zoneButtons.forEach((btn) => {
      btn.addEventListener("click", () => {
        zoneButtons.forEach((b) => {
          b.classList.remove("is-active");
          b.setAttribute("aria-selected", "false");
        });
        btn.classList.add("is-active");
        btn.setAttribute("aria-selected", "true");

        const lat = btn.getAttribute("data-lat");
        const lng = btn.getAttribute("data-lng");
        const zoom = btn.getAttribute("data-zoom");
        const zone = btn.getAttribute("data-zone");
        const query = btn.getAttribute("data-query");

        if (iframe && lat && lng && zoom) {
          iframe.src = `https://maps.google.com/maps?q=${encodeURIComponent(lat + ',' + lng)}&z=${encodeURIComponent(zoom)}&output=embed`;
        }
        if (extLink && query) {
          extLink.href = `https://www.google.com/maps/search/?api=1&query=${encodeURIComponent(query)}`;
        }
        if (zoneLabel && zone) {
          zoneLabel.innerHTML = zone;
        }
      });
    });
  }

});

function closeNavigation() {
  const navigation = document.querySelector("#primary-navigation");
  const navToggle = document.querySelector("[data-nav-toggle]");
  navigation?.classList.remove("is-open");
  navToggle?.setAttribute("aria-expanded", "false");
  navToggle?.setAttribute("aria-label", "Open navigation menu");

  document.querySelectorAll("[data-nav-dropdown]").forEach((dropdown) => {
    dropdown.classList.remove("is-open");
    dropdown.querySelector("[data-dropdown-toggle]")?.setAttribute("aria-expanded", "false");
  });
}
