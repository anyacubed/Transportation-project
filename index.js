console.log("here")
var slider = tns({
  container: '.salon-images',
  items: 1,
  slideBy: 1,
  nav: false,
  autoplay: true,
  autoplayButtonOutput: false,
  controlsContainer: "#customize-controls",

  responsive: {

    1250: {
      items: 2,
    }
  }
});

const scrollUp = document.querySelector(".scroll-up");

/* Page scroll up */

scrollUp.onclick = function() {
  window.scrollTo(scrollX, 0);
};

window.addEventListener('scroll', function() {
  scrollUp.hidden = (scrollY < document.documentElement.clientHeight);
});

/* Burger menu */

const burgerMenu = document.querySelector('.burger-menu');
const burgerMenuButton = document.querySelector('.burger-menu-button');
const header = document.querySelector('.header');
const burgerCloseButton = document.querySelector('.burger-close-button');
const navBurger = document.querySelector('.nav-burger');

burgerMenuButton.addEventListener('click', function(event) { 
  burgerMenu.classList.toggle('burger-menu-active');
  header.classList.toggle('header__closed');}
);

burgerMenuButton.addEventListener('click', function(event) { 
  burgerCloseButton.classList.toggle('burger-close-button-active');
  header.classList.toggle('header__closed');}
);

// burgerMenu.addEventListener('click', () => {
//   burgerMenu.classList.toggle('active');
//   navBurger.classList.toggle('active');
// })

// document.querySelectorAll(".nav-link").forEach(n => n.addEventListener('click', () => {
//   burgerMenu.classList.remove('active');
//   navBurger.classList.remove('active');
// }))

function toggleBurger() {
  if (burgerMenuButton.style.display == 'block') {
    burgerMenuButton.style.display ='none';
    burgerCloseButton.style.display ='block';
  } else {
    burgerMenuButton.style.display ='block';
    burgerCloseButton.style.display ='none';
  }
}

burgerMenuButton.addEventListener('click', toggleBurger);
burgerCloseButton.addEventListener('click', toggleBurger);
