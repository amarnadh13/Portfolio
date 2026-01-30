document.addEventListener("DOMContentLoaded", () => {
  const boxes = document.querySelectorAll(".box");

  boxes.forEach((box) => {
    const percent = box.getAttribute("data-percent");
    const bar = box.querySelector(".progress-bar");
    const number = box.querySelector(".percentage span");

    if (!bar || !number) return;

    bar.style.width = percent + "%";

    let count = 0;
    const timer = setInterval(() => {
      count++;
      number.textContent = count;

      if (count == percent) {
        clearInterval(timer);
      }
    }, 15);
  });
});
