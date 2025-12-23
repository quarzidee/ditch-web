"use strict";

// Прелоад
const spinPreload = new Image();
spinPreload.src = "../img/gif2.gif";

let isTransitioning = false;

function Enter() {
    if (isTransitioning) return;
    isTransitioning = true;

    const staticLain = document.getElementById("lain");
    const spinLain = document.getElementById("lain_spin");
    const wrapper = document.getElementById("lain-button");


    const timestamp = new Date().getTime();
    spinLain.src = "../img/gif2.gif?t=" + timestamp;
    
    staticLain.style.display = "none";
    spinLain.style.display = "block";
    
    wrapper.style.cursor = "default";

    setTimeout(() => {
        location.href = "../home.html";
    }, 2800); 

}
