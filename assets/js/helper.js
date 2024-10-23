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
let nextBtn = document.querySelector(".next");
let prevBtn = document.querySelector(".prev");

let slider = document.querySelector(".slider");
let sliderList = slider.querySelector(".slider .list");
let thumbnail = document.querySelector(".slider .thumbnail");
let thumbnailItems = thumbnail.querySelectorAll(".item");

thumbnail.appendChild(thumbnailItems[0]);

// Function for next button
nextBtn.onclick = function () {
  moveSlider("next");
};

// Function for prev button
prevBtn.onclick = function () {
  moveSlider("prev");
};

//
thumbnailItems.forEach((item, index) => {
  item.addEventListener("click", () => moveSlider(index));
});
function moveSlide(targetIndex) {
  let currentIndex = Array.from(sliderList.children).indexOf(
    sliderList.querySelector(".item")
  );
  let direction = targetIndex > currentIndex ? "next" : "prev";

  while (targetIndex !== currentIndex) {
    moveSlider(direction);
    currentIndex = Array.from(sliderList.children).indexOf(
      sliderList.querySelector(".item")
    );
  }
}

//
function moveSlider(direction) {
  let sliderItems = sliderList.querySelectorAll(".item");
  let thumbnailItems = document.querySelectorAll(".thumbnail .item");

  if (direction === "next") {
    sliderList.appendChild(sliderItems[0]);
    thumbnail.appendChild(thumbnailItems[0]);
    slider.classList.add("next");
  } else {
    sliderList.prepend(sliderItems[sliderItems.length - 1]);
    thumbnail.prepend(thumbnailItems[thumbnailItems.length - 1]);
    slider.classList.add("prev");
  }

  slider.addEventListener(
    "animationend",
    function () {
      if (direction === "next") {
        slider.classList.remove("next");
      } else {
        slider.classList.remove("prev");
      }
    },
    { once: true }
  ); // Remove the event listener after it's triggered once
}
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
const drpButtons = document.querySelectorAll('.link-dropdown .nav-drp-button')
drpButtons.forEach(drpButton => {
  drpButton.addEventListener('click', (e) => {
    e.stopPropagation()
    const arrow = drpButton.querySelector('.arrow')
    const drpContent = drpButton.nextElementSibling
    const height = drpContent.getAttribute("data-height")

    if (drpContent.classList.contains('show')) {
      drpContent.classList.remove('show')
      drpContent.style.maxHeight = '0'
      arrow.style.transform = 'rotate(0deg)'
      setTimeout(() => {
        drpContent.style.display = 'none'
      }, 500)
    } else {
      drpContent.classList.add('show')
      drpContent.style.display = 'block'
      arrow.style.transform = 'rotate(90deg)'
      setTimeout(() => {
        drpContent.style.maxHeight = height +'px'
      }, 100)
    }
  })
})