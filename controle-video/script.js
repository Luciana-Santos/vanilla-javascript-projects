const video = document.querySelector('.video-container')
const btn = document.querySelector('.btn')
const preloader = document.querySelector('.preloader')

btn.addEventListener('click', () => {
  const icon = btn.querySelector('i')
  if(icon.classList.contains('fa-pause')) {
    icon.classList.add('fa-play')
    icon.classList.remove('fa-pause')
    video.pause()
  } else {
    icon.classList.remove('fa-play')
    icon.classList.add('fa-pause')
    video.play()
  }
})

window.addEventListener('load', () => {
  preloader.classList.add('hide-preloader')
})