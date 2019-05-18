import { OPEN, ACTIVE, OVERFLOW_HIDDEN } from '../constants';

const header = document.querySelector('.js-header');

window.addEventListener('scroll', function() {
  let scroll = window.pageYOffset || document.documentElement.scrollTop;
  if (scroll > 300) {
    header.classList.add(ACTIVE);
  } else {
    header.classList.remove(ACTIVE);
  }
});
