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

new Swiper(".podcasts__video", {
  modules: [Navigation],
  loop: true,
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
      document.querySelectorAll('.podcasts__slider').forEach(function(el){
        el.classList.remove('active');
      });
      document.querySelector(`.${target}`).classList.add('active');
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

// video 
document.querySelectorAll('.video-container').forEach(function(el){
  const videos = document.querySelectorAll('.video-container');
  const video = el.querySelector('.video');
  const videoControls = el.querySelector('.video-controls'); 
  const videoContent = el.querySelector('.podcasts__video-item-content'); 
  const playButton = el.querySelector('.play'); 
  const playbackIcons = el.querySelectorAll('.playback-icons .playback-icon');
  const timeElapsed = el.querySelector('.time-elapsed');
  const duration = el.querySelector('.duration');
  const progressBar = el.querySelector('.progress-bar');
  const seek = el.querySelector('.seek');
  const seekTooltip = el.querySelector('.seek-tooltip');
  const playbackAnimation = el.querySelector('.playback-animation');
  const videoContainer = el.querySelector('.podcasts__video-item-media');

  const videoWorks = !!document.createElement('video').canPlayType; 
  if (videoWorks) { 
    video.controls = false; 
    videoControls.classList.remove('hidden'); 
  } 

  function togglePlay() {
    if (video.paused || video.ended) {
      videos.forEach(function(el){
        const video = el.querySelector('.video');
        video.pause();
        el.querySelector('.video-controls').classList.add('hide');
        el.querySelector('.podcasts__video-item-content').classList.remove('hide');
      })
      video.play();
      videoControls.classList.remove('hide');
      videoContent.classList.add('hide');
    } else {
      video.pause();
    }
  }

  playButton.addEventListener('click', togglePlay);

  function updatePlayButton() {
    playbackIcons.forEach(icon => icon.classList.toggle('hidden'));
    if (video.paused) {
      playButton.setAttribute('data-title', 'Play')
    } else {
      playButton.setAttribute('data-title', 'Pause')
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

  video.addEventListener('mouseenter', showControls);
  video.addEventListener('mouseleave', hideControls);
  videoControls.addEventListener('mouseenter', showControls);
  videoControls.addEventListener('mouseleave', hideControls);
  video.addEventListener('ended', () => {
    hideControls()
  });
}) 

