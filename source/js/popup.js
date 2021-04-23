"use strict";

(() => {
  const body = document.querySelector("body");

  const emailInput = document.querySelector("#login-email");
  const modalLinks = Array.from(document.querySelectorAll("[data-control='modal']"));
  let openedModal;

  const openModal = (modal) => {
    if (openedModal) {
      closeModal(openedModal);
    }

    if (modal) {
      modal.classList.add("modal--open");
      body.classList.add("no-scroll");

      openedModal = modal;
      document.addEventListener("keydown", modalCloseHandler);
      document.addEventListener("click", modalCloseHandler);
      if (modal.id === "modal-login") {
        emailInput.focus();
      }
    }
  };

  const closeModal = (modal) => {
    modal.classList.remove("modal--open");
    body.classList.remove("no-scroll");

    document.removeEventListener("keydown", modalCloseHandler);
    document.removeEventListener("click", modalCloseHandler);
  };

  const modalCloseHandler = (e) => {
    const target = e.target;
    if (
      target.classList.contains("modal") ||
      target.classList.contains("modal__close") ||
      e.key === "Escape"
    ) {
      closeModal(openedModal);
      openedModal = null;
    }
  };

  modalLinks.forEach((link) => {
    const modalClass = link.dataset.open;
    const modalElement = document.querySelector("#" + modalClass);
    link.addEventListener("click", (e) => {
      e.preventDefault();

      openModal(modalElement);
    });
  });
})();
