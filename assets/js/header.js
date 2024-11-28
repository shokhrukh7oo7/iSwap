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
// ================================================================================================
// mobile filter js
const mobileFiltrBtn = document.getElementById("mobile-filtr");
const filtrMenu = document.querySelector(".filtr-menu");
const mainContentFiltr = document.querySelector(".main-content");
const filtrCloseBtn = document.getElementById("filtr-close-btn");

mobileFiltrBtn.addEventListener("click", () => {
  filtrMenu.style.transform = "translateX(0)";
  mainContentFiltr.style["grid-template-columns"] = "100% 0";
  filtrCloseBtn.style.display = "flex";
});

filtrCloseBtn.addEventListener("click", () => {
  filtrMenu.style.transform = "translateX(-400px)";
  mainContentFiltr.style["grid-template-columns"] = "0 100%";
});

// ================================================================================================

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
// ================================================================================================

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
// ================================================================================================
// product item increment and decrement js
const increment = document.querySelector(".increment");
const decrement = document.querySelector(".decrement");
const counter = document.querySelector(".counter-number");

let count = 0;

increment.addEventListener("click", () => {
  count--;
  updateCounter();
});

decrement.addEventListener("click", () => {
  count++;
  updateCounter();
});
function updateCounter() {
  counter.textContent = count;
}

// ================================================================================================
const rangeInput = document.querySelectorAll(".range-input input"),
  priceInput = document.querySelectorAll(".from-to-wrapper input"),
  range = document.querySelector(".slider .progress");
let priceGap = 1000;

priceInput.forEach((input) => {
  input.addEventListener("input", (e) => {
    let minPrice = parseInt(priceInput[0].value),
      maxPrice = parseInt(priceInput[1].value);

    if (maxPrice - minPrice >= priceGap && maxPrice <= rangeInput[1].max) {
      if (e.target.className === "input-min") {
        rangeInput[0].value = minPrice;
        range.style.left = (minPrice / rangeInput[0].max) * 100 + "%";
      } else {
        rangeInput[1].value = maxPrice;
        range.style.right = 100 - (maxPrice / rangeInput[1].max) * 100 + "%";
      }
    }
  });
});

rangeInput.forEach((input) => {
  input.addEventListener("input", (e) => {
    let minVal = parseInt(rangeInput[0].value),
      maxVal = parseInt(rangeInput[1].value);

    if (maxVal - minVal < priceGap) {
      if (e.target.className === "range-min") {
        rangeInput[0].value = maxVal - priceGap;
      } else {
        rangeInput[1].value = minVal + priceGap;
      }
    } else {
      priceInput[0].value = minVal;
      priceInput[1].value = maxVal;
      range.style.left = (minVal / rangeInput[0].max) * 100 + "%";
      range.style.right = 100 - (maxVal / rangeInput[1].max) * 100 + "%";
    }
  });
});
// ================================================================================================
// product input otp (one click) section
let digitValidate = function (ele) {
  ele.value = ele.value.replace(/[^0-9]/g, "");
};
let tabChange = function (val) {
  let ele = document.querySelectorAll(".otp");
  if (ele[val - 1] && ele[val - 1].value != "") {
    if (ele[val]) {
      // Проверяем, существует ли ele[val]
      ele[val].focus();
    }
  } else if (ele[val - 1] && ele[val - 1].value == "") {
    if (ele[val - 2]) {
      // Проверяем, существует ли ele[val - 2]
      ele[val - 2].focus();
    }
  }
};
