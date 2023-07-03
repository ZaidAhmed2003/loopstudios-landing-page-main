const collapseMenu = document.querySelector(".nav__collapse");
const navLinks = document.querySelectorAll(".nav__collapse ul li");
const body = document.querySelector("body");

function openMenu() {
  collapseMenu.style.transform = "translateX(0)";
  body.style.overflow = "hidden";

  setTimeout(() => {
    navLinks.forEach((link, index) => {
      link.classList.add("fade-in");
      link.style.transitionDelay = `${index * 0.1}s`;
    });
  }, 500);
}

function closeMenu() {
  collapseMenu.style.transform = "translateX(-100%)";
  body.style.overflow = "initial";

  navLinks.forEach((link) => {
    link.classList.remove("fade-in");
    link.style.transitionDelay = "";
  });
}
