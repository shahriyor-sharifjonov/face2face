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

new Swiper(".use__slider", {
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
    nextEl: ".use__slider-next",
    prevEl: ".use__slider-prev",
  }
});

new Swiper(".examples__slider", {
  modules: [Navigation, Pagination],
  slidesPerView: 1,
  loop: true,
  spaceBetween: 20,
  watchSlidesProgress: true,
  watchSlidesVisibility: true,
  breakpoints: {
    768: {
      slidesPerView: 2,
    },
    1200: {
      slidesPerView: 3,
    },
    1400: {
      slidesPerView: 3,
    }
  },
  navigation: {
    nextEl: ".examples__next",
    prevEl: ".examples__prev",
  },
});
 
new Swiper(".podcasts__audio", {
  modules: [Navigation],
  // loop: true,
  allowTouchMove: false,
  watchSlidesProgress: true,
  watchSlidesVisibility: true,
  slidesPerView: 1,
  spaceBetween: 20,
  navigation: {
    nextEl: ".podcasts__audio-next",
    prevEl: ".podcasts__audio-prev",
  },
  breakpoints: {
    767: {
      slidesPerView: 2,
      watchSlidesVisibility: true,
    },
    1200: {
      slidesPerView: 3,
      watchSlidesVisibility: true,
    },
  },
});

new Swiper(".podcasts__video", {
  modules: [Navigation],
  // loop: true,
  allowTouchMove: false,
  watchSlidesProgress: true,
  watchSlidesVisibility: true,
  slidesPerView: 1,
  spaceBetween: 20,
  navigation: {
    nextEl: ".podcasts__video-next",
    prevEl: ".podcasts__video-prev",
  },
  breakpoints: {
    767: {
      slidesPerView: 2,
      watchSlidesVisibility: true,
    },
    1200: {
      slidesPerView: 3,
      watchSlidesVisibility: true,
    },
  },
});

new Swiper(".area__slider_1", {
  modules: [Navigation],
  slidesPerView: 1,
  spaceBetween: 20,
  navigation: {
    nextEl: ".area__next_1",
    prevEl: ".area__prev_1",
  },
  breakpoints: {
    767:{
      slidesPerView: 2,
    },
    992:{
      slidesPerView: 1,
    },
  },
});
new Swiper(".area__slider_1-sm", {
  modules: [Navigation, Pagination],
  slidesPerView: 1,
  spaceBetween: 20,
  navigation: {
    nextEl: ".area__next_1",
    prevEl: ".area__prev_1",
  },
  breakpoints: {
    767:{
      slidesPerView: 2,
    },
    992:{
      slidesPerView: 1,
    },
  },
  pagination: {
    el: ".area-pagination_1", 
    clickable: true,
  }
});

new Swiper(".area__slider_2", {
  modules: [Navigation],
  slidesPerView: 1,
  spaceBetween: 20,
  navigation: {
    nextEl: ".area__next_2",
    prevEl: ".area__prev_2",
  },
  breakpoints: {
    767:{
      slidesPerView: 2,
    },
    992:{
      slidesPerView: 1,
    },
  },
});
new Swiper(".area__slider_2-sm", {
  modules: [Navigation, Pagination],
  slidesPerView: 1,
  spaceBetween: 20,
  navigation: {
    nextEl: ".area__next_2",
    prevEl: ".area__prev_2",
  },
  breakpoints: {
    767:{
      slidesPerView: 2,
    },
    992:{
      slidesPerView: 1,
    },
  },
  pagination: {
    el: ".area-pagination_2",
    clickable: true,
  }
});


new Swiper(".area__slider_3", {
  modules: [Navigation],
  slidesPerView: 1,
  spaceBetween: 20,
  navigation: {
    nextEl: ".area__next_3",
    prevEl: ".area__prev_3",
  },
  breakpoints: {
    767:{
      slidesPerView: 2,
    },
    992:{
      slidesPerView: 1,
    },
  }
});
new Swiper(".area__slider_3-sm", {
  modules: [Navigation, Pagination],
  slidesPerView: 1,
  spaceBetween: 20,
  navigation: {
    nextEl: ".area__next_3",
    prevEl: ".area__prev_3",
  },
  pagination: {
    el: ".area-pagination_3",
    clickable: true,
  },
  breakpoints: {
    767:{
      slidesPerView: 2,
    },
    992:{
      slidesPerView: 1,
    },
  }
});


