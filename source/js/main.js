import {initTabs} from './modules/subscription-tab';
import {initSliders} from './modules/sliders';
import {initVideo} from './modules/video';
import {initFocus} from './modules/card-focus';

window.addEventListener('load', () => {
  initTabs();
  initSliders();
  initVideo();
  initFocus();
});
