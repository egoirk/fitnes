const activateButton = function (button) {
  button.disabled = '';
};

const deactivateButton = function (button) {
  button.disabled = 'disabled';
};

const slideForward = function (element, item, leftArrow, rightArrow) {
  let gutter = parseInt(window.getComputedStyle(element, null).columnGap, 10);
  gutter = gutter ? gutter : 0;

  if (element.scrollWidth - Math.abs(element.offsetLeft) > element.offsetWidth) {
    element.style.left = element.offsetLeft - item.offsetWidth - gutter + 'px';
    activateButton(leftArrow);
  } else {
    deactivateButton(rightArrow);
  }
};

const slideBackward = function (element, item, leftArrow, rightArrow) {
  let gutter = parseInt(window.getComputedStyle(element, null).columnGap, 10);
  gutter = gutter ? gutter : 0;

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

  arrowsElements.forEach(function (element) {
    element.classList.remove('arrow-control--no-js');
  });
  if (trenersListElement && trenersListItem && trenersControlBackward && trenersControlForward) {
    initSlider(trenersListElement, 'coaches__list--no-js', trenersListItem, trenersControlBackward, trenersControlForward);
  }

  if (reviewsListElement && reviewsListItem && reviewsControlBackward && reviewsControlForward) {
    initSlider(reviewsListElement, 'reviews__list--no-js', reviewsListItem, reviewsControlBackward, reviewsControlForward);
  }
}

function initSlider(list, listNoJsClass, item, leftArrow, rightArrow) {
  let isSliderAnimated = false;
  list.classList.remove(listNoJsClass);
  list.style.left = '0px';
  deactivateButton(leftArrow);

  list.addEventListener('animationstart', function () {
    isSliderAnimated = true;
  }, false);

  list.addEventListener('animationend', function () {
    isSliderAnimated = false;
  }, false);

  rightArrow.addEventListener('click', function () {
    if (isSliderAnimated) {
      return;
    }
    slideForward(list, item, leftArrow, rightArrow);
  });

  leftArrow.addEventListener('click', function () {
    if (isSliderAnimated) {
      return;
    }
    slideBackward(list, item, leftArrow, rightArrow);
  });
}
