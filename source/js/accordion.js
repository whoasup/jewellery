"use strict";

(() => {
  const accordion = document.querySelector(`.accordion`);

  accordion.classList.add(`accordion--js`);

  accordion.addEventListener(`click`, (e) => {
    const target = e.target;

    if (target.classList.contains(`accordion__button`)) {
      target.parentElement.classList.toggle(`accordion__tab--open`);
    }
  });
})();
