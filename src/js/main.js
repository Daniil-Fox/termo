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


const vidgets = document.querySelector('.vidgets')

if(vidgets){
  const vidgetsClose = vidgets.querySelector('.vidgets__close')

  vidgetsClose.addEventListener('click', e => {
    e.preventDefault()

    vidgets.classList.add('hidden')
    setTimeout(() => {
      vidgets.remove();
    }, 300)
  })
}
