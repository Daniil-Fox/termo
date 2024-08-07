const popupCalc = document.querySelector('.popup--calc')
const popupCatalog = document.querySelector('.popup--catalog')
const popupShild = document.querySelector('.popup--shild')
const popupRecall = document.querySelector('.popup--recall')
const popupExc = document.querySelector('.popup--exc')
const popupOptions = document.querySelector('.popup-quiz')


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
    if(dataset == "options"){
      popupOptions.classList.add('active')
    }

  })
})


popups.forEach(pop => {
  const popBody = pop.querySelectorAll('.popup__body')
  const popClose = pop.querySelector('.popup__close')

  let quizBody = null;
  let quizForm = null;
  if(pop.classList.contains('popup-quiz')){
    quizForm = pop.querySelector('.popup-quiz .quiz-popup-form')
    quizBody = pop.querySelector('.popup-quiz .popup-quiz__body')
  }


  pop.addEventListener('click', e => {
    pop.classList.remove('active')
    if(quizBody){
    setTimeout(() => {
      quizBody.style.display = null
      quizBody.style.opacity = null
      quizForm.style.display = null
      quizForm.style.opacity = null
    }, 301)
  }
  })
  popClose.addEventListener('click', e => {
    pop.classList.remove('active')
    if(quizBody){
    setTimeout(() => {
      quizBody.style.display = null
      quizForm.style.display = null
      quizForm.style.opacity = null
    }, 301)
  }

  })

  popBody.forEach(pb => {
      pb.addEventListener('click', e => e.stopPropagation())
    })
  })
