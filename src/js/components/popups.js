const popupCalc = document.querySelector('.popup--calc')
const popupCatalog = document.querySelector('.popup--catalog')
const popupShild = document.querySelector('.popup--shild')
const popupRecall = document.querySelector('.popup--recall')
const popupExc = document.querySelector('.popup--exc')


const popupButtons = document.querySelectorAll('[data-popup]')

const popups = document.querySelectorAll('.popup')
popupButtons.forEach(btn => {
  btn.addEventListener('click', e => {
    const dataset = btn.dataset.popup

    if(dataset == "catalog"){
      popupCatalog.classList.add('active')
    }

    if(dataset == "shild"){
      popupShild.classList.add('active')
    }
    if(dataset == "calc"){
      popupCalc.classList.add('active')
    }
    if(dataset == "recall"){
      popupRecall.classList.add('active')
    }
    if(dataset == "exc"){
      popupExc.classList.add('active')
    }
  })
})


popups.forEach(pop => {
  const popBody = pop.querySelector('.popup__body')
  const popClose = pop.querySelector('.popup__close')
  pop.addEventListener('click', e => {
    pop.classList.remove('active')
  })
  popClose.addEventListener('click', e => {
    pop.classList.remove('active')
  })

  popBody.addEventListener('click', e => e.stopPropagation())
})
