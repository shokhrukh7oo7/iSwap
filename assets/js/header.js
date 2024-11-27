const CONTENT_TOGGLER = document.querySelector("#main-body-content-toggler");
const MAIN_BODY_CONTENT = document.querySelector("#main-body-content");
const leftMenu = document.querySelector(".left-menu");
const mainContent = document.querySelector(".main-content");

CONTENT_TOGGLER.addEventListener("click", (e) => {
  console.log("clicked");
  leftMenu.classList.toggle("show-left-menu");
  mainContent.classList.toggle("show-left-menu");
});
// ASIDE MENU LEFT ACTIVE
const menuItems = document.querySelectorAll(".left-menu-item a");

menuItems.forEach((item) => {
  item.addEventListener("click", (e) => {
    menuItems.forEach((l) => {
      l.classList.remove("active");
    });
    e.currentTarget.classList.add("active");
  });
});

// ================================================================================================
document.addEventListener("DOMContentLoaded", function () {
  // Плавный скролл при клике на элементы меню
  document.querySelectorAll(".bottom-nav-items li a").forEach((anchor) => {
    anchor.addEventListener("click", function (event) {
      event.preventDefault();
      const targetId = this.getAttribute("href");
      const targetElement = document.querySelector(targetId);

      if (targetElement) {
        window.scrollTo({
          top: targetElement.offsetTop - 150, // Прокрутка с учетом отступа
          behavior: "smooth",
        });
      }
    });
  });

  // Изменение текста кнопки dropdown и плавная прокрутка при выборе элемента из dropdown
  const dropdownButton = document.getElementById("dropdownMenuButton");
  document.querySelectorAll(".dropdown-menu .dropdown-item").forEach((item) => {
    item.addEventListener("click", function (event) {
      event.preventDefault();
      const targetId = this.getAttribute("href");
      const targetElement = document.querySelector(targetId);

      // Изменение текста кнопки dropdown на текст выбранного элемента
      dropdownButton.textContent = this.textContent;

      if (targetElement) {
        window.scrollTo({
          top: targetElement.offsetTop - 150, // Прокрутка с учетом отступа
          behavior: "smooth",
        });
      }
    });
  });
});
// ==================
// image switcher
const leftImgs = document.querySelectorAll(".product-info-wrapper-left img");
const rightImg = document.querySelector(".product-info-wrapper-right img");

leftImgs.forEach((img) => {
  img.addEventListener("click", (e) => {
    leftImgs.forEach((el) => el.classList.remove("active"));

    img.classList.add("active");

    rightImg.src = img.src;
  });
});
rightImg.addEventListener("click", (e) => {
  e.target.requestFullscreen();
});
// =========================================
// product info step (range)
// Функция обновления степов
const steps = document.querySelectorAll(".step");
const numbers = document.querySelectorAll(".number");
const line = document.querySelector(".line");

// Функция для обновления активного шага
function updateActiveStep(stepIndex) {
  // Удалить классы active и completed со всех степов
  steps.forEach((step, index) => {
    step.classList.remove("active", "completed");
    if (index < stepIndex) {
      step.classList.add("completed"); // Сделать завершёнными
    }
  });
  // Установить активный степ
  const activeStep = steps[stepIndex];
  if (activeStep) {
    activeStep.classList.add("active");
  }
  // Обновить линию
  updateLine(stepIndex);
}
// Функция для обновления линии
function updateLine(stepIndex) {
  const percentage = (stepIndex / (steps.length - 1)) * 100;
  line.style.background = `linear-gradient(to right, #007bff ${percentage}%, #d3d3d3 ${percentage}%)`;
}
// Инициализация состояния при загрузке
function initializeTimeline() {
  const activeStep = Array.from(steps).findIndex((step) =>
    step.classList.contains("active")
  );
  updateLine(activeStep >= 0 ? activeStep : 0);
}
// Добавить обработчики кликов на номера
numbers.forEach((number, index) => {
  number.addEventListener("click", () => updateActiveStep(index));
});
// Добавить обработчики кликов на степы
steps.forEach((step, index) => {
  step.addEventListener("click", () => updateActiveStep(index));
});
// Вызвать инициализацию
initializeTimeline();
