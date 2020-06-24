const itemsToReveal = document.querySelectorAll('.reveal');
let browserHeight = window.innerHeight;

hideInitially();

//navigation

const icon = document.querySelector('.icon');
const nav = document.getElementById("myTopnav");
const dropbtn = document.querySelector('.dropbtn');
const dropbtn2 = document.querySelector('.dropbtn2');
const dropcontent = document.querySelector('.dropdown-content');
const dropcontent2 = document.querySelector('.dropdown-content2');
const carrot = document.querySelector('.carrot');
const carrot2 = document.querySelector('.carrot2');

dropbtn.addEventListener('click', function () {
    dropcontent.classList.toggle('dropdown-is-visible');
    carrot.classList.toggle('rotate');
})

dropbtn2.addEventListener('click', function () {
    dropcontent2.classList.toggle('dropdown-is-visible');
    carrot2.classList.toggle('rotate');
})


icon.addEventListener('click', function () {
    nav.classList.toggle('responsive');
    if(dropcontent.classList.contains('dropdown-is-visible') || dropcontent2.classList.contains('dropdown-is-visible')){
        dropcontent.classList.remove('dropdown-is-visible');
        dropcontent2.classList.remove('dropdown-is-visible');
        }

});

function fixNav() {
  if(window.scrollY >= nav.offsetTop){
      nav.classList.add('fixed-nav');
  }

  if(window.scrollY <= nav.offsetHeight){
      nav.classList.remove('fixed-nav')
  }
}

window.addEventListener('scroll', fixNav);


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