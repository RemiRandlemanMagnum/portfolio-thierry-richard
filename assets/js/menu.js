window.addEventListener('load', () => {
  const loader = document.getElementById('loader');
  setTimeout(() => {
    loader.classList.add('hidden');
  }, 2300); // Laisse le temps à l’animation (2s)
});

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

document.addEventListener("DOMContentLoaded", () => {
  const signature = document.querySelector('.signature-geante');
  const contactSection = document.querySelector('#contact');
  
  const observer = new IntersectionObserver(entries => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        signature.style.transition = 'background-size 2s ease';
        signature.style.backgroundSize = '100% 100%';
      } else {
        signature.style.transition = 'background-size 0.8s ease-out';
        signature.style.backgroundSize = '0% 100%';
      }
    });
  }, {
    threshold: 0.8
  });

  if (contactSection) {
    observer.observe(contactSection);
  }
});
document.addEventListener("DOMContentLoaded", () => {
  const toggleBtn = document.getElementById("theme-toggle");

  toggleBtn.addEventListener("click", () => {
    document.body.classList.toggle("accessibility");
  });
});