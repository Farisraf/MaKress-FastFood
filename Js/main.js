// Menu Show
const showMenu = (toggleId, navId) => {
  const toggle = document.getElementById(toggleId),
    nav = document.getElementById(navId);
  
  if (toggle && nav) {
    toggle.addEventListener("click", () => {
      nav.classList.toggle("show");
    });
  }
};
showMenu("nav-toggle", "nav-menu");
  

// Remove Menu Mobile
const navLink = document.querySelectorAll(".nav__link");
  
function linkAction() {
    // Active link
    navLink.forEach(n => n.classList.remove('active'))
    this.classList.add('active')

    // Remove menu mobile
    const navMenu = document.getElementById("nav-menu");
    navMenu.classList.remove("show");
  }
navLink.forEach((n) => n.addEventListener("click", linkAction));


// Scroll Reveal Animation
// const sr = ScrollReveal({
//   origin: 'top',
//   distance: '80px',
//   duration: 1500,
//   reset: "true",
// });

// Scroll Header
// sr.reveal(".header__logo",{ delay: 500 });

// Landing Page
// sr.reveal(".landingpage__image",{});
// sr.reveal(".arrow",{});

// Voucher
// sr.reveal(".container__voucher",{});

// Scroll Menu
// sr.reveal(".box", { delay: 500 });