(() => {
  const countdown = document.querySelector("[data-countdown]");
  if (!countdown) return;

  const target = Date.parse(countdown.dataset.countdownTarget || "");
  const message = document.querySelector("[data-countdown-message]");
  const dateLabel = document.querySelector("[data-countdown-date]");
  if (Number.isNaN(target)) {
    message.textContent = "The countdown date is invalid. Update the data-countdown-target value in this page.";
    return;
  }

  dateLabel.dateTime = new Date(target).toISOString();
  dateLabel.textContent = new Intl.DateTimeFormat(undefined, {
    dateStyle: "long",
    timeStyle: "short"
  }).format(target);

  const fields = {
    days: countdown.querySelector("[data-countdown-days]"),
    hours: countdown.querySelector("[data-countdown-hours]"),
    minutes: countdown.querySelector("[data-countdown-minutes]"),
    seconds: countdown.querySelector("[data-countdown-seconds]")
  };

  const updateCountdown = () => {
    const remaining = Math.max(0, Math.floor((target - Date.now()) / 1000));
    const values = {
      days: Math.floor(remaining / 86400),
      hours: Math.floor((remaining % 86400) / 3600),
      minutes: Math.floor((remaining % 3600) / 60),
      seconds: remaining % 60
    };
    Object.entries(values).forEach(([unit, value]) => {
      fields[unit].textContent = String(value).padStart(2, "0");
    });
    if (remaining === 0) message.textContent = "The sample launch date has arrived. Update this message for your launch.";
  };

  updateCountdown();
  window.setInterval(updateCountdown, 1000);
})();
