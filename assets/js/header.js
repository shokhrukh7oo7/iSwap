const CONTENT_TOGGLER = document.querySelector("#main-body-content-toggler");
const MAIN_BODY_CONTENT = document.querySelector("#main-body-content");
const leftMenu = document.querySelector(".left-menu");
const mainContent = document.querySelector(".main-content");

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

document
  .querySelectorAll(".top-nav .dropdown-menu .dropdown-item img")
  .forEach(function (img) {
    img.addEventListener("click", function (event) {
      // Получаем текущий src изображения в button
      let currentFlag = document.getElementById("current-flag");
      let currentSrc = currentFlag.src;

      // Меняем местами src изображения в button и нажатого элемента
      currentFlag.src = event.target.src;
      event.target.src = currentSrc;
    });
  });

// ============================================================================================

// ============================================================================================
document.addEventListener("DOMContentLoaded", function () {
  // Плавный скролл при клике на элементы меню
  document.querySelectorAll(".bottom-nav-items li a").forEach((anchor) => {
      anchor.addEventListener("click", function (event) {
          event.preventDefault();
          const targetId = this.getAttribute("href");

          // Проверяем, что targetId не является "#" перед выполнением querySelector
          if (targetId !== "#" && targetId !== "") {
              const targetElement = document.querySelector(targetId);

              if (targetElement) {
                  window.scrollTo({
                      top: targetElement.offsetTop - 150,
                      behavior: "smooth",
                  });
              }
          }
      });
  });

  // Получаем кнопку dropdown и меню
  const dropdownButton = document.getElementById("dropdownMenuButton");
  const dropdownMenu = document.getElementById("dropdownMenu");

  if (dropdownMenu && dropdownButton) { // Проверка, что элемент существует
      // Используем делегирование событий для динамических элементов
      dropdownMenu.addEventListener("click", function (event) {
          // Проверка, был ли клик на элементе с классом dropdown-item
          if (event.target && event.target.classList.contains("dropdown-item")) {
              event.preventDefault();
              
              const targetId = event.target.getAttribute("href");

              // Проверяем, что targetId не является "#" перед выполнением querySelector
              if (targetId !== "#" && targetId !== "") {
                  const targetElement = document.querySelector(targetId);

                  // Изменение текста кнопки dropdown на выбранный элемент
                  dropdownButton.textContent = event.target.textContent;

                  // Перемещаемся к выбранному элементу, только если href не равно "#"
                  window.scrollTo({
                      top: targetElement.offsetTop - 150,
                      behavior: "smooth",
                  });
              } else {
                  // Если targetId "#", просто меняем текст на выбранный пункт
                  dropdownButton.textContent = event.target.textContent;
              }
          }
      });
  }
});