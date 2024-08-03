const typesVideo = document.querySelectorAll('[data-video-src]')
const modalVideo = document.querySelector('.modal-video')
typesVideo.forEach(vcont => {
  vcont.addEventListener('click', e => {
    const dataset = vcont.dataset.videoSrc
    modalVideo.querySelector('iframe').src = dataset
    modalVideo.classList.add('active')
  })
})
