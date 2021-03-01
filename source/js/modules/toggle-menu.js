const mainBlock = document.querySelector('.header__toggle-menu_js');
const aboutBlock = document.querySelector('.navbar_js');

import {disableScrolling, enableScrolling} from '../utils/scroll-lock';


mainBlock.addEventListener('click', () => {
  if (aboutBlock.classList.contains('navbar_active')) {
    enableScrolling();
  } else {
    disableScrolling();
  }
  mainBlock.classList.toggle('header__toggle-menu_active');
  aboutBlock.classList.toggle('navbar_active');
});
