function init() {
  showMovieBannerAfterTime(5)
}

function showMovieBannerAfterTime(seconds) {
  setTimeout(() => {
    const bannerElement = document.querySelector('#movie-banner')
    bannerElement.classList.remove('hidden')

    setTimeout(() => {
      const videoElement = document.querySelector('#video-player')
      videoElement.pause()
      videoElement.classList.add('hidden')
    }, 250)
  }, seconds * 1000)
}

init()
