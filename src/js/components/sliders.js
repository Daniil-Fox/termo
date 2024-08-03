import { Swiper } from "swiper";
import { EffectFade, Navigation, Pagination, Thumbs } from "swiper/modules";

Swiper.use([Navigation, Pagination, EffectFade, Thumbs])

const typesThumbs = new Swiper(".types__slider", {
  slidesPerView: "auto",
  spaceBetween: 20,
});


new Swiper(".video-r__slider", {
  slidesPerView: 3,
  spaceBetween: 20,
  navigation: {
    prevEl: '.video-r__btn--prev',
    nextEl: '.video-r__btn--next',
  },
  pagination: {
    el: '.swiper-pagination',
  },
  breakpoints: {
    320 : {
      slidesPerView: 'auto',
    },
    768: {
      slidesPerView: 3,
    }
  }
});


new Swiper('.types-content-slider', {
  slidesPerView: 1,
  spaceBetween: 30,
  effect: 'fade',
  speed: 300,
  fadeEffect: {
    crossFade: true
  },
  thumbs: {
    swiper: typesThumbs
  },
  on: {
    'slideChange': (swiper) => {
      typesThumbs.activeIndex = swiper.activeIndex
    }
  }
})


window.addEventListener("DOMContentLoaded", () => {
  const resizableSwiper = (
    breakpoint,
    swiperClass,
    swiperSettings,
    callback
  ) => {
    let swiper;

    breakpoint = window.matchMedia(breakpoint);

    const enableSwiper = function (className, settings) {
      swiper = new Swiper(className, settings);

      if (callback) {
        callback(swiper);
      }
    };

    const checker = function () {
      if (breakpoint.matches) {
        return enableSwiper(swiperClass, swiperSettings);
      } else {
        if (swiper !== undefined) swiper.destroy(true, true);
        return;
      }
    };

    breakpoint.addEventListener("change", checker);
    checker();
  };

  const someFunc = (instance) => {
    if (instance) {
      instance.on("slideChange", function (e) {
        console.log("*** mySwiper.activeIndex", instance.activeIndex);
      });
    }
  };

  resizableSwiper("(max-width: 768px)", ".cond__slider", {
    slidesPerView: "auto",
    spaceBetween: 15,
  });
});
