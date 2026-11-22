const header = document.querySelector('.site-header');
const button = document.querySelector('.menu-button');
const nav = document.querySelector('#site-nav');

const updateHeader = () => header.classList.toggle('scrolled', window.scrollY > 24);
updateHeader();
window.addEventListener('scroll', updateHeader, { passive: true });

button.addEventListener('click', () => {
  const open = nav.classList.toggle('open');
  button.setAttribute('aria-expanded', String(open));
  document.body.classList.toggle('menu-open', open);
});

nav.querySelectorAll('a').forEach((link) => link.addEventListener('click', () => {
  nav.classList.remove('open');
  button.setAttribute('aria-expanded', 'false');
  document.body.classList.remove('menu-open');
}));

document.querySelector('#year').textContent = new Date().getFullYear();
