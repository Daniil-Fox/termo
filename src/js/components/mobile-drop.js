const dropdownContainer = document.querySelectorAll('.hero-drop')

if(dropdownContainer.length > 0){
  const header = document.querySelector('.header')
  dropdownContainer.forEach(cont => {
    const btn = cont.querySelector('.hero-drop__header')
    const content = cont.querySelector('.hero-drop__body')

    btn.addEventListener('click', e => {
      e.stopPropagation()
      let isActive = btn.classList.toggle('active')
      if(isActive){
        content.style.maxHeight = content.scrollHeight + 'px';
        header.style.zIndex = 10
      } else {
        content.style.maxHeight = null;
        header.style.zIndex = null;
      }

    })
    content.addEventListener('click', e => e.stopPropagation())

    document.body.addEventListener('click', e => {
      btn.classList.remove('active');
      content.style.maxHeight = null;
    })
  })
}
