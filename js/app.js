const itemsToReveal = document.querySelectorAll('.reveal');
let browserHeight = window.innerHeight;

hideInitially();

//Mobile Menu

class NavBar {
  constructor(){
    this.toggleButton = document.querySelector(".toggle-button");
    this.navbarLinks = document.querySelector(".navbar-links");
    this.events();
  }

  events() {
    this.toggleButton.addEventListener('click', (e) => {
      e.preventDefault();
      this.navbarLinks.classList.toggle('active');
    })
  }
}

let nav = new NavBar();

//Reveal On Scroll


function hideInitially() {
  itemsToReveal.forEach(el => {
    el.classList.add('hidden-item');
    el.isRevealed = false;
  });
  // itemsToReveal[itemsToReveal.length-1].isLastItem = true;
}

window.addEventListener('scroll', throttle(calcCaller, 200));


function calculate(el) {
  if(window.pageYOffset + browserHeight > el.offsetTop){
    console.log('calculated')
    let scrollPercent = (el.getBoundingClientRect().y / browserHeight) * 100;
    if(scrollPercent < 75){
        el.classList.add('hidden-item--now-visible');
        el.isRevealed = true;
    }
    // if(el.isLastItem){
    //   window.removeEventListener('scroll', throttle(calcCaller, 300));
    // }
  }
}


function calcCaller(){
  console.log('scrolled')
  itemsToReveal.forEach(el => {
    if(el.isRevealed == false){
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