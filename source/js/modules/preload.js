const preload = document.querySelector('.preload_js');
import {mainBlock, aboutBlock} from './toggle-about-block';

const hidePreload = () => {
  preload.classList.remove('preload_active');
  mainBlock.querySelector('.main__title_js').classList.add('fade-right');
  aboutBlock.classList.add('fade-left');
  preload.removeEventListener('click', hidePreload);
};

preload.addEventListener('click', hidePreload);
