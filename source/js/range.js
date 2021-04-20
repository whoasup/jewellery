"use strict";

(() => {
  const range = document.querySelector(`.range`);
  if (range) {
    const onRangeInput = (e) => {
      let target = e.target;
      target.parentNode.style.setProperty(`--${target.id}`, +target.value);
    };

    range.addEventListener(`input`, onRangeInput, false);
  }
})();
