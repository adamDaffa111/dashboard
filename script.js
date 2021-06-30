document.querySelector('#checkbox').addEventListener('click',(e) => {
  e.target.parentElement.classList.toggle('toggle-hamburger-menu');
  document.querySelector("main").classList.toggle('slide-main');
  document.querySelector(".menu").classList.toggle('show-menu');
});