let tabs;
let content;

export function initTabs() {
  tabs = document.querySelectorAll('.subscriptions__item');
  content = document.querySelectorAll('.subscriptions__cards');
  if (tabs && content) {
    toggleTab();
    toggleKeyTab();
  }
}

const toggleTab = () => {
  tabs.forEach(function (tab, i) {
    tab.addEventListener('click', function () {
      hideTab();

      tab.classList.add('subscriptions__item--current');
      content[i].classList.add('subscriptions__cards--show');
    });
  });
};

function hideTab() {
  tabs.forEach((item) => {
    item.classList.remove('subscriptions__item--current');
  });
  content.forEach((item) => {
    item.classList.remove('subscriptions__cards--show');
  });
}

const toggleKeyTab = () => {
  tabs.forEach(function (tab, i) {
    tab.addEventListener('keydown', function (evt) {
      if (evt.key === 'Enter') {
        hideTab();
        tab.classList.add('subscriptions__item--current');
        content[i].classList.add('subscriptions__cards--show');
      }
    });
  });
};
