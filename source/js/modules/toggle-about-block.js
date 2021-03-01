const mainBlock = document.querySelector('.main_js');
const aboutBlock = mainBlock.querySelector('.main__about_js');

mainBlock.addEventListener('click', () => {
  if (window.innerWidth < 991) {
    aboutBlock.classList.toggle('main__about_active');
  }
});

export {mainBlock, aboutBlock};
