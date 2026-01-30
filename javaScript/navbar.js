const hamburger = document.getElementById("hamburger");
const navLinks = document.getElementById("nav-links");
const navLinkEls = document.querySelectorAll(".nav-link");

hamburger?.addEventListener("click", () => {
  const expanded = hamburger.getAttribute("aria-expanded") === "true";
  hamburger.setAttribute("aria-expanded", String(!expanded));
  navLinks?.classList.toggle("open");
});

function onScrollActive() {
  const fromTop = window.scrollY + 120;

  navLinkEls.forEach((link) => {
    const section = document.querySelector(link.hash);
    if (!section) return;

    if (
      section.offsetTop <= fromTop &&
      section.offsetTop + section.offsetHeight > fromTop
    ) {
      link.classList.add("active");
    } else {
      link.classList.remove("active");
    }
  });
}

window.addEventListener("scroll", onScrollActive);
document.addEventListener("DOMContentLoaded", onScrollActive);
