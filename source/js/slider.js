"use strict";

import { tns } from "../../node_modules/tiny-slider/src/tiny-slider";

(() => {
  const newSlider = document.querySelector(`#new-slider`);
  const newSliderInfoCurrent = document.querySelector(`.new-slider__current`);
  newSlider.classList.remove(`new-slider__list--no-js`);
  const mainSlider = new tns({
    container: ".new-slider__list",
    gutter: 30,
    items: 2,
    slideBy: 2,
    controlsContainer: ".new-slider__controls",
    navContainer: ".new-slider__nav",
    responsive: {
      320: {
        controls: false,
        nav: true,
        items: 2,
        slideBy: 2,
      },
      768: {
        controls: true,
        nav: true,
        items: 2,
        slideBy: 2,
      },
      1024: {
        controls: true,
        nav: true,
        items: 4,
        slideBy: 4,
      },
    },
  });
  const updateSlidesInfo = () => {
    const info = mainSlider.getInfo();
    newSliderInfoCurrent.textContent = info.navCurrentIndex + 1;
  };
  updateSlidesInfo();
  mainSlider.events.on(`touchEnd`, () => {
    updateSlidesInfo();
  });
})();
