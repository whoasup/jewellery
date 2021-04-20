"use strict";

(() => {
  const popup = document.querySelector(`.popup`);
  const popupOpenButton = document.querySelector(`[data-control="popup-open"]`);
  const popupCloseButton = document.querySelector(
    `[data-control="popup-close"]`
  );
  const overlay = document.querySelector(`.overlay`);

  const openPopup = () => {
    popup.classList.add(`popup--open`);
    overlay.classList.remove(`overlay--close`);
  };

  const closePopup = () => {
    popup.classList.remove(`popup--open`);
    overlay.classList.add(`overlay--close`);
  };

  popupOpenButton.addEventListener(`click`, () => {
    openPopup();
  });
  popupCloseButton.addEventListener(`click`, () => {
    closePopup();
  });
})();
