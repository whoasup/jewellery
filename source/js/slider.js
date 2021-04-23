"use strict";

import { tns } from "../../node_modules/tiny-slider/src/tiny-slider";

(() => {
  const newSlider = document.querySelector("#new-slider");
  const detailSlider = document.querySelector("#detail-slider");

  const updateSlidesInfo = (slider, infoElement) => {
    const info = slider.getInfo();
    infoElement.textContent = info.navCurrentIndex + 1;
  };

  if (newSlider) {
    const newSliderInfoCurrent = document.querySelector(".new-slider__current");
    newSlider.classList.remove("new-slider__list--no-js");
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

    updateSlidesInfo(mainSlider, newSliderInfoCurrent);
    mainSlider.events.on("touchEnd", () => {
      updateSlidesInfo(mainSlider, newSliderInfoCurrent);
    });
  }

  if (detailSlider) {
    const cardSliderInfoCurrent = document.querySelector(".detail__current");
    detailSlider.classList.remove("detail__gallery--no-js");
    const cardSlider = new tns({
      container: ".detail__gallery",
      disable: true,
      controls: false,
      responsive: {
        320: {
          disable: false,
          gutter: 20,
        },
        768: {
          disable: true,
        },
      },
    });

    updateSlidesInfo(cardSlider, cardSliderInfoCurrent);
    cardSlider.events.on("touchEnd", () => {
      updateSlidesInfo(cardSlider, cardSliderInfoCurrent);
    });
  }
})();
