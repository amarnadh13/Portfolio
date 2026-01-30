// EmailJS init
if (typeof emailjs !== "undefined") {
  emailjs.init("qI4s2MLTVYabUlZ1i");
}

const contactModal = document.getElementById("contact-modal");
const openContactBtns = document.querySelectorAll(
  "#open-contact, #open-contact-2"
);
const closeModal = document.getElementById("modal-close");
const cancelModal = document.getElementById("modal-cancel");
const contactForm = document.getElementById("contact-form");
const feedback = document.getElementById("form-feedback");

openContactBtns.forEach((btn) =>
  btn.addEventListener("click", () => {
    contactModal.classList.add("open");
    contactModal.setAttribute("aria-hidden", "false");
    document.body.style.overflow = "hidden";
    document.getElementById("name").focus();
  })
);
// CLOSE MODAL FUNCTION
function closeContact() {
  contactModal.classList.remove("open");
  contactModal.setAttribute("aria-hidden", "true");
  document.body.style.overflow = "";
  contactForm.reset();
  feedback.textContent = "";
}

// CLOSE BUTTONS
closeModal.addEventListener("click", closeContact);
cancelModal.addEventListener("click", closeContact);
contactModal.addEventListener("click", (e) => {
  if (e.target === contactModal) closeContact();
});

contactForm.addEventListener("submit", (e) => {
  e.preventDefault();

  const data = {
    name: document.getElementById("name").value.trim(),
    email: document.getElementById("email").value.trim(),
    message: document.getElementById("message").value.trim(),
  };

  if (!data.name || !data.email || !data.message) {
    feedback.textContent = "Please fill all fields!";
    feedback.className = "error";
    return;
  }

  // Email validation
  const emailRx = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  if (!emailRx.test(data.email)) {
    feedback.textContent = "Please enter a valid email.";
    feedback.className = "error";
    return;
  }

  feedback.textContent = "Sending...";
  feedback.className = "";

  // 1️⃣ Send message to YOU
  emailjs
    .send("service_oj07aki", "template_7une0lm", data)
    .then(() => {
      // 2️⃣ Auto-reply to USER
      return emailjs.send("service_oj07aki", "template_i9c6zxl", data);
    })
    .then(() => {
      feedback.textContent = "✅ Message sent successfully!";
      feedback.className = "success";
      setTimeout(closeContact, 1200);
    })
    .catch(() => {
      feedback.textContent = "❌ Failed to send. Try again!";
      feedback.className = "error";
    });
});
