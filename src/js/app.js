import * as functions from "./modules/functions.js";

functions.isWebp();

import Swiper, { Navigation, Pagination } from 'swiper';

new Swiper(".studios__slider", {
  spaceBetween: 100,
  loop: true,
  modules: [Navigation, Pagination],
  navigation: {
    nextEl: ".studios__next",
    prevEl: ".studios__prev",
  },
});

new Swiper(".studios__img", {
  loop: true,
  modules: [Navigation, Pagination],
  navigation: {
    nextEl: ".studios__img-next",
    prevEl: ".studios__img-prev",
  },
  pagination: {
    el: ".studios__img-pagination",
    clickable: true,
  }
});

new Swiper(".clients__slider", {
  modules: [Navigation, Pagination],
  slidesPerView: 2,
  loop: true,
  spaceBetween: 20,
  breakpoints: {
    768: {
      slidesPerView: 4,
    },
    1200: {
      slidesPerView: 5,
    },
    1400: {
      slidesPerView: 6,
    }
  },
  navigation: {
    nextEl: ".clients__next",
    prevEl: ".clients__prev",
  },
  pagination: {
    el: ".studios__img-pagination",
    clickable: true,
  }
});

// Header Menu
const headerButton = document.querySelector(".header__button");
const headerMenu = document.querySelector(".header__menu");
const header = document.querySelector(".header");
let menuOpened = false;
const menuToggle = () => { 
    menuOpened = !menuOpened;
    headerButton.classList.toggle("open"); 
    header.classList.toggle("menu-open");
    headerMenu.classList.toggle("open");
    if (menuOpened) {
      document.body.style="overflow-y: hidden";
    }else{
      document.body.style="overflow-y: auto";
    }
};


headerButton.onclick = menuToggle;

window.onclick = (e) => {
  if ( menuOpened && !e.composedPath().includes(headerButton) && !e.composedPath().includes(headerMenu) ){
    menuToggle();
  }
};

document.querySelectorAll('.podcasts').forEach(function(podcast){
  const buttons = podcast.querySelectorAll('.podcasts__header-btn');
  buttons.forEach(function(button){
    button.addEventListener('click', function(e) {
      buttons.forEach((el)=>{
        el.classList.remove('active');
      })
      const el = e.target
      el.classList.add('active');
    })
  })
})


$(document).ready(function() {
  $(".accordion > .accordion__button").on("click", function() {
    if ($(this).hasClass("active")) {
      $(this).removeClass("active");
      $(this)
        .siblings(".accordion__content")
        .slideUp(200);
    } else {
      $(".accordion > .accordion__button").removeClass("active");
      $(this).addClass("active");
      $(".accordion__content").slideUp(200);
      $(this)
        .siblings(".accordion__content")
        .slideDown(200);
    }
  });
});

window.addEventListener('scroll', (e) => {
  const header = document.querySelector('.header');
  header.classList.toggle('sticky', window.scrollY >= 1);
})


