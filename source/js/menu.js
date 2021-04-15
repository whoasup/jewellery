"use strict";

(() => {
  const page = document.querySelector(`.page`);
  const burger = document.querySelector(`.burger`);
  const header = document.querySelector(`.header`);
  let isMenuShow = header.classList.contains(`header--brown`);

  page.classList.add(`js`);
  const toggleMenu = () => {
    if (!isMenuShow) {
      burger.classList.add(`burger--white`);
      header.classList.add(`header--brown`);
    } else {
      burger.classList.remove(`burger--white`);
      header.classList.remove(`header--brown`);
    }
    isMenuShow = !isMenuShow;
  };

  burger.addEventListener(`click`, () => {
    toggleMenu();
  });
})();
