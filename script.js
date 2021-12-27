"use strict";

// About section - tab navigation

const tabNavigationElements = document.querySelectorAll(".about .tab-navigation li");
const tabContentElements = document.querySelectorAll(".about .tab-content");

function removeActiveClassesFromElements(elements) {
    for (let element of elements) {
        element.classList.remove("active");
    }
}

for (let tabElement of tabNavigationElements) {
    tabElement.addEventListener("click", function() {
        const target = this.dataset.target; // "register" / "apply" / "receive"

        removeActiveClassesFromElements(tabNavigationElements);
        this.classList.add("active");

        removeActiveClassesFromElements(tabContentElements);
        document.querySelector('.tab-content[data-tab="'+target+'"]').classList.add('active');
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
    grabCursor: true,
    speed: 900,
    // autoplay: {
    //     delay: 2000,
    // },
    
  
    // If we need pagination
    pagination: {
      el: '.swiper-pagination',
      clickable: true
    },

    breakpoints: {

        800: {
          slidesPerView: 3,
          spaceBetween: 120
        }
      },
  });

  // API key - d613cc8e8f836175ed469d84c274770d 

  const url = "https://api.openweathermap.org/data/2.5/weather?q=London&units=metric&appid=d613cc8e8f836175ed469d84c274770d";
  const weatherElement = document.getElementById('weather');

  function getCurrentWeather() {
      const http = new XMLHttpRequest();
      http.open("GET", url);
      http.addEventListener("load", function() {
          const response = JSON.parse(http.response);
          const temperature = response.main.temp;

          console.log(temperature);


          if (temperature > 0) {
              weatherElement.innerText = "+" + temperature;
                      
            } else {
                weatherElement.innerText = temperature;
            }

      })
      http.send();
  }

  window.addEventListener("load", getCurrentWeather)

// HAMBURGER 
// Look for .hamburger
var hamburger = document.querySelector(".hamburger");
// On click
hamburger.addEventListener("click", function() {
  // Toggle class "is-active"
  hamburger.classList.toggle("is-active");
  // Do something else, like open/close menu
});

