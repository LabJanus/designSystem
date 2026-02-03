// src/js/main.js
document.addEventListener("DOMContentLoaded", () => {
  const startBtn = document.querySelector("[data-start]");
  if (startBtn) {
    startBtn.addEventListener("click", (e) => {
      e.preventDefault();
      const target = document.querySelector("#get-started");
      if (target) target.scrollIntoView({ behavior: "smooth", block: "start" });
    });
  }
    // element: document.querySelector('.ds-card')
    // imageUrl: kullanıcıdan gelen yol veya yüklenen dosyanın URL'si
    function setCardBackground(element, imageUrl) {
      if (!element || !imageUrl) return;
      element.style.backgroundImage = `url("${imageUrl}")`;
    }

  // Card keyboard accessibility
  document.querySelectorAll(".card").forEach(card => {
    card.tabIndex = 0;
    card.addEventListener("keydown", (e) => {
      if (e.key === "Enter" || e.key === " ") {
        e.preventDefault();
        card.classList.toggle("is-active");
      }
    });
  });
    // Dinamik arka plan atama
    const card = document.querySelector('.ds-card');
    if (card) {
      // Örnek: asset yolunu burada ver
      const imagePath = 'REPLACE_WITH_IMAGE_PATH';
      card.style.backgroundImage = `url("${imagePath}")`;
    }

  // Theme toggle
  const themeToggle = document.querySelector("[data-theme-toggle]");
  const root = document.documentElement;
  const saved = localStorage.getItem("ds-theme");
  if (saved === "dark") root.classList.add("dark");
  if (themeToggle) {
    themeToggle.addEventListener("click", () => {
      const isDark = root.classList.toggle("dark");
      localStorage.setItem("ds-theme", isDark ? "dark" : "light");
      themeToggle.setAttribute("aria-pressed", isDark ? "true" : "false");
    });
  }
});
