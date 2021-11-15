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
const burgerCloseButton = document.querySelector('.burger-close-button');
const burgerMenuLink = document.querySelector('.nav-link');
const burgerMenuLinks = document.querySelectorAll('.nav-link');
const burgerContainer = document.querySelector(".burger-container");
const showMenu = document.querySelector(".show-menu");

const main = document.querySelector(".main");
const footer = document.querySelector(".footer");

function toggleMenu() {
  if (burgerMenu.classList.contains("showMenu")) {
    burgerMenu.classList.remove("showMenu");
    main.style.top = '0px';
    footer.style.top = '0px';
    burgerCloseButton.style.display = "none";
    burgerMenuButton.style.display = "block";
  } else {
    burgerMenu.classList.add("showMenu");
    main.style.top = '100px';
    footer.style.top = '100px';
    burgerCloseButton.style.display = "block";
    burgerMenuButton.style.display = "none";
  }
}

burgerMenuLinks.forEach( 
  function(burgerMenuLink) { 
    burgerMenuLink.addEventListener("click", toggleMenu);
  }
)

burgerContainer.addEventListener("click", toggleMenu);

// document.addEventListener('keydown', function(e) {

// })
