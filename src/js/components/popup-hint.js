const popupQuizWrapper = document.querySelectorAll('.quiz__input-wrapper')

if(popupQuizWrapper.length > 0){
  popupQuizWrapper.forEach(wrap => {
    const hintButton = wrap.querySelector('.quiz__hint')

    hintButton.addEventListener('mouseenter', e => {
      wrap.classList.add('active')
    })
    hintButton.addEventListener('mouseleave', e => {
      wrap.classList.remove('active')
    })
  })

}

