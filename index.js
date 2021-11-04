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