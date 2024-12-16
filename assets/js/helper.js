$(document).ready(function () {
  $(".owl-carousel").owlCarousel({
    loop: true,
    nav: true,
    autoplay: true,
    autoplayTimeout: 3000,
    responsive: {
      0: {
        items: 2,
        margin: 20,
      },
      450: {
        items: 2,
        margin: 30,
      },
      768: {
        items: 3,
        margin: 40,
      },
      1200: {
        items: 4,
        margin: 50,
      },
    },
  });
});

// const mainSliderWrapper = document.querySelector(
//   ".main-slider-wrapper .swiper-animation-wrapper .item-4"
// );
// setTimeout(() => {
//   mainSliderWrapper.style.position = "absolute";
//   mainSliderWrapper.style.right = "0";
//   mainSliderWrapper.style.zIndex = "9";
// }, 4000);

// home slider custom js end
// ================================================================================================
// ONLINE ASSESSEMENT JS START (HOME PAGE SECTION)
const onlineAssessmentForm = document.querySelector("#online-assessment-form");
const onlineAssessmentTelInput = document.querySelector(
  "#tel-of-online-assessment"
);
const sumbitTelButton = document.querySelector(
  "#submit-tel-for-assessment-btn"
);

const autoDecrementTimeForSms = document.querySelector(
  "#auto-decrement-time-for-sms"
);
const submitSmsForAssessmentBtn = document.querySelector(
  "#submit-sms-for-assessment-btn"
);

const smsInputWrapper = document.querySelector(".sms-input-wrapper");
const smsActionWrapper = document.querySelector(".sms-action-wrapper");
const ONE_SECOND = 1000;

function showConfirmationSections(show = true) {
  smsInputWrapper.style.display = show ? "flex" : "none";
  smsActionWrapper.style.display = show ? "flex" : "none";
}

function fetchSubmitSmsForAssessment(e) {
  // NEEDED BACKEND FOR SENDING SMS
}
if(submitSmsForAssessmentBtn) {
  submitSmsForAssessmentBtn.addEventListener(
    "click",
    fetchSubmitSmsForAssessment
  );
}

function showTimerForAssessmentSMS(timerTime) {
  let counter = timerTime;
  let intervalID = setInterval(() => {
    let timeToShow = counter;
    if (String(timeToShow).length == 1) {
      timeToShow = `0${timeToShow}`;
    }
    autoDecrementTimeForSms.textContent = `00:${timeToShow}`;
    counter -= 1;

    if (counter < 0) {
      sumbitTelButton.disabled = false;
      sumbitTelButton.textContent = "SMSni qayta jo'natish";
      clearInterval(intervalID);
    }
  }, ONE_SECOND);
}

function fetchSMSforAssessmentNumber(e) {
  const timerTime = 5;
  e.preventDefault();
  showConfirmationSections();
  showTimerForAssessmentSMS(timerTime);
  sumbitTelButton.disabled = true;
}

if(onlineAssessmentTelInput){
  onlineAssessmentTelInput.addEventListener("input", (e) => {
    if (e.target.value.length >= 9) {
      sumbitTelButton.disabled = false;
      sumbitTelButton.addEventListener("click", fetchSMSforAssessmentNumber);
    } else {
      sumbitTelButton.disabled = true;
      sumbitTelButton.removeEventListener("click", fetchSMSforAssessmentNumber);
      showConfirmationSections(false);
    }
  });
}
// ================================================================================================
// ================================================================================================
// NAV-SIDEBAR link dropdown
const drpButtons = document.querySelectorAll(".link-dropdown .nav-drp-button");
drpButtons.forEach((drpButton) => {
  drpButton.addEventListener("click", (e) => {
    e.stopPropagation();
    const arrow = drpButton.querySelector(".arrow");
    const drpContent = drpButton.nextElementSibling;
    const height = drpContent.getAttribute("data-height");

    if (drpContent.classList.contains("show")) {
      drpContent.classList.remove("show");
      drpContent.style.maxHeight = "0";
      arrow.style.transform = "rotate(0deg)";
      setTimeout(() => {
        drpContent.style.display = "none";
      }, 500);
    } else {
      drpContent.classList.add("show");
      drpContent.style.display = "block";
      arrow.style.transform = "rotate(180deg)";
      setTimeout(() => {
        drpContent.style.maxHeight = height + "px";
      }, 100);
    }
  });
});

