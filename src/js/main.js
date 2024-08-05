import "./_components.js";
const menu = document.querySelector(".menu");
const menuBurger = document.querySelector(".header__hburger");
const menuBody = menu.querySelector(".menu__body");

menuBurger.addEventListener("click", (e) => {
  e.preventDefault();
  let isActive = menuBurger.classList.toggle("active");

  if (isActive) {
    menu.style.zIndex = 100;
    menu.style.opacity = 1;
    setTimeout(() => {
      menuBody.classList.add("active");
    }, 300);
  } else {
    menuBody.classList.remove("active");
    setTimeout(() => {
      menu.style.opacity = 0;
      menu.style.zIndex = -10;
    }, 300);
  }
});


window.addEventListener('DOMContentLoaded', e => {
  const vidgets = document.querySelector('.vidgets')

  if(vidgets){
    const vidgetsBody = vidgets.querySelector('.vidgets__body')
    setTimeout(() => {
      vidgets.style.transform = 'translate(0, -50%)';
    }, 1000)
    setTimeout(() => {
      vidgets.classList.remove('hide')
      vidgetsBody.style.maxHeight = vidgetsBody.scrollHeight + 'px';
    }, 1500)
    const vidgetsClose = vidgets.querySelector('.vidgets__close')

    vidgetsClose.addEventListener('click', e => {

      e.preventDefault()

      let isActive = vidgets.classList.toggle('hide')
      vidgetsBody.style.maxHeight = isActive ? 0 : vidgetsBody.scrollHeight + 'px';
    })
  }
})





