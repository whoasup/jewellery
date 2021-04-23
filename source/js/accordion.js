"use strict";

(() => {
  const accordion = document.querySelector(".accordion");
  if (accordion) {
    const isAccordionFaq = accordion.classList.contains("faq__list");
    let openedTab;

    const closeTab = () => {
      openedTab.classList.remove("accordion__tab--open");
      openedTab = null;
    };

    accordion.classList.add("accordion--js");
    accordion.addEventListener("click", (e) => {
      const target = e.target;
      if (target.classList.contains("accordion__button")) {
        if (isAccordionFaq && openedTab && target.parentElement !== openedTab) {
          closeTab();
        }
        target.parentElement.classList.toggle("accordion__tab--open");
        openedTab = target.parentElement;
      }
    });
  }
})();
