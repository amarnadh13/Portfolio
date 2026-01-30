const themeToggle = document.getElementById("theme-toggle");

const prefersDark =
  window.matchMedia &&
  window.matchMedia("(prefers-color-scheme: dark)").matches;

const currentTheme =
  localStorage.getItem("theme") || (prefersDark ? "dark" : "light");

document.documentElement.setAttribute("data-theme", currentTheme);
updateThemeIcon();

themeToggle?.addEventListener("click", () => {
  const next =
    document.documentElement.getAttribute("data-theme") === "dark"
      ? "light"
      : "dark";

  document.documentElement.setAttribute("data-theme", next);
  localStorage.setItem("theme", next);
  updateThemeIcon();
});

function updateThemeIcon() {
  if (!themeToggle) return;
  const icon = themeToggle.querySelector("i");

  icon.className =
    document.documentElement.getAttribute("data-theme") === "dark"
      ? "fa-solid fa-sun"
      : "fa-regular fa-moon";
}
