/*
Student Name: Daniel Mendivil
File Name: script.js
Date: 11/16/2025
*/

document.addEventListener("DOMContentLoaded", function () {

    const hamburger = document.getElementById("hamburger");
    const navList = document.getElementById("main-nav-list");

    if (hamburger) {
          hamburger.addEventListener("click", function () {
                navList.classList.toggle("open");
          });
    }

});