"use strict";

(() => {
  const loginForm = document.querySelector("#login-form");
  const emailInput = loginForm.querySelector("#login-email");

  let isStorageSupport = true;
  try {
    localStorage.setItem("__test", "data");
  } catch (error) {
    isStorageSupport = false;
  }

  if (loginForm && emailInput) {
    loginForm.addEventListener("submit", () => {
      if (isStorageSupport) {
        localStorage.setItem("email", emailInput.value);
      }
    });
  }
})();
