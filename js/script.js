"use strict";
const menu = document.querySelector('.menu__body');
const iconBotton = document.querySelector('.icon-menu');

iconBotton.addEventListener('click', () => {
iconBotton.classList.toggle('_active');
menu.classList.toggle('_active');
})
