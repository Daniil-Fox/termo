const popupCalc = document.querySelector('.popup--calc')
const popupCatalog = document.querySelector('.popup--catalog')
const popupShild = document.querySelector('.popup--shild')
const popupRecall = document.querySelector('.popup--recall')
const popupExc = document.querySelector('.popup--exc')
const popupOptions = document.querySelector('.popup-quiz')
const popupAnalog = document.querySelector('.popup-analog')


const popupButtons = document.querySelectorAll('[data-popup]')

const popups = document.querySelectorAll('.popup')
popupButtons.forEach(btn => {
  btn.addEventListener('click', e => {
    e.preventDefault()
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
    if(dataset == "analog"){
      popupAnalog.classList.add('active')
    }

  })
})


popups.forEach(pop => {
  const popBody = pop.querySelectorAll('.popup__body')
  const popClose = pop.querySelectorAll('.popup__close')

  const analog = document.querySelector('.popup-analog')
  let quizBody = null;
  let quizForm = null;

  let analogBody = null;
  let analogForm = null;

  if(pop.classList.contains('popup-quiz')){
    quizForm = pop.querySelector('.popup-quiz .quiz-popup-form')
    quizBody = pop.querySelector('.popup-quiz .popup-quiz__body')
  }

  if(pop.classList.contains('popup-analog')){
    analogForm = analog.querySelector('.quiz-popup-form')
    analogBody = analog.querySelector('.popup-analog__body')
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
    if(analogBody){
      setTimeout(() => {
        analogBody.style.opacity = 0
        analogBody.style.display = 'none'
        analogForm.style.display = 'block'
        analogForm.style.opacity = 1
      }, 300)
    }
  }
  })
  popClose.forEach(close => {
    close.addEventListener('click', e => {
      pop.classList.remove('active')
      if(quizBody){
      setTimeout(() => {
        quizBody.style.display = null
        quizForm.style.display = null
        quizForm.style.opacity = null
      }, 301)
    }

    })
  })

  popBody.forEach(pb => {
      pb.addEventListener('click', e => e.stopPropagation())
    })
  })
