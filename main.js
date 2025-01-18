function init() {
  const TIME_TO_SHOW_BANNER = 5
  const TIME_TO_HIDE_VIDEO = 5

  showMovieBannerAfterTime(TIME_TO_SHOW_BANNER)

  const scenePreviewVideos = document.querySelectorAll('.scene-preview')
  scenePreviewVideos.forEach(video => listenVideoHover(video, TIME_TO_HIDE_VIDEO))
}

function showMovieBannerAfterTime (seconds) {
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

function listenVideoHover (video, timeToHide = 5) {
  const previewCardParent = video.parentElement.parentElement
  let videoPassedTimeToHide = false

  const hideScenePreview = () => {
    video.pause()
    video.classList.add('hidden')
  }

  const handleTimeUpdate = () => {
    if (video.currentTime >= timeToHide && !videoPassedTimeToHide) {
      hideScenePreview()
      videoPassedTimeToHide = true
    }
  }

  const handleMouseEnter = async () => {
    videoPassedTimeToHide = false
    video.currentTime = 0
    await video.play()

    video.addEventListener('timeupdate', handleTimeUpdate)
  }

  const handleMouseLeave = () => {
    video.pause()
    video.classList.remove('hidden')
    video.removeEventListener('timeupdate', handleTimeUpdate)
  }

  previewCardParent.addEventListener('mouseenter', handleMouseEnter)
  previewCardParent.addEventListener('mouseleave', handleMouseLeave)
}

init()
