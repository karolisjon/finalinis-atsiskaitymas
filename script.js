"use strict";

// About section - tab navigation

const tabNavigationElements = document.querySelectorAll(".about .tab-navigation li");

function removeActiveClass(elements) {
    for (let tab of tabNavigationElements) {
        tab.classList.remove("active");
    }
}

for (let tabEl of tabNavigationElements) {
    tabEl.addEventListener("click", function() {
        removeActiveClass(tabNavigationElements);
        console.log('hi');
        this.classList.add("active");
    });
}

