// focus card__side--description
const cardDescription = document.querySelectorAll('.card');


export function initFocus() {
  cardDescription.forEach(function (item) {
    item.addEventListener('focus', function () {
      closeCards();
      item.classList.add('card--focused');
    });
  });

  function closeCards() {
    cardDescription.forEach(function (item) {
      if (item.classList.contains('card--focused')) {
        item.classList.remove('card--focused');
      }
    });
  }
}
