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
submitSmsForAssessmentBtn.addEventListener(
  "click",
  fetchSubmitSmsForAssessment
);

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

openChatBtn.addEventListener("click", () => {
  chatContent.style.display =
    chatContent.style.display === "block" ? "none" : "block";
});

closeChatBtn.addEventListener("click", () => {
  chatContent.style.display = "none";
});


// mobile menu active js start
document.addEventListener('DOMContentLoaded', () => {
  const items = document.querySelectorAll('.items-wrapper .item');

  items.forEach(item => {
    item.addEventListener('click', () => {
      // Удаляем класс "active" со всех элементов
      items.forEach(i => i.classList.remove('active'));

      // Добавляем класс "active" к текущему элементу
      item.classList.add('active');
    });
  });
});

// mobile menu active js end