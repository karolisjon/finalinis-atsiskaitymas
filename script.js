"use strict";

// About section - tab navigation

const tabNavigationElements = document.querySelectorAll(".about .tab-navigation li");
const tabContentEls = document.querySelectorAll(".about .tab-content");

function removeActiveClass(elements) {
    for (let tab of tabNavigationElements) {
        tab.classList.remove("active");
    }
}

for (let tabEl of tabNavigationElements) {
    tabEl.addEventListener("click", function() {

        const target = this.dataset.target;

        removeActiveClass(tabNavigationElements);
        this.classList.add("active");

        removeActiveClass(tabContentEls);
        document.querySelector('.tab-content [data-tab="'+target+'"]').classList.add("active");

    });
}

// SWIPER - review section

const swiper = new Swiper('.swiper', {
    // Optional parameters
    direction: 'horizontal',
    loop: true,
    slidesPerView: 3,
    slidesPerGroup: 3,
    autoHeight: true,
    spaceBetween: 120,
    speed: 900,
    autoplay: {
        delay: 2000,
    },
    breakpoints: {

        800: {
          slidesPerView: 3,
          spaceBetween: 120
        }
      },
  
    // If we need pagination
    pagination: {
      el: '.swiper-pagination',
      clickable: true,
      
    },
  });

