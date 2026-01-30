const projectData = {
  project1: {
    title: "Billing-Software-Spring-Boot-Application",
    images: [
      {
        src: "https://portfolio-images-amarnadh1.s3.ap-south-1.amazonaws.com/Project1/Dashboard.png",
        caption: "Dashboard",
      },
      {
        src: "https://portfolio-images-amarnadh1.s3.ap-south-1.amazonaws.com/Project1/Explore.png",
        caption: "Explore",
      },
      {
        src: "https://portfolio-images-amarnadh1.s3.ap-south-1.amazonaws.com/Project1/UpiPaymentPage.png",
        caption: "UPI Payment Page",
      },
      {
        src: "https://portfolio-images-amarnadh1.s3.ap-south-1.amazonaws.com/Project1/UpiPaymentSuccessful.png",
        caption: "UPI Payment Successful Page",
      },
      {
        src: "https://portfolio-images-amarnadh1.s3.ap-south-1.amazonaws.com/Project1/PrintReceipt.png",
        caption: "Print Receipt",
      },
      {
        src: "https://portfolio-images-amarnadh1.s3.ap-south-1.amazonaws.com/Project1/ManageItems.png",
        caption: "Manage Items",
      },
      {
        src: "https://portfolio-images-amarnadh1.s3.ap-south-1.amazonaws.com/Project1/ManageCategory.png",
        caption: "Manage Category",
      },
      {
        src: "https://portfolio-images-amarnadh1.s3.ap-south-1.amazonaws.com/Project1/ManageUsers.png",
        caption: "Manage Users",
      },
      {
        src: "https://portfolio-images-amarnadh1.s3.ap-south-1.amazonaws.com/Project1/OrderHistory.png",
        caption: "Order History",
      },
    ],
  },
  project2: {
    title: "Apex Website Figma Design",
    images: [
      {
        src: "https://portfolio-images-amarnadh1.s3.ap-south-1.amazonaws.com/project2/Homepage.png",
        caption: "Home Page",
      },
      {
        src: "https://portfolio-images-amarnadh1.s3.ap-south-1.amazonaws.com/project2/About.png",
        caption: "About Page",
      },
      {
        src: "https://portfolio-images-amarnadh1.s3.ap-south-1.amazonaws.com/project2/Gallery.png",
        caption: "Gallery Page",
      },
      {
        src: "https://portfolio-images-amarnadh1.s3.ap-south-1.amazonaws.com/project2/Contact.png",
        caption: "Contact Page",
      },
      {
        src: "https://portfolio-images-amarnadh1.s3.ap-south-1.amazonaws.com/project2/Courses.png",
        caption: "Courses Page",
      },
      {
        src: "https://portfolio-images-amarnadh1.s3.ap-south-1.amazonaws.com/project2/Testimonials.png",
        caption: "Testimonials Page",
      },
      {
        src: "https://portfolio-images-amarnadh1.s3.ap-south-1.amazonaws.com/project2/Footer.png",
        caption: "Footer Page",
      },
    ],
  },
};

let currentProject;
let index = 0;
let autoSlide;

document.addEventListener("DOMContentLoaded", () => {
  const modal = document.getElementById("projectModal");
  const img = document.getElementById("modalImage");
  const caption = document.getElementById("modalCaption");
  const title = document.getElementById("modalTitle");
  const closeBtn = modal.querySelector(".close-btn");
  const prevBtn = modal.querySelector(".prev");
  const nextBtn = modal.querySelector(".next");

  function openModal(key) {
    currentProject = projectData[key];
    index = 0;
    document.getElementById("projectModal").style.display = "flex";
    document.body.style.overflow = "hidden";
    title.textContent = currentProject.title;
    showImage();
    autoSlide = setInterval(() => changeSlide(1), 5000);
  }

  function closeModal() {
    document.getElementById("projectModal").style.display = "none";
    document.body.style.overflow = "auto";
    clearInterval(autoSlide);
  }

  function showImage() {
    const item = currentProject.images[index];
    img.src = item.src;
    caption.textContent = item.caption;
  }

  function changeSlide(step) {
    index =
      (index + step + currentProject.images.length) %
      currentProject.images.length;
    showImage();
  }

  document.querySelectorAll(".project-card").forEach((card) => {
    card.addEventListener("click", () => openModal(card.dataset.project));
  });

  closeBtn.addEventListener("click", closeModal);
  prevBtn.addEventListener("click", () => changeSlide(-1));
  nextBtn.addEventListener("click", () => changeSlide(1));

  document.getElementById("projectModal").addEventListener("click", (e) => {
    if (e.target.id === "projectModal") closeModal();
  });

  img.addEventListener("click", (e) => e.stopPropagation());
  prevBtn.addEventListener("click", (e) => e.stopPropagation());
  nextBtn.addEventListener("click", (e) => e.stopPropagation());
  closeBtn.addEventListener("click", (e) => e.stopPropagation());

  document.addEventListener("keydown", (e) => {
    if (document.getElementById("projectModal").style.display === "flex") {
      if (e.key === "ArrowRight") changeSlide(1);
      if (e.key === "ArrowLeft") changeSlide(-1);
      if (e.key === "Escape") closeModal();
    }
  });

  let startX = 0;
  img.addEventListener("touchstart", (e) => (startX = e.touches[0].clientX));
  img.addEventListener("touchend", (e) => {
    const diff = startX - e.changedTouches[0].clientX;
    if (diff > 50) changeSlide(1);
    if (diff < -50) changeSlide(-1);
  });
});
