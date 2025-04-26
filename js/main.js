

const cards = Array.from(document.querySelectorAll('.gallery__card'));
const sliderP = document.querySelector('.slider__prace');
const sliderContainer = document.querySelector('.slider__container');
const picture = Array.from(document.querySelectorAll('.gallery__card__pic'));


let cardIndex = -1;
let pictureFull;


for (const card of cards) {
  card.addEventListener('click', (event) => {
    event.preventDefault();
    cardIndex = cards.indexOf(card);
    pictureFull = picture[cardIndex].cloneNode();
    pictureFull.style.objectFit = "contain";
    /*sliderContainer.append(pictureFull);*/
    sliderP.classList.add('active');
  });
}





/*$(function(){
  $('.slider-for').slick({
    slidesToShow: 1,
    slidesToScroll: 1,
    arrows: false,
    fade: true,
    asNavFor: '.slider-nav'
  });
  $('.slider-nav').slick({
    slidesToShow: 3,
    slidesToScroll: 1,
    asNavFor: '.slider-for',
    dots: true,
    centerMode: true,
    focusOnSelect: true
  });
});

$('.fade').slick({
  dots: true,
  infinite: true,
  speed: 500,
  fade: true,
  cssEase: 'linear'
});  */


const tabItem = document.querySelectorAll('.tabs__btn-item');
const tabContent = document.querySelectorAll('.tabs__content-item');

tabItem.forEach(function(element) {
  element.addEventListener('click', open);
})

function open(evt) {
const tabTarget = evt.currentTarget;
const button = tabTarget.dataset.button;

tabItem.forEach(function(item){
  item.classList.remove('tabs__btn-item--active');
})

tabTarget.classList.add('tabs__btn-item--active');



tabContent.forEach(function(item){
  item.classList.remove('tabs__content-item--active')
})

document.querySelector(`#${button}`).classList.add('tabs__content-item--active');

}

const menuBtn = document.querySelector('.menu__btn');
const menu = document.querySelector('.menu__list');


menuBtn.addEventListener('click', () => {
menu.classList.toggle('menu__list--active');
});





const swiper = new Swiper(".swiper", {
  effect: "fade",
  pagination: {
    el: ".swiper-pagination",
  },
  autoplay: {
    delay: 3000,
    disableOnInteraction: false,
  },
  
});




