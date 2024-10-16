const countdownTimer = document.querySelector("#countdown-timer")
const resendBtn = document.querySelector("#resendBtn")

const ONE_SECOND = 1000
const ONE_MINUTE = 60 * ONE_SECOND

function startCountdown() {
  let counter = 60 * 3
  resendBtn.removeEventListener("click", handleResendBtnClick)
  resendBtn.style.color = "gray"
  resendBtn.style.cursor = "not-allowed"

  let intervalID = setInterval(() => {
    let minutes = parseInt(counter / 60)
    let seconds = counter % 60
    if (String(seconds).length == 1) {
      seconds = `0${seconds}`;
    }

    countdownTimer.textContent = `${minutes}:${seconds}`
    counter -= 1

    if (counter < 0) {
      resendBtn.style.color = "#0000fa"
      resendBtn.style.cursor = "pointer"
      resendBtn.addEventListener("click", handleResendBtnClick)
      clearInterval(intervalID)
    }
  }, ONE_SECOND)
}

function handleResendBtnClick() {
  startCountdown()
  sendAccountActivationSMSCode(null, true)
}

function sendAccountActivationSMSCode(phone, resend=false) {
  if (resend) {
    phone = JSON.parse(sessionStorage.getItem("auth-phone-number"))
  }
  console.log("SMS sent to number: ", phone)
  // TODO:
  // SEND ACTUAL CODE THROUGHT SMS
  try {
    const URL = "" // ASK
    fetch(URL, {
      method: "POST", // ASK from backend
      headers: {
        // ASK if needed
      },
      body: JSON.stringify({ phone })
    })
    .then(response => {
      console.log(response)
    })
  }
  catch (e) {
    console.log("Error: ", e)
  }
}

// register page form sms (OTP)
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
// ================================================================================================
// document.addEventListener("DOMContentLoaded", function () {
//   // Проверяем сохраненное состояние в localStorage
//   const currentStep = localStorage.getItem("registrationStep");

//   if (currentStep === "sms") {
//     document.querySelector(".form-wrapper").style.display = "none";
//     document.querySelector(".register-sms-wrapper").style.display = "block";
//   } else {
//     document.querySelector(".form-wrapper").style.display = "block";
//     document.querySelector(".register-sms-wrapper").style.display = "none";
//   }
// });

document
  .getElementById("registerForm")
  .addEventListener("submit", function (event) {
    event.preventDefault();
    const name = document.getElementById("register-name").value;
    const phone = document.getElementById("register-phone").value;

    if (name && phone) {
      sessionStorage.setItem("auth-phone-number", JSON.stringify(phone))

      document.querySelector(".form-wrapper").style.display = "none";
      document.querySelector(".register-sms-wrapper").style.display = "block";
      startCountdown()
      sendAccountActivationSMSCode(phone)
      // Сохраняем текущее состояние в localStorage
      //localStorage.setItem("registrationStep", "sms");
    } else {
      alert("Пожалуйста, заполните все поля");
    }
  });
