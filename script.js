const menuToggle = document.querySelector('.menu-toggle');
const nav = document.querySelector('.nav');

if (menuToggle && nav) {
  menuToggle.addEventListener('click', () => {
    const isOpen = nav.classList.toggle('active');
    menuToggle.setAttribute('aria-expanded', isOpen ? 'true' : 'false');
  });

  const navLinks = nav.querySelectorAll('a');

  navLinks.forEach((link) => {
    link.addEventListener('click', () => {
      nav.classList.remove('active');
      menuToggle.setAttribute('aria-expanded', 'false');
    });
  });
}