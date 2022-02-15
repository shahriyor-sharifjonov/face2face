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
};


headerButton.onclick = menuToggle;

window.onclick = (e) => {
  if ( menuOpened && !e.composedPath().includes(headerButton) && !e.composedPath().includes(headerMenu) ){
    menuToggle();
  }
};

