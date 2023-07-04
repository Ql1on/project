"use strict";
const inputPasswordEl = document.querySelector('input.passw');
const inputReTypePasswordEl = document.querySelector('input.retype_passw');
const formEl = document.querySelector('form');

inputReTypePasswordEl.addEventListener('input', () => {
    if (inputReTypePasswordEl.value === inputPasswordEl.value) {
        inputReTypePasswordEl.style.border = '2px solid green'
    }
    else if (inputReTypePasswordEl.value !== inputPasswordEl.value) {
        inputReTypePasswordEl.style.border = '2px solid red';
    }

});
formEl.addEventListener('submit', (event) => {
    if (inputReTypePasswordEl.value !== inputPasswordEl.value) {
        event.preventDefault();
        alert('пароли не совпадают!');
    }
    starsEls.forEach((starEl) => {
        starEl.style.fill = '#FFD36F';
    });



});
let rating = '';
const starsEls = document.querySelectorAll('.star_item');
starsEls.forEach((star) => {

    star.addEventListener('click', () => {
        starsEls.forEach((starEl) => {
            starEl.style.fill = '#FFD36F';
        });
        for (let i = 0; i < star.id; i++) {

            starsEls[i].style.fill = 'goldenrod';
        }
        rating = star.id;

    });

});

