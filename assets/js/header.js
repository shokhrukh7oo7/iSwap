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
  smsInputWrapper.style.display = show ? "flex" : "none"
  smsActionWrapper.style.display = show ? "flex" : "none"
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
