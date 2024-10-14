const CONTENT_TOGGLER = document.querySelector("#main-body-content-toggler");
const MAIN_BODY_CONTENT = document.querySelector("#main-body-content");
const leftMenu = document.querySelector(".left-menu");
const mainContent = document.querySelector(".main-content");

console.log(CONTENT_TOGGLER);

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

// modal
const showBtn = document.getElementById("show-btn");
const enterModal = document.getElementById("modal");
const closeBtn = document.querySelector("#close-btn i");
const overlay = document.getElementById("overlay");

// ================================================================================================
// ---------------------------------------------------------
// HEADER ENTER MODAL JS START
const addHidden = () => {
  enterModal.classList.remove("visible");
  overlay.classList.remove("visible");
  setTimeout(() => {
    enterModal.classList.add("hidden");
    overlay.classList.add("hidden");
  }, 0); // Таймер, чтобы дождаться завершения анимации
};

// Показ модального окна
// const removeHidden = () => {
//   enterModal.classList.remove("hidden");
//   overlay.classList.remove("hidden");
//   setTimeout(() => {
//     enterModal.classList.add("visible");
//     overlay.classList.add("visible");
//   }, 10); // Небольшая задержка для корректного срабатывания анимации
// };

// // События
// showBtn.addEventListener("click", removeHidden);

// closeBtn.addEventListener("click", addHidden);

// overlay.addEventListener("click", addHidden);

// document.addEventListener("keydown", (e) => {
//   if (e.key === "Escape") {
//     addHidden();
//   }
// });
// HEADER ENTER MODAL JS END
// ---------------------------------------------------------

// ---------------------------------------------------------
// HEADER ENTER MODAL FORM JS (PASSWORD AND USERNAME) START

// HEADER ENTER MODAL FORM JS (PASSWORD AND USERNAME) END
// ---------------------------------------------------------
// ================================================================================================
// ONLINE ASSESSEMENT JS START
const onlineAssessmentForm = document.querySelector("#online-assessment-form")
const onlineAssessmentTelInput = document.querySelector("#tel-of-online-assessment")
const sumbitTelButton = document.querySelector("#submit-tel-for-assessment-btn")

const autoDecrementTimeForSms = document.querySelector("#auto-decrement-time-for-sms")
const submitSmsForAssessmentBtn = document.querySelector("#submit-sms-for-assessment-btn")

const smsInputWrapper = document.querySelector(".sms-input-wrapper")
const smsActionWrapper = document.querySelector(".sms-action-wrapper")
const ONE_SECOND = 1000

function showConfirmationSections(show = true) {
  smsInputWrapper.style.display = show ? "block" : "none"
  smsActionWrapper.style.display = show ? "block" : "none"
}

function fetchSubmitSmsForAssessment(e) {
  // NEEDED BACKEND FOR SENDING SMS
}
submitSmsForAssessmentBtn.addEventListener("click", fetchSubmitSmsForAssessment)

function showTimerForAssessmentSMS(timerTime) {
  let counter = timerTime
  let intervalID = setInterval(() => {
    let timeToShow = counter
    if (String(timeToShow).length == 1) {
      timeToShow = `0${timeToShow}`
    }
    autoDecrementTimeForSms.textContent = `00:${timeToShow}`
    counter -= 1

    if (counter < 0) {
      sumbitTelButton.disabled = false
      sumbitTelButton.textContent = "SMSni qayta jo'natish"
      clearInterval(intervalID)
    }
  }, ONE_SECOND)
}

function fetchSMSforAssessmentNumber(e) {
  const timerTime = 5
  e.preventDefault()
  showConfirmationSections()
  showTimerForAssessmentSMS(timerTime)
  sumbitTelButton.disabled = true
}

onlineAssessmentTelInput.addEventListener("input", (e) => {
  if (e.target.value.length >= 9) {
    sumbitTelButton.disabled = false
    sumbitTelButton.addEventListener("click", fetchSMSforAssessmentNumber)
  } else {
    sumbitTelButton.disabled = true
    sumbitTelButton.removeEventListener("click", fetchSMSforAssessmentNumber)
    showConfirmationSections(false)
  }
})
// ================================================================================================
