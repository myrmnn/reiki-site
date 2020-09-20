// back to top button

var offset = document.body.scrollHeight / 4;
var topBtn = document.querySelector(".top-btn");

window.addEventListener("scroll", throttle(backToTop, 500));

function backToTop() {
  var scrollPos = document.body.scrollTop || document.documentElement.scrollTop;
  if (scrollPos > offset) {
    topBtn.classList.add("top-btn--visible");
  } else {
    topBtn.classList.remove("top-btn--visible");
  }
}

topBtn.addEventListener("click", function () {
  document.body.scrollTop = 0;
  document.documentElement.scrollTop = 0;
});
