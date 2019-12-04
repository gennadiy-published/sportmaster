'use strict';
(function () {
  var news = document.querySelector('.news');
  var newsSliderContainer = news.querySelector('.swiper-container');

  if (!newsSliderContainer) {
    return;
  }

  var activeSlide = document.querySelector('.news-slide--active');
  var activeToggle = document.querySelector('.news__toggle--active');
  var toggles = document.querySelectorAll('.news__toggle');

  var newsSlider = new Swiper(newsSliderContainer, {
    slidesPerView: 'auto',
    pagination: {
      clickable: true,
    },
    scrollbar: {
      el: '.swiper-scrollbar',
      hide: true,
    },
    spaceBetween: 10,
    navigation: {
      nextEl: '.news__btn--next',
      prevEl: '.news__btn--prev',
    },
  });

  var getChangeSlides = function (toggle) {
    var numberSlide = toggle.dataset.slide;
    var newSlide = news.querySelector('article[data-slide="' + numberSlide + '"]');
    activeSlide.classList.remove('news-slide--active');
    activeSlide = newSlide;
    activeSlide.classList.add('news-slide--active');
  };

  var onClickToggle = function (evt) {
    var clickToggle = evt.target;
    if (evt.target.tagName === 'IMG') {
      clickToggle = clickToggle.closest('.news__toggle');
    }
    activeToggle.classList.remove('news__toggle--active');
    clickToggle.classList.add('news__toggle--active');
    activeToggle = clickToggle;
    getChangeSlides(clickToggle);
  };

  var addListener = function (element) {
    element.addEventListener('click', onClickToggle);
  };

  for (var i = 0; i < toggles.length; i++) {
    addListener(toggles[i]);
  }
})();

'use strict';
(function () {
  var recommendations = document.querySelector('.recommendations');
  var recommendationsSliderContainer = recommendations.querySelector('.swiper-container');

  if (!recommendationsSliderContainer) {
    return;
  }

  var recommendationsSlider = new Swiper(recommendationsSliderContainer, {
    slidesPerView: 3,
    spaceBetween: 20,
    loop: true,
    navigation: {
      nextEl: '.recommendations__btn--left',
      prevEl: '.recommendations__btn--right',
    },
    breakpoints: {
      1023: {
        slidesPerView: 1,
        spaceBetween: 0,
      }
    },
  });
})();

'use strict';
(function () {
  var equipment = document.querySelector('.equipment-center');
  var equipmentSliderContainer = equipment.querySelector('.swiper-container');

  if (!equipmentSliderContainer) {
    return;
  }

  var equipmentSlider = new Swiper(equipmentSliderContainer, {
    slidesPerView: 'auto',
    pagination: {
      clickable: true,
    },
    scrollbar: {
      el: '.swiper-scrollbar',
      hide: true,
    },
  });
})();
