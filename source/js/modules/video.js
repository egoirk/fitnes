const VIDEO__URL = 'https://www.youtube.com/embed/9TZXsZItgdw?rel=0&showinfo=0&autoplay=1';
const createIframe = function (url) {
  const iframe = document.createElement('iframe');
  iframe.setAttribute('allowfullscreen', '');
  iframe.setAttribute('allow', 'autoplay');
  iframe.setAttribute('src', url);
  iframe.setAttribute('frameborder', 0);
  iframe.classList.add('about__video-media');
  return iframe;
};

const setupVideo = function (video, url) {
  const link = video.querySelector('.about__video-link');
  video.addEventListener('click', function (event) {
    event.preventDefault();
    const iframe = createIframe(url);
    link.remove();
    video.appendChild(iframe);
  });
};

export const initVideo = function () {
  const videoContainer = document.querySelector('.about__video');

  if (videoContainer) {
    setupVideo(videoContainer, VIDEO__URL);
  }
};
