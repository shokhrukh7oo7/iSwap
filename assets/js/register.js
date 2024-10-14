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
      document.querySelector(".form-wrapper").style.display = "none";
      document.querySelector(".register-sms-wrapper").style.display = "block";
      // Сохраняем текущее состояние в localStorage
      //localStorage.setItem("registrationStep", "sms");
    } else {
      alert("Пожалуйста, заполните все поля");
    }
  });
