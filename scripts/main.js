import handleOpenBurger from "./burger.js";

const burger = document.querySelector(".burger");
const close = document.querySelector(".close");

burger.addEventListener('click', handleOpenBurger);
close.addEventListener('click', handleOpenBurger);