// ========== chat
const openChatBtn = document.getElementById("chat-btn");
const closeChatBtn = document.getElementById("chat-close-btn");
const chatContent = document.querySelector(".chat-btn-content");
if(openChatBtn) {
  openChatBtn.addEventListener("click", () => {
    chatContent.style.display =
      chatContent.style.display === "block" ? "none" : "block";
  });
}


if(closeChatBtn) {
  closeChatBtn.addEventListener("click", () => {
    chatContent.style.display = "none";
  });
}

// mobile menu active js start
document.addEventListener("DOMContentLoaded", () => {
  const items = document.querySelectorAll(".items-wrapper .item");

  items.forEach((item) => {
    item.addEventListener("click", () => {
      // Удаляем класс "active" со всех элементов
      items.forEach((i) => i.classList.remove("active"));

      // Добавляем класс "active" к текущему элементу
      item.classList.add("active");
    });
  });

  // target elements with the "draggable" class
  interact(".chat-wrapper").draggable({
    // enable inertial throwing
    inertia: true,

    // enable autoScroll
    autoScroll: true,

    // call this function on every dragmove event
    onmove: dragMoveListener,
    // call this function on every dragend event
    onend: function (event) {},
  });

  function dragMoveListener(event) {
    var target = event.target,
      // keep the dragged position in the data-x/data-y attributes
      x = (parseFloat(target.getAttribute("data-x")) || 0) + event.dx,
      y = (parseFloat(target.getAttribute("data-y")) || 0) + event.dy;

    // translate the element
    target.style.webkitTransform = target.style.transform =
      "translate(" + x + "px, " + y + "px)";

    // update the posiion attributes
    target.setAttribute("data-x", x);
    target.setAttribute("data-y", y);
  }
});

// mobile menu active js end

// popup js start
// Получаем элементы попапа и кнопки закрытия
const popup = document.getElementById("popup");
const popupTwo = document.getElementById("popup-2");
const popupThree = document.getElementById("popup-3");
const popCloseButton = document.querySelectorAll(".pop-close-btn");
const popOverlay = document.getElementById("popup-overlay");

// Время бездействия (в миллисекундах)
const idleTime = 22222222225000;
// Таймер для отслеживания бездействия
let idleTimer;
// Функция для показа попапа
function showPopup() {
  popup.style.display = "flex"; // Убедитесь, что стили позволяют отображение
  popupTwo.style.display = "flex"; // Убедитесь, что стили позволяют отображение
  // popupThree.style.display = "flex"; // Убедитесь, что стили позволяют отображение
  popOverlay.classList.remove("hidden");
}
// Функция для скрытия попапа
function hidePopup() {
  popup.style.display = "none";
  popupTwo.style.display = "none";
  popupThree.style.display = "none";
  popOverlay.classList.add("hidden");
}
// Сброс таймера бездействия
function resetIdleTimer() {
  clearTimeout(idleTimer);
  idleTimer = setTimeout(showPopup, idleTime);
}
popCloseButton.forEach((i) => {
  i.addEventListener('click', () => {
    hidePopup()
  })
})
// Обработчики событий для активности пользователя
document.addEventListener("mousemove", resetIdleTimer);
document.addEventListener("keydown", resetIdleTimer);
document.addEventListener("mousedown", resetIdleTimer);
document.addEventListener("touchstart", resetIdleTimer);

// Закрытие попапа при клике на кнопку
// popCloseButton.addEventListener("click", hidePopup);
if(popOverlay){
  popOverlay.addEventListener("click", () => {
    popup.style.display = "none";
    popupTwo.style.display = "none";
    popupThree.style.display = "none";
    popOverlay.classList.add("hidden");
  });
}
// Инициализация таймера при загрузке страницы
resetIdleTimer();

// popup js end
