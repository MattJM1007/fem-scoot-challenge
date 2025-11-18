"use strict";

const header = document.querySelector(".header-primary");
const menuBtn = header.querySelector("button[aria-expanded]");
const hamburgerIcon = menuBtn.querySelector(".hamburger");
const closeIcon = menuBtn.querySelector(".close-icon");
const menuCta = header.querySelector(".nav-primary__list .button");

function toggleMenu() {
  const isExpanded = menuBtn.getAttribute("aria-expanded") === "true" ? true : false;
  hamburgerIcon.classList.toggle("hidden");
  closeIcon.classList.toggle("hidden");
  menuBtn.setAttribute("aria-expanded", `${!isExpanded}`);
}

menuBtn.addEventListener("click", toggleMenu);
menuCta.addEventListener("click", toggleMenu);

window.addEventListener("keydown", (e) => {
  if (e.key === "Escape") toggleMenu();
});