new Swiper(".reviews__video", {
  modules: [Navigation],
  // loop: true,
  observer: true,
	observeParents: true,
  allowTouchMove: false,
  watchSlidesProgress: true,
  watchSlidesVisibility: true,
  slidesPerView: 1,
  spaceBetween: 20,
  navigation: {
    nextEl: ".reviews__video-next",
    prevEl: ".reviews__video-prev",
  },
  breakpoints: {
    767: {
      slidesPerView: 2,
      watchSlidesVisibility: true,
    },
    1200: {
      slidesPerView: 3,
      watchSlidesVisibility: true,
    },
  },
});

new Swiper(".reviews__text", {
  modules: [Navigation],
  // loop: true,
  allowTouchMove: false,
  watchSlidesProgress: true,
  watchSlidesVisibility: true,
  slidesPerView: 1,
  spaceBetween: 20,
  navigation: {
    nextEl: ".reviews__text-next",
    prevEl: ".reviews__text-prev",
  },
  breakpoints: {
    767: {
      slidesPerView: 2,
      watchSlidesVisibility: true,
    },
    1200: {
      slidesPerView: 3,
      watchSlidesVisibility: true,
    },
  },
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
      const el = e.target;
      const target = el.getAttribute('data-target');
      podcast.querySelectorAll(`.podcasts__element-slider`).forEach(function(el){
        el.classList.remove('active');
      });
      podcast.querySelector(`.${target}`).classList.add('active');
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

// audio
document.querySelectorAll('.audio-container').forEach(function(el){
  const videos = document.querySelectorAll('.video-containers');
  const audios = document.querySelectorAll('.audio-container');
  const audio = el.querySelector('.audio');
  const audioControls = el.querySelector('.audio-controls');
  const playButton = el.querySelector('.play');
  const playbackIcons = el.querySelectorAll('.playback-icons .playback-icon');
  const timeElapsed = el.querySelector('.time-elapsed');
  const duration = el.querySelector('.duration');
  const progressBar = el.querySelector('.progress-bar');
  const seek = el.querySelector('.seek');
  const seekTooltip = el.querySelector('.seek-tooltip');
  const playbackAnimation = el.querySelector('.playback-animation');
  const audioContainer = el.querySelector('.podcasts__audio-item-media');

  const audioWorks = !!document.createElement('audio').canPlayType; 
  if (audioWorks) { 
    audio.controls = false; 
    audioControls.classList.remove('hidden'); 
  } 

  function togglePlay() {
    if (audio.paused || audio.ended) {
      videos.forEach(function(el){
        const video = el.querySelector('.video');
        video.pause();
        el.querySelector('.video-controls').classList.add('hide');
        el.querySelector('.video-content').classList.remove('hide');
      })
      audios.forEach(function(el){
        const audio = el.querySelector('.audio');
        audio.pause();
      })
      audio.play();
    } else {
      audio.pause();
    }
  }

  playButton.addEventListener('click', togglePlay);

  function updatePlayButton() {
    playbackIcons.forEach(icon => icon.classList.toggle('hidden'));
    if (audio.paused) {
      playButton.setAttribute('data-title', 'Play')
    } else {
      playButton.setAttribute('data-title', 'Pause')
    }
  }

  audio.addEventListener('play', updatePlayButton);
  audio.addEventListener('pause', updatePlayButton);

  function formatTime(timeInSeconds) {
    const result = new Date(timeInSeconds * 1000).toISOString().substr(11, 8);
  
    return {
      minutes: result.substr(3, 2),
      seconds: result.substr(6, 2),
    };
  };

  function initializeAudio() {
    const audioDuration = Math.round(audio.duration);
    seek.setAttribute('max', audioDuration);
    progressBar.setAttribute('max', audioDuration);
    const time = formatTime(audioDuration);
    duration.innerText = `${time.minutes}:${time.seconds}`;
    duration.setAttribute('datetime', `${time.minutes}m ${time.seconds}s`)
  }

  audio.addEventListener('loadedmetadata', initializeAudio);

  function updateTimeElapsed() {
    const time = formatTime(Math.round(audio.currentTime));
    timeElapsed.innerText = `${time.minutes}:${time.seconds}`;
    timeElapsed.setAttribute('datetime', `${time.minutes}m ${time.seconds}s`)
  }

  audio.addEventListener('timeupdate', updateTimeElapsed);

  function updateProgress() {
    seek.value = Math.floor(audio.currentTime);
    progressBar.value = Math.floor(audio.currentTime);
  }

  audio.addEventListener('timeupdate', updateProgress);

  function updateSeekTooltip(event) {
    const skipTo = Math.round((event.offsetX / event.target.clientWidth) * parseInt(event.target.getAttribute('max'), 10));
    seek.setAttribute('data-seek', skipTo)
    const t = formatTime(skipTo);
    seekTooltip.textContent = `${t.minutes}:${t.seconds}`;
    const rect = audioControls.getBoundingClientRect();
    seekTooltip.style.left = `${event.pageX - rect.left}px`;
  }

  seek.addEventListener('mousemove', updateSeekTooltip);

  function skipAhead(event) {
    const skipTo = event.target.dataset.seek ? event.target.dataset.seek : event.target.value;
    audio.currentTime = skipTo;
    progressBar.value = skipTo;
    seek.value = skipTo;
  }

  seek.addEventListener('input', skipAhead);
})

// video 
document.querySelectorAll('.video-containers').forEach(function(el){
  const audios = document.querySelectorAll('.audio-container');
  const videos = document.querySelectorAll('.video-containers');
  const video = el.querySelector('.video');
  const videoControls = el.querySelector('.video-controls'); 
  const videoContent = el.querySelector('.video-content'); 
  const playButton = el.querySelectorAll('.play'); 
  const playbackIcons = el.querySelectorAll('.playback-icons .playback-icon');
  const timeElapsed = el.querySelector('.time-elapsed');
  const duration = el.querySelector('.duration');
  const progressBar = el.querySelector('.progress-bar');
  const seek = el.querySelector('.seek');
  const seekTooltip = el.querySelector('.seek-tooltip');
  const playbackAnimation = el.querySelector('.playback-animation');
  const videoContainer = el.querySelector('.video-container');

  const videoWorks = !!document.createElement('video').canPlayType; 
  if (videoWorks) { 
    video.controls = false; 
    videoControls.classList.remove('hidden'); 
  } 

  function togglePlay() {
    if (video.paused || video.ended) {
      audios.forEach(function(el){
        const audio = el.querySelector('.audio');
        audio.pause();
      })
      videos.forEach(function(el){
        const video = el.querySelector('.video');
        video.pause();
        video.classList.remove('playing');
        el.querySelector('.video-controls').classList.add('hide');
        el.querySelector('.video-content').classList.remove('hide');
      })
      video.play();
      videoControls.classList.remove('hide');
      videoContent.classList.add('hide');
    } else {
      video.pause();
    }
  }

  video.addEventListener('play', function(e){
    video.classList.add('playing');
  })
  video.addEventListener('ended', function(e){
    video.classList.remove('playing')
  })
  playButton.forEach(function(el){
    el.addEventListener('click', togglePlay);
  })

  function updatePlayButton() {
    playbackIcons.forEach(icon => icon.classList.toggle('hidden'));
    if (video.paused) {
      playButton.forEach(function(el){
        el.setAttribute('data-title', 'Play')
      })
    } else {
      playButton.forEach(function(el){
        el.setAttribute('data-title', 'Pause')
      })
    }
  }

  video.addEventListener('play', updatePlayButton);
  video.addEventListener('pause', updatePlayButton);

  function formatTime(timeInSeconds) {
    const result = new Date(timeInSeconds * 1000).toISOString().substr(11, 8);
  
    return {
      minutes: result.substr(3, 2),
      seconds: result.substr(6, 2),
    };
  };

  function initializeVideo() {
    const videoDuration = Math.round(video.duration);
    seek.setAttribute('max', videoDuration);
    progressBar.setAttribute('max', videoDuration);
    const time = formatTime(videoDuration);
    duration.innerText = `${time.minutes}:${time.seconds}`;
    duration.setAttribute('datetime', `${time.minutes}m ${time.seconds}s`)
  }

  video.addEventListener('loadedmetadata', initializeVideo);

  function updateTimeElapsed() {
    const time = formatTime(Math.round(video.currentTime));
    timeElapsed.innerText = `${time.minutes}:${time.seconds}`;
    timeElapsed.setAttribute('datetime', `${time.minutes}m ${time.seconds}s`)
  }

  video.addEventListener('timeupdate', updateTimeElapsed);

  function updateProgress() {
    seek.value = Math.floor(video.currentTime);
    progressBar.value = Math.floor(video.currentTime);
  }

  video.addEventListener('timeupdate', updateProgress);

  function updateSeekTooltip(event) {
    const skipTo = Math.round((event.offsetX / event.target.clientWidth) * parseInt(event.target.getAttribute('max'), 10));
    seek.setAttribute('data-seek', skipTo)
    const t = formatTime(skipTo);
    seekTooltip.textContent = `${t.minutes}:${t.seconds}`;
    const rect = video.getBoundingClientRect();
    seekTooltip.style.left = `${event.pageX - rect.left}px`;
  }

  seek.addEventListener('mousemove', updateSeekTooltip);

  function skipAhead(event) {
    const skipTo = event.target.dataset.seek ? event.target.dataset.seek : event.target.value;
    video.currentTime = skipTo;
    progressBar.value = skipTo;
    seek.value = skipTo;
  }

  seek.addEventListener('input', skipAhead);

  video.addEventListener('click', togglePlay);

  function animatePlayback() {
    playbackAnimation.animate([
      {
        opacity: 1,
        transform: "translate(-50%, -50%) scale(1)",
      },
      {
        opacity: 0,
        transform: "translate(-50%, -50%) scale(1.3)",
      }], {
      duration: 500,
    });
  }

  video.addEventListener('click', animatePlayback);

  function toggleFullScreen() {
    if (document.fullscreenElement) {
      document.exitFullscreen();
    } else if (document.webkitFullscreenElement) {
      // Need this to support Safari
      document.webkitExitFullscreen();
    } else if (videoContainer.webkitRequestFullscreen) {
      // Need this to support Safari
      videoContainer.webkitRequestFullscreen();
    } else {
      videoContainer.requestFullscreen();
    }
  }

  video.ondblclick = toggleFullScreen;

  function hideControls() {
    if (!video.paused) {
      return;
    }
  
    videoControls.classList.add('hide');
    videoContent.classList.remove('hide');
  }
  
  function showControls() {
    videoControls.classList.remove('hide');
    videoContent.classList.add('hide');
  }

  // video.addEventListener('mouseenter', showControls);
  // video.addEventListener('mouseleave', hideControls);
  // videoControls.addEventListener('mouseenter', showControls);
  // videoControls.addEventListener('mouseleave', hideControls);
  video.addEventListener('ended', () => {
    hideControls()
  });
}) 

document.querySelectorAll('.contacts-block').forEach(function(contact){
  const buttons = contact.querySelectorAll('.contacts__btn');
  const info = contact.querySelectorAll('.contacts__info');
  buttons.forEach(function(btn){
    btn.addEventListener('click', function(e){
      buttons.forEach(function(el){
        el.classList.remove('active');
      })
      e.target.classList.add('active');
      const target = e.target.getAttribute('data-target');
      const content = contact.querySelector(`#${target}`)
      info.forEach(function(el){
        el.classList.remove('active');
      })
      content.classList.add('active');
    })
  })
})

document.querySelectorAll('.services-block').forEach( ( services ) => {
  const buttons = services.querySelectorAll('.services__button');
  const items = services.querySelectorAll('.services__item');
  buttons.forEach( ( button ) => {
    button.addEventListener('click', ( e ) => {
      const target = button.getAttribute('data-target');
      const item = services.querySelector(`#${target}`);
      items.forEach( ( el ) => {
        el.classList.remove('active');
      })
      buttons.forEach( ( el ) => {
        el.classList.remove('active');
      })
      item.classList.add('active');
      button.classList.add('active');
    })
  })
})

// range
function range() {
  var value = (this.value-this.min)/(this.max-this.min)*100
  this.style.background = 'linear-gradient(to right, #F59139 0%, #F59139 ' + value + '%, #E5DCFF ' + value + '%, #E5DCFF 100%)'
}

document.querySelectorAll('.range-2').forEach( function ( el ) {
  el.oninput = range
})

document.querySelectorAll('.quiz__range').forEach( ( el ) => {
  const seek = el.querySelector('.range-2');
  const seekTooltip = el.querySelector('.abs');

  function updateSeekTooltip(event) {
    seekTooltip.innerHTML = `${seek.value} ${seek.getAttribute('data-name')}`
  }

  seek.addEventListener('input', updateSeekTooltip);
})

document.querySelectorAll('.quiz').forEach(function ( el ) {
  const item = el.querySelectorAll('.quiz__item');
  const next = el.querySelectorAll('.quiz__next');
  const prev = el.querySelectorAll('.quiz__prev');

  next.forEach( function ( next ) {
    next.addEventListener('click', function ( e ) {
      for (let i = 0; i < item.length; i++) {
        if ( item[i].classList.contains('active') && !item[i].classList.contains('last') ) {
          item[i].classList.remove('active');
          item[i += 1].classList.add('active');
        }
      }
    })
  })

  prev.forEach( function ( prev ) {
    prev.addEventListener('click', function ( e ) {
      for (let i = 0; i < item.length; i++) {
        if ( item[i].classList.contains('active') && i > 0 ) {
          item[i].classList.remove('active');
          item[i -= 1].classList.add('active');
        }
      }
    })
  }) 
})


if(document.querySelector('.datepicker')){
  $(".datepicker").datepicker({ 
    minDate: 1, maxDate: "+1M +10D",
    closeText:"Закрыть",prevText:"&#x3C;Пред",nextText:"След&#x3E;",currentText:"Сегодня",monthNames:["Январь","Февраль","Март","Апрель","Май","Июнь","Июль","Август","Сентябрь","Октябрь","Ноябрь","Декабрь"],monthNamesShort:["Янв","Фев","Мар","Апр","Май","Июн","Июл","Авг","Сен","Окт","Ноя","Дек"],dayNames:["воскресенье","понедельник","вторник","среда","четверг","пятница","суббота"],dayNamesShort:["вск","пнд","втр","срд","чтв","птн","сбт"],
    dayNamesMin:["Вс","Пн","Вт","Ср","Чт","Пт","Сб"],
    monthNames:["Январ","Феврал","Март","Апрел","Май","Июн","Июл","Август","Сентябр","Октябр","Ноябр","Декабр"],
    monthNamesShort:["Янв","Фев","Мар","Апр","Май","Июн","Июл","Авг","Сен","Окт","Ноя","Дек"]
  });
  $(".datepicker").change(function(){
    document.getElementById('alternate').innerHTML = $(".datepicker").val()
  });
}


document.querySelectorAll('.bron__content').forEach(el=>{
  const inputs = el.querySelectorAll('.bron__time input');
  const prices = el.querySelectorAll('.prices input');
  inputs.forEach(input=>{
    input.addEventListener('input', bron)
  })  
  prices.forEach(input=>{
    input.addEventListener('input', bron)
  })  
  function bron(){
    const sum = el.querySelector('.sum span');
    const time = el.querySelector('.times span');
    let price = el.querySelector('.prices input:checked');
    let checkedInputs = el.querySelectorAll('.bron__time input:checked');
    checkedInputs = el.querySelectorAll('.bron__time input:checked');
    price = el.querySelector('.prices input:checked');
    time.innerHTML = `${checkedInputs.length} час`
    sum.innerHTML = `${checkedInputs.length * price.getAttribute('data-price')}р.`
  }
})

document.addEventListener('DOMContentLoaded', function () {
  const form = document.getElementById('formContent');
  const servicesForm = document.querySelectorAll('.services__item-form');
  form.addEventListener('submit', formSend);
  servicesForm.forEach(el=>{
    el.addEventListener('submit', formSend2)

    async function formSend2(e) {
        e.preventDefault();
        let formData = new FormData(el);
        el.classList.add('sending');
        let response = await fetch('files/sendmail.php', {
            method: 'POST',
            body: formData
        });
        if(response.ok){
            let result = await response.json();
            el.classList.add('success');
            el.classList.remove('sending');
            el.reset();
        }else{
            alert("Ошибка");
            el.classList.remove('sending');
        }
    }
  })

  async function formSend(e) {
      e.preventDefault();
      let formData = new FormData(form);
      form.classList.add('sending');
      let response = await fetch('files/sendmail.php', {
          method: 'POST',
          body: formData
      });
      if(response.ok){
          let result = await response.json();
          form.classList.add('success');
          form.classList.remove('sending');
          form.reset();
      }else{
          alert("Ошибка");
          form.classList.remove('sending');
      }
  }

})