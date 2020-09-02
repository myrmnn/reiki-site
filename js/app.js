const itemsToReveal = document.querySelectorAll('.reveal');
let browserHeight = window.innerHeight;

hideInitially();

//navigation

const icon = document.querySelector('.topnav__icon');
const nav = document.getElementById("myTopnav");
const dropbtn = document.querySelectorAll('.topnav__dropbtn');
const dropcontent = document.querySelectorAll('.topnav__dropdown-content');
const carrot = document.querySelectorAll('.topnav__carrot');


dropbtn.forEach(el => el.addEventListener('click', function() {
  el.nextElementSibling.classList.toggle('topnav__dropdown-content--is-visible');
  el.firstElementChild.classList.toggle('rotate');
}))

icon.addEventListener('click', function () {
    nav.classList.toggle('responsive');
    for(i = 0; i < dropcontent.length; i++){
      dropcontent[i].classList.remove('topnav__dropdown-content--is-visible');
    }
});

//Reveal On Scroll

function hideInitially() {
  itemsToReveal.forEach(el => {
    el.classList.add('hidden-item');
    el.isRevealed = false;
  });
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

//form 

const inputs = document.querySelectorAll('input');
const labels = document.querySelectorAll('label');
const textareas = document.querySelectorAll('textarea');
const orange = '#EE6352';



inputs.forEach(input => input.addEventListener('focus', () => {
  labels.forEach(label => {
    label.style.color = 'black';
  });
  if (document.activeElement){
    input.previousElementSibling.style.color = orange;

  }
}))

textareas.forEach(textarea => textarea.addEventListener('focus', () => {
  labels.forEach(label => {
    label.style.color = 'black';
  });
  if (document.activeElement){
    textarea.previousElementSibling.style.color = orange;

  }
}))