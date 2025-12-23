"use strict";

// Прелоад
const spinPreload = new Image();
spinPreload.src = "../img/gif2.gif";

let isTransitioning = false; // Прапорець, щоб не клікали багато разів

function Enter() {
    if (isTransitioning) return; // Якщо вже крутиться — нічого не робити
    isTransitioning = true;

    const staticLain = document.getElementById("lain");
    const spinLain = document.getElementById("lain_spin");
    const wrapper = document.getElementById("lain-button");

    // 1. Скидання кешу для анімації з 1-го кадру
    const timestamp = new Date().getTime();
    spinLain.src = "../img/gif2.gif?t=" + timestamp;

    // 2. Зміна видимості
    staticLain.style.display = "none";
    spinLain.style.display = "block";
    
    // Прибираємо курсор-руку, бо кнопка вже "спрацювала"
    wrapper.style.cursor = "default";

    // 3. Таймер переходу на іншу сторінку
    // Вкажіть тривалість вашої другої гіфки
    setTimeout(() => {
        location.href = "../home.html";
    }, 2800); 
}