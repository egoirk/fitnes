import {initTabs} from './modules/subscription-tab';

window.addEventListener('load', () => {
  initTabs();
  initSlider();
});

// слайдер

function initSlider() {

  const arrowsElements = document.querySelectorAll('.arrow-control');
  const trenersContainerElement = document.querySelector('.coaches__wrapper');
  const trenersListElement = trenersContainerElement.querySelector('.coaches__list');
  const trenersListItem = trenersListElement.querySelector('.coaches__item');
  const trenersControlForward = trenersContainerElement.querySelector('.arrow-control--forward');
  const trenersControlBackward = trenersContainerElement.querySelector('.arrow-control--backward');
  const reviewsContainerElement = document.querySelector('.reviews__wrapper');
  const reviewsListElement = reviewsContainerElement.querySelector('.reviews__list');
  const reviewsControlForward = reviewsContainerElement.querySelector('.arrow-control--forward');
  const reviewsControlBackward = reviewsContainerElement.querySelector('.arrow-control--backward');
  const reviewsListItem = reviewsListElement.querySelector('.reviews__item');

  trenersListElement.classList.remove('coaches__list--no-js');
  reviewsListElement.classList.remove('reviews__list--no-js');
  arrowsElements.forEach(function (element) {
    element.classList.remove('arrow-control--no-js');
  });

  let slideForward = function (element, item) {
    const gutter = parseInt(window.getComputedStyle(item, null).marginRight, 10);

    if (element.scrollWidth - Math.abs(element.offsetLeft) > element.offsetWidth) {
      element.style.left = element.offsetLeft - item.offsetWidth - gutter + 'px';
    } else {
      element.style.left = '0px';
    }
  };

  let slideBackward = function (element, item) {
    const gutter = parseInt(window.getComputedStyle(item, null).marginRight, 10);

    if (element.offsetLeft < 0) {
      element.style.left = element.offsetLeft + item.offsetWidth + gutter + 'px';
    } else {
      element.style.left = element.offsetWidth - element.scrollWidth + 'px';
    }
  };

  trenersControlForward.addEventListener('click', function () {
    slideForward(trenersListElement, trenersListItem);
  });

  trenersControlBackward.addEventListener('click', function () {
    slideBackward(trenersListElement, trenersListItem);
  });

  reviewsControlForward.addEventListener('click', function () {
    slideForward(reviewsListElement, reviewsListItem);
  });

  reviewsControlBackward.addEventListener('click', function () {
    slideBackward(reviewsListElement, reviewsListItem);
  });

}
