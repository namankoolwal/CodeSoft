// Header scrolling effect
window.addEventListener("scroll", function () {
  const header = document.querySelector("header");
  if (window.scrollY > 0) {
    header.classList.add("nav-show");
  } else {
    header.classList.remove("nav-show");
  }
});

// Hamburger menu
const navSlide = () => {
  const hamburger = document.querySelector(".hamburger");
  const navbar = document.querySelector(".nav-bar");
  const navLinks = document.querySelectorAll(".nav-bar li");

  hamburger.addEventListener("click", () => {
    navbar.classList.toggle("nav-active");

    // Animation links
    navLinks.forEach((link, index) => {
      if (link.style.animation) {
        link.style.animation = "";
      } else {
        link.style.animation = `navLinkFade 0.5s ease forwards ${
          (index / 7 + 1) * 0.2
        }s`;
      }
    });

    // Hamburger animation
    hamburger.classList.toggle("toggle");
  });
};

window.onload = () => navSlide();
