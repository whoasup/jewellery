var __webpack_exports__ = {};
// This entry need to be wrapped in an IIFE because it need to be isolated against other entry modules.
!function() {
/*!***************************!*\
  !*** ./source/js/test.js ***!
  \***************************/
`use strict`;

(() => {
  const a = 10;
  console.log(a);
})();

}();
// This entry need to be wrapped in an IIFE because it need to be in strict mode.
!function() {
"use strict";
/*!***************************!*\
  !*** ./source/js/menu.js ***!
  \***************************/


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

}();
