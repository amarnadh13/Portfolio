const textArray = [
  "Guntur Amarnadh",
  "Web Developer",
  "Web Designer",
  "Java Learner",
];

let index = 0;
let charIndex = 0;
const typingElement = document.querySelector(".typing");

function type() {
  if (!typingElement) return;

  if (charIndex < textArray[index].length) {
    typingElement.textContent += textArray[index].charAt(charIndex);
    charIndex++;
    setTimeout(type, 120);
  } else {
    setTimeout(erase, 1500);
  }
}

function erase() {
  if (charIndex > 0) {
    typingElement.textContent = textArray[index].substring(0, charIndex - 1);
    charIndex--;
    setTimeout(erase, 80);
  } else {
    index = (index + 1) % textArray.length;
    setTimeout(type, 200);
  }
}

document.addEventListener("DOMContentLoaded", type);
