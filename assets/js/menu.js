const menuToggle = document.querySelector('.menu-toggle');
const menu = document.getElementById('menu');
const closeBtn = document.querySelector('.menu-close');

menuToggle.addEventListener('click', () => {
  const isOpen = menu.classList.toggle('open');
  menuToggle.setAttribute('aria-expanded', isOpen);
  menu.setAttribute('aria-hidden', !isOpen);
});

closeBtn.addEventListener('click', () => {
  menu.classList.remove('open');
  menuToggle.setAttribute('aria-expanded', 'false');
  menu.setAttribute('aria-hidden', 'true');
});