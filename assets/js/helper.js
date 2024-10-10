$(document).ready(function () {
  $(".owl-carousel").owlCarousel({
    loop: true,
    nav: true,
    margin: 50,
    autoplay: true,
    autoplayTimeout: 3000,
    responsive: {
      0: {
        items: 1,
      },
      450: {
        items: 2,
      },
      768: {
        items: 3,
      },
      1200: {
        items: 4,
      },
    },
  });
});

// home slider custom js start
document.addEventListener('DOMContentLoaded', function () {
  const items = document.querySelectorAll('.slider .list .item');
  const thumbnails = document.querySelectorAll('.thumbnail .item');
  const nextButton = document.querySelector('.next');
  const prevButton = document.querySelector('.prev');
  let currentIndex = 0;

  // Функция для обновления слайдера
  function updateSlider(index) {
    items.forEach((item, idx) => {
      item.style.zIndex = idx === index ? 1 : 0;
      item.style.opacity = idx === index ? 1 : 0;
      item.style.transition = 'opacity 0.5s ease-in-out';
    });
    thumbnails.forEach((thumb, idx) => {
      thumb.classList.toggle('active', idx === index);
    });
  }

  // Клик по кнопке "Next"
  nextButton.addEventListener('click', () => {
    currentIndex = (currentIndex + 1) % items.length;
    updateSlider(currentIndex);
  });

  // Клик по кнопке "Prev"
  prevButton.addEventListener('click', () => {
    currentIndex = (currentIndex - 1 + items.length) % items.length;
    updateSlider(currentIndex);
  });

  // Клик по элементам миниатюр
  thumbnails.forEach((thumbnail, index) => {
    thumbnail.addEventListener('click', () => {
      currentIndex = index;
      updateSlider(currentIndex);
    });
  });

  // Начальное состояние
  updateSlider(currentIndex);
});

// home slider custom js end
