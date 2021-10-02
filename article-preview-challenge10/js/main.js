"use strict";

const shareButton = document.querySelector(".main__content--shareImage");

const shareView = document.querySelector(".main__content--shareDetails");

const shareImage = document.querySelector(".main__content--shareImage");

shareButton.addEventListener("click", function () {
  shareView.classList.toggle("hidden");
  shareImage.classList.toggle("active");
});
