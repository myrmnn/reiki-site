const itemsToReveal = document.querySelectorAll(".reveal");
let browserHeight = window.innerHeight;

hideInitially();

//navigation

const icon = document.querySelector(".topnav__icon");
const nav = document.getElementById("myTopnav");
const dropbtn = document.querySelectorAll(".topnav__dropbtn");
const dropcontent = document.querySelectorAll(".topnav__dropdown-content");
const dropLink = document.querySelectorAll(".topnav__dropdown-content a");

dropbtn.forEach((el) =>
  el.addEventListener("click", function () {
    el.nextElementSibling.classList.toggle(
      "topnav__dropdown-content--is-visible"
    );
    el.firstElementChild.classList.toggle("rotate");
  })
);

dropLink.forEach((el) => {
  el.addEventListener("click", () => {
    el.parentElement.classList.remove("topnav__dropdown-content--is-visible");
    el.parentElement.parentElement.firstElementChild.firstElementChild.classList.toggle(
      "rotate"
    );
    if (nav.classList.contains("responsive")) {
      nav.classList.remove("responsive");
    }
  });
});

icon.addEventListener("click", function () {
  nav.classList.toggle("responsive");
  for (i = 0; i < dropcontent.length; i++) {
    dropcontent[i].classList.remove("topnav__dropdown-content--is-visible");
  }
});

//Reveal On Scroll

function hideInitially() {
  itemsToReveal.forEach((el) => {
    el.classList.add("hidden-item");
    el.isRevealed = false;
  });
}

window.addEventListener("scroll", throttle(calcCaller, 200));

function calculate(el) {
  if (window.pageYOffset + browserHeight > el.offsetTop) {
    console.log("calculated");
    let scrollPercent = (el.getBoundingClientRect().y / browserHeight) * 100;
    if (scrollPercent < 90) {
      el.classList.add("hidden-item--now-visible");
      el.isRevealed = true;
    }
  }
}

function calcCaller() {
  console.log("scrolled");
  itemsToReveal.forEach((el) => {
    if (el.isRevealed == false) {
      calculate(el);
    }
  });
}

function throttle(fn, wait) {
  var time = Date.now();
  return function () {
    if (time + wait - Date.now() < 0) {
      fn();
      time = Date.now();
    }
  };
}

//form

const orange = "#EE6352";
const inputs = document.querySelectorAll("input");
// const input = document.querySelector('input');
const labels = document.querySelectorAll("label");
const textareas = document.querySelectorAll("textarea");
const form = document.querySelector("form");
const main = document.querySelector("main#maincontent");

inputs.forEach((input) =>
  input.addEventListener("focus", () => {
    labels.forEach((label) => {
      label.style.color = "black";
    });
    if (document.activeElement) {
      input.previousElementSibling.style.color = orange;
    }
  })
);

textareas.forEach((textarea) =>
  textarea.addEventListener("focus", () => {
    labels.forEach((label) => {
      label.style.color = "black";
    });
    if (document.activeElement) {
      textarea.previousElementSibling.style.color = orange;
    }
  })
);

document.addEventListener("click", function (e) {
  console.log(e.target.className);
  if (e.target.className !== "input") {
    labels.forEach((label) => (label.style.color = "black"));
  }
});

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
});
