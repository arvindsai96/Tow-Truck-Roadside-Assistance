(() => {
  const storageKey = "roadrescue-direction";
  const savedDirection = localStorage.getItem(storageKey);
  const initialDirection = savedDirection === "rtl" || savedDirection === "ltr"
    ? savedDirection
    : document.documentElement.getAttribute("dir") || "ltr";

  applyDirection(initialDirection);
  document.addEventListener("DOMContentLoaded", () => {
    applyDirection(document.documentElement.dir);
  });

  document.addEventListener("click", (event) => {
    const target = event.target;
    if (!(target instanceof Element)) return;
    const toggle = target.closest("[data-rtl-toggle]");
    if (!toggle) return;

    const nextDirection = document.documentElement.dir === "rtl" ? "ltr" : "rtl";
    localStorage.setItem(storageKey, nextDirection);
    applyDirection(nextDirection);
  });

  function applyDirection(direction) {
    const normalizedDirection = direction === "rtl" ? "rtl" : "ltr";
    document.documentElement.dir = normalizedDirection;
    document.querySelectorAll("[data-rtl-toggle]").forEach((toggle) => {
      const isRtl = normalizedDirection === "rtl";
      toggle.setAttribute("aria-pressed", String(isRtl));
      toggle.setAttribute("aria-label", `${isRtl ? "Disable" : "Enable"} right-to-left layout`);
    });
  }
})();
