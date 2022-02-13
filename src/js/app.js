import * as functions from "./modules/functions.js";

functions.isWebp();

// import Swiper, { Navigation, Pagination } from 'swiper';

// const swiper = new Swiper();

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