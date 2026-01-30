document.addEventListener("click", (e) => {
  const ripple = document.createElement("span");
  ripple.classList.add("ripple");
  ripple.style.left = `${e.pageX}px`;
  ripple.style.top = `${e.pageY}px`;
  document.body.appendChild(ripple);

  setTimeout(() => ripple.remove(), 600);
});
