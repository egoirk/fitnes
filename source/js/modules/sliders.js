const activateButton = function (button) {
  button.disabled = '';
};

const deactivateButton = function (button) {
  button.disabled = 'disabled';
};

const slideForward = function (element, item, leftArrow, rightArrow) {
  const gutter = parseInt(window.getComputedStyle(item, null).marginRight, 10);

  if (element.scrollWidth - Math.abs(element.offsetLeft) > element.offsetWidth) {
    element.style.left = element.offsetLeft - item.offsetWidth - gutter + 'px';
    activateButton(leftArrow);
  } else {
    deactivateButton(rightArrow);
  }
};

const slideBackward = function (element, item, leftArrow, rightArrow) {
  const gutter = parseInt(window.getComputedStyle(item, null).marginRight, 10);

  if (element.offsetLeft < 0) {
    element.style.left = element.offsetLeft + item.offsetWidth + gutter + 'px';
    activateButton(rightArrow);
  } else {
    deactivateButton(leftArrow);
  }
};

export function initSliders() {

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
  const isTranersAnimated = false;

  trenersListElement.classList.remove('coaches__list--no-js');
  trenersListElement.style.left = '0px';
  reviewsListElement.classList.remove('reviews__list--no-js');
  reviewsListElement.style.left = '0px';
  arrowsElements.forEach(function (element) {
    element.classList.remove('arrow-control--no-js');
  });
  deactivateButton(trenersControlBackward);
  deactivateButton(reviewsControlBackward);

  trenersListElement.addEventListener('animationstart', function () {
    isTranersAnimated = true;
  }, false);

  trenersListElement.addEventListener('animationend', function () {
    isTranersAnimated = false;
  }, false);

  trenersControlForward.addEventListener('click', function () {
    if (isTranersAnimated) {
      return;
    }
    slideForward(trenersListElement, trenersListItem, trenersControlBackward, trenersControlForward);
  });

  trenersControlBackward.addEventListener('click', function () {
    if (isTranersAnimated) {
      return;
    }
    slideBackward(trenersListElement, trenersListItem, trenersControlBackward, trenersControlForward);
  });

  reviewsControlForward.addEventListener('click', function () {
    slideForward(reviewsListElement, reviewsListItem, reviewsControlBackward, reviewsControlForward);
  });

  reviewsControlBackward.addEventListener('click', function () {
    slideBackward(reviewsListElement, reviewsListItem, reviewsControlBackward, reviewsControlForward);
  });

}
