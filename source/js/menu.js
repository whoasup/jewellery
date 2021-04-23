"use strict";

(() => {
  const page = document.querySelector(".page");
  const body = document.querySelector("body");
  const burger = document.querySelector(".burger");
  const header = document.querySelector(".header");
  let isMenuShow = header.classList.contains("header--brown");

  page.classList.add("js");
  const toggleMenu = () => {
    if (!isMenuShow) {
      burger.classList.add("burger--white");
      header.classList.add("header--brown");
      header.classList.add("header--show");
      body.classList.add("no-scroll");
    } else {
      burger.classList.remove("burger--white");
      header.classList.remove("header--brown");
      header.classList.remove("header--show");
      body.classList.remove("no-scroll");
    }
    isMenuShow = !isMenuShow;
  };

  burger.addEventListener("click", () => {
    toggleMenu();
  });
})();
