/*=====================SHOW MENU ===========================*/
const navMenu = document.getElementById("nav-menu"),
  navToggle = document.getElementById("nav-toggle"),
  navClose = document.getElementById("nav-close");

/*=============== MENU SHOW  ===============*/
/* Validate if constant exists */
if (navToggle) {
  //adds the classname show menu to the menu element
  navToggle.addEventListener("click", () => {
    navMenu.classList.add("show-menu");
  });
}

/*=============== MENU HIDDEN  ===============*/
/* Validate if constant exists */
if (navClose) {
  //removes the classname show menu to the menu element
  navClose.addEventListener("click", () => {
    navMenu.classList.remove("show-menu");
  });
}

/*===================== REMOVE MENU MOBILE ===================*/
const navLink = document.querySelectorAll(".nav__link");

const linkAction = () => {
  const navMenu = document.getElementById("nav-menu");
  // when we click on each nav__link, we remove the show menu class
  navMenu.classList.remove("show-menu");
};
// for each link, onClick perfom the linkAction function
navLink.forEach((link) => link.addEventListener("click", linkAction));

/*=============== CHANGE BACKGROUND HEADER ===============*/
const scrollHeader = () => {
  const header = document.getElementById("header");
  // when the scroll is greater than 50 viewport height, add the scroll-header class to the header tag
  this.scrollY >= 50
    ? header.classList.add("header-bg")
    : header.classList.remove("header-bg");
};
window.addEventListener("scroll", scrollHeader);

/*=============== SCROLL REVEAL ANIMATION ===============*/
const sr = ScrollReveal({
  origin: "bottom",
  distance: "60px",
  duration: 2500,
});

sr.reveal(".home__images", { distance: "120px", delay: 400 });
sr.reveal(".home__title", { delay: 1000 });
sr.reveal(".home__description", { delay: 1200 });
sr.reveal(".home__button", { delay: 1400 });
sr.reveal(".home__footer", { delay: 1600 });
sr.reveal(".home__data div", { origin: right, interval: 100, delay: 1800 });
