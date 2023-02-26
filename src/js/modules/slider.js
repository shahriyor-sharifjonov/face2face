import Swiper, { Navigation, Pagination } from 'swiper';

export function init() {
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
}