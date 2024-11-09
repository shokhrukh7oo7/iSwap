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

const mainSliderWrapper = document.querySelector(
  ".main-slider-wrapper .swiper-animation-wrapper .item-4"
);
setTimeout(() => {
  mainSliderWrapper.style.position = "absolute";
  mainSliderWrapper.style.right = "0";
  mainSliderWrapper.style.zIndex = "9";
}, 4000);

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

// chat
document.getElementById("chat-btn").addEventListener("click", function () {
  const content = document.querySelector(".chat-button-content");

  // Toggle visibility with transition
  if (content.style.opacity === "1") {
    content.style.opacity = "0";
    content.style.transform = "translateY(20px)";
    setTimeout(() => {
      content.style.display = "none"; // Hide the element after the transition ends
    }, 300); // Match the transition time (0.3s)
  } else {
    content.style.display = "block"; // Make it visible before the transition
    setTimeout(() => {
      content.style.opacity = "1"; // Fade in
      content.style.transform = "translateY(0)"; // Slide in
    }, 10); // Tiny delay for the transition to take effect
  }
});

