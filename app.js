let openBnt = document.querySelector(".open-menu");
let closeBnt = document.querySelector(".close-menu");
let navWrapper = document.querySelector(".nav-wrapper");

openBnt.addEventListener("click", function () {
  navWrapper.style.transform = "translateX(0)";
});

closeBnt.addEventListener("click", function () {
  navWrapper.style.transform = "translateX(-1400px)";
});

const toggle = document.getElementById('toggle');
const close = document.getElementById('close');
const open = document.getElementById('open');
const modal = document.getElementById('modal');

// Show modal
open.addEventListener('click', () => modal.classList.add('show-modal'));

// Hide modal
close.addEventListener('click', () => modal.classList.remove('show-modal'));

// Hide modal on outside click
window.addEventListener('click', e =>
  e.target == modal ? modal.classList.remove('show-modal') : false
);
