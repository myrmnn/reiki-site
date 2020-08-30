const itemsToReveal = document.querySelectorAll('.reveal');
let browserHeight = window.innerHeight;

hideInitially();

//navigation

const icon = document.querySelector('.icon');
const nav = document.getElementById("myTopnav");
const dropbtn = document.querySelectorAll('.dropbtn');
const dropcontent = document.querySelectorAll('.dropdown-content');
const carrot = document.querySelectorAll('.carrot');


dropbtn.forEach(el => el.addEventListener('click', function() {
  el.nextElementSibling.classList.toggle('dropdown-is-visible');
  el.firstElementChild.classList.toggle('rotate');
}))

icon.addEventListener('click', function () {
    nav.classList.toggle('responsive');
    for(i = 0; i < dropcontent.length; i++){
      dropcontent[i].classList.remove('dropdown-is-visible');
    }
});

// function fixNav() {
//   if(window.scrollY >= nav.offsetTop){
//       nav.classList.add('fixed-nav');
//       document.body.style.paddingTop = nav.offsetHeight + "px";
//   }

//   if(window.scrollY <= nav.offsetHeight){
//       nav.classList.remove('fixed-nav')
//       document.body.style.paddingTop = 0;
//   }
// }

// window.addEventListener('scroll', fixNav);


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
    if(scrollPercent < 90){
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