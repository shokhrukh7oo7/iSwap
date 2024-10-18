const countdownTimer = document.querySelector("#countdown-timer");
const resendBtn = document.querySelector("#resendBtn");

const ONE_SECOND = 1000;
const THREE_MINUTES = 3 * 60; // 3 минуты в секундах

function startCountdown() {
  let counter = THREE_MINUTES; // Обратный отсчет с 3 минут
  resendBtn.setAttribute("disabled", true); // Отключаем кнопку resend
  resendBtn.style.color = "gray";
  resendBtn.style.cursor = "not-allowed";

  const intervalID = setInterval(() => {
    let minutes = Math.floor(counter / 60);
    let seconds = counter % 60;

    if (seconds < 10) {
      seconds = `0${seconds}`; // Добавляем ведущий ноль для секунд
    }

    countdownTimer.textContent = `${minutes}:${seconds}`;
    counter--;

    // Когда обратный отсчет закончился
    if (counter < 0) {
      clearInterval(intervalID); // Останавливаем таймер
      countdownTimer.textContent = "0:00";
      resendBtn.removeAttribute("disabled"); // Разблокируем кнопку resend
      resendBtn.style.color = "#0000fa";
      resendBtn.style.cursor = "pointer";
    }
  }, ONE_SECOND);
}

function handleResendBtnClick() {
  startCountdown(); // Перезапуск обратного отсчета при повторной отправке
}

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

// enter the cabinet password error msg
const togglePassword = document.querySelector("#enter-eye-password");
const passwrodField = document.querySelector("#enter-password");

// enter the cabinet password icon change
togglePassword.addEventListener("click", () => {
  // change type input
  const type =
    passwrodField.getAttribute("type") === "password" ? "text" : "password";
  passwrodField.setAttribute("type", type);

  // change eye icon
  togglePassword.src =
    type === "password"
      ? "/assets/images/form/eye (2).svg"
      : "/assets/images/form/eye-slash.svg";
});

// recovery password js start
document
  .getElementById("enterForm")
  .addEventListener("submit", function (event) {
    event.preventDefault(); // Prevent form submission

    // Hide the enter form wrapper
    document.querySelector(".enter-form-wrapper").style.display = "none";

    // Show the recover password section
    document.getElementById("recover-password").style.display = "flex";
  });
// recovery password js end

// enter sms wrapper js start
// Показ формы с SMS и запуск таймера
document
  .getElementById("recover-password")
  .addEventListener("submit", function (event) {
    event.preventDefault();

    document.querySelector(".recover-password").style.display = "none";

    document.getElementById("enter-sms-wrapper").style.display = "flex";
    startCountdown(); // Запускаем таймер при показе SMS формы
  });
// enter sms wrapper js end
