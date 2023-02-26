import barba from "@barba/core";
import gsap from "gsap"

import * as functions from "./modules/functions.js";
import * as preloader from "./modules/preloader.js";
import * as media from "./modules/media.js";
import * as slider from "./modules/slider.js";
import * as header from "./modules/header.js";
import * as quiz from "./modules/quiz.js";
import * as accordion from "./modules/accordion.js";
import * as contacts from "./modules/contacts.js";
import * as services from "./modules/services.js";
import * as popup from "./modules/popup.js";
import * as podcasts from "./modules/podcasts.js";

export function pageTransition() {
    const tl = gsap.timeline();
    tl.set('.preloader', {
      yPercent: 100
    })
    tl.set('.preloader__p', {
      opacity: 0,
      visibility: "hidden"
    })
    tl.to('.preloader', {
      yPercent: 0,
      duration: 0.6
    })
}

export function contentAnimation() {
    const tl = gsap.timeline();
    tl.to('.preloader', {
        yPercent: -100,
        duration: 0.6
    })
}

barba.init({
  sync: true,
  transitions: [{
    async leave(data) {
      const done = this.async();
      pageTransition();
      await functions.delay(1200);
      done();
    },
    async enter(data) {
      contentAnimation();
      preloader.init();
      media.init();
      slider.init();
      header.init();
      quiz.init();
      podcasts.init();
      accordion.init();
      contacts.init();
      services.init();
      popup.init();
      functions.isWebp();
    },
    async once(data) {
      preloader.init();
      media.init();
      slider.init();
      header.init();
      quiz.init();
      podcasts.init();
      accordion.init();
      contacts.init();
      services.init();
      popup.init();
      functions.isWebp();
    },
  }]
})

document.querySelectorAll('.quiz__range').forEach( ( el ) => {
  const seek = el.querySelector('.range-2');
  const seekTooltip = el.querySelector('.abs');

  function updateSeekTooltip(event) {
    seekTooltip.innerHTML = `${seek.value} ${seek.getAttribute('data-name')}`
  }

  seek.addEventListener('input', updateSeekTooltip);
})

if(document.querySelector('.datepicker')){
  $(".datepicker").datepicker({ 
    dateFormat: 'dd/mm/yy',
    minDate: 0, maxDate: "+1M +10D",
    closeText:"Закрыть",prevText:"&#x3C;Пред",nextText:"След&#x3E;",currentText:"Сегодня",monthNames:["Январь","Февраль","Март","Апрель","Май","Июнь","Июль","Август","Сентябрь","Октябрь","Ноябрь","Декабрь"],monthNamesShort:["Янв","Фев","Мар","Апр","Май","Июн","Июл","Авг","Сен","Окт","Ноя","Дек"],dayNames:["воскресенье","понедельник","вторник","среда","четверг","пятница","суббота"],dayNamesShort:["вск","пнд","втр","срд","чтв","птн","сбт"],
    dayNamesMin:["Вс","Пн","Вт","Ср","Чт","Пт","Сб"],
    monthNames:["Январ","Феврал","Март","Апрел","Май","Июн","Июл","Август","Сентябр","Октябр","Ноябр","Декабр"],
    monthNamesShort:["Янв","Фев","Мар","Апр","Май","Июн","Июл","Авг","Сен","Окт","Ноя","Дек"]
  });
  $(".datepicker").change(function(){
    document.getElementById('alternate').innerHTML = $(".datepicker").val()
  });
  document.getElementById('alternate').innerHTML = $(".datepicker").val()
}

document.querySelectorAll('.bron__content').forEach(el=>{
  const inputs = el.querySelectorAll('.bron__time input');
  const prices = el.querySelectorAll('.prices .data-price');
  inputs.forEach(input=>{
    input.addEventListener('input', bron)
  })  
  prices.forEach(input=>{
    input.addEventListener('input', bron)
  })  
  function bron(){
    const sum = el.querySelector('.sum span');
    const time = el.querySelector('.times span');
    let price = el.querySelector('.zona.active .data-price:checked');
    let checkedInputs = el.querySelectorAll('.bron__time input:checked');
    checkedInputs = el.querySelectorAll('.bron__time input:checked');
    time.innerHTML = `${checkedInputs.length} час`
    sum.innerHTML = `${checkedInputs.length * price.getAttribute('data-price')}р.`
  }
})



document.querySelectorAll('.bron').forEach(el => {
  const btn = el.querySelectorAll('.zona-btn input');
  btn.forEach(btn => {
    btn.addEventListener('change', e => {
      if(e.currentTarget.checked){
        const target = btn.getAttribute('data-target');
        const content = el.querySelector(`#${target}`);
        const contents = el.querySelectorAll('.zona');
        contents.forEach(zona => {
          zona.classList.remove('active');
          zona.querySelectorAll('input').forEach(e => {
            e.checked = false
          })
        })
        content.classList.add('active');
      }
    })
  })
})