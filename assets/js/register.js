const countdownTimer = document.querySelector("#countdown-timer");
const resendBtn = document.querySelector("#resendBtn");

const ONE_SECOND = 1000;
const ONE_MINUTE = 60 * ONE_SECOND;

function startCountdown() {
  let counter = 60 * 3;
  resendBtn.removeEventListener("click", handleResendBtnClick);
  resendBtn.style.color = "gray";
  resendBtn.style.cursor = "not-allowed";

  let intervalID = setInterval(() => {
    let minutes = parseInt(counter / 60);
    let seconds = counter % 60;
    if (String(seconds).length == 1) {
      seconds = `0${seconds}`;
    }

    countdownTimer.textContent = `${minutes}:${seconds}`;
    counter -= 1;

    if (counter < 0) {
      resendBtn.style.color = "#0000fa";
      resendBtn.style.cursor = "pointer";
      resendBtn.addEventListener("click", handleResendBtnClick);
      clearInterval(intervalID);
    }
  }, ONE_SECOND);
}

function handleResendBtnClick() {
  startCountdown();
  sendAccountActivationSMSCode(null, true);
}

function sendAccountActivationSMSCode(phone, resend = false) {
  if (resend) {
    phone = JSON.parse(sessionStorage.getItem("auth-phone-number"));
  }
  console.log("SMS sent to number: ", phone);
  // TODO:
  // SEND ACTUAL CODE THROUGHT SMS
  try {
    const URL = ""; // ASK
    fetch(URL, {
      method: "POST", // ASK from backend
      headers: {
        // ASK if needed
      },
      body: JSON.stringify({ phone }),
    }).then((response) => {
      console.log(response);
    });
  } catch (e) {
    console.log("Error: ", e);
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
// ======================================================================================
document
  .getElementById("registerForm")
  .addEventListener("submit", function (event) {
    event.preventDefault();
    const name = document.getElementById("register-name").value;
    const phone = document.getElementById("register-phone").value;

    if (name && phone) {
      sessionStorage.setItem("auth-phone-number", JSON.stringify(phone));

      document.querySelector(".form-wrapper").style.display = "none";
      document.querySelector(".register-sms-wrapper").style.display = "block";
      startCountdown();
      sendAccountActivationSMSCode(phone);

      // Сохраняем текущее состояние в localStorage
      //localStorage.setItem("registrationStep", "sms");
    } else {
      alert("Пожалуйста, заполните все поля");
    }
  });
// =======================================================================================
// sweet alert start
document.getElementById("confirm-btn").addEventListener("click", function () {
  // Обработчик нажатия на кнопку "Tasdiqlash"
  // Настройка SweetAlert с кастомными кнопками
  const swalWithBootstrapButtons = Swal.mixin({
    customClass: {
      confirmButton: "btn btn-success", // Стиль кнопки подтверждения
      cancelButton: "btn btn-danger", // Стиль кнопки отмены
    },
    buttonsStyling: false, // Отключаем стандартное оформление кнопок
  });

  // Вызываем SweetAlert
  swalWithBootstrapButtons
    .fire({
      // title: "iSwap",
      text: "Parolingizni doimiyga o'zgartirishni xohlaysizmi?",
      icon: false,
      showCancelButton: true,
      confirmButtonText: "Ha",
      cancelButtonText: "Yo'q",
      reverseButtons: true, // Меняем местами кнопки подтверждения и отмены
    })
    .then((result) => {
      if (result.isConfirmed) {
        // Если пользователь подтвердил действие
        document.querySelector(".register-sms-wrapper").style.display = "none"; // Скрываем sms-форму
        document.querySelector(".password-form").style.display = "block"; // Показываем форму пароля

        // Если пользователь подтвердил действие
        swalWithBootstrapButtons.fire({
          title: "Muvaffaqiyatli!",
          // text: "Ваш воображаемый файл в безопасности :)",
          icon: "success",
        });
      } else if (
        result.dismiss === Swal.DismissReason.cancel // Если пользователь отменил действие
      ) {
        swalWithBootstrapButtons.fire({
          title: "Muvaffaqiyatli!",
          // text: "Ваш файл был удален.",
          icon: "success",
        });
      }
    });
});
// sweet alert end
// ========================================================================================
// password form start

document.addEventListener("DOMContentLoaded", () => {
  const passInput = document.getElementById("password");
  const passInputSecond = document.getElementById("password-2");
  const submitBtn = document.getElementById("password-btn");

  // Функция для отображения ошибки
  function showError(element, message = "") {
    const errorElem = element
      .closest(".form-control-password")
      .querySelector(".error");
    errorElem.textContent = message;
  }

  // Проверка длины пароля в первом инпуте
  passInput.addEventListener("input", () => {
    const passValue = passInput.value;
    if (passValue.length < 8) {
      showError(passInput, "Parol 8 tadan ko'p bo'lishi kerak");
    } else {
      showError(passInput, ""); // Убираем ошибку, если длина правильная
    }
  });

  // Проверка длины пароля во втором инпуте
  passInputSecond.addEventListener("input", () => {
    const passSecondValue = passInputSecond.value;
    if (passSecondValue.length < 8) {
      showError(passInputSecond, "Parol 8 tadan ko'p bo'lishi kerak");
    } else {
      showError(passInputSecond, ""); // Убираем ошибку, если длина правильная
    }
  });

  // Сравнение паролей при нажатии на кнопку
  submitBtn.addEventListener("click", (e) => {
    e.preventDefault();

    const passValue = passInput.value;
    const passSecondValue = passInputSecond.value;

    // Проверяем если пароли совпадают и их длина правильная
    if (
      passValue === passSecondValue &&
      passValue.length >= 8 &&
      passSecondValue.length >= 8
    ) {
      Swal.fire({
        // icon: 'success',
        title: "Parolingiz muvaffaqiyatli saqlandi!",
        imageUrl: "/assets/images/form/check.png", // Укажите путь к вашей иконке
        imageWidth: 120, // Задайте ширину изображения
        imageHeight: 120, // Задайте высоту изображения
        imageAlt: "Custom image", // Альтернативный текст для изображения
      });
    } else {
      if (passValue !== passSecondValue) {
        showError(passInputSecond, "Parol bir xil emas");
      }
    }
  });



  const passwordEyeIcons = document.querySelectorAll(".show-password-eye");
  passwordEyeIcons.forEach((icon, index) => {
    icon.addEventListener("click", () => {
      const input = index === 0 ? passInput : passInputSecond;
      const passwordEyeIcon = icon.querySelector(".password-eye-icon");
  
      if (input.type === "password") {
        input.type = "text";
        passwordEyeIcon.src = "/assets/images/form/eye-slash.svg";
      } else {
        input.type = "password";
        passwordEyeIcon.src = "/assets/images/form/eye (2).svg";
      }
    });
  });
});

// password form end
