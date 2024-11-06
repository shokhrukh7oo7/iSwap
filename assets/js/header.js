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
document.addEventListener("DOMContentLoaded", function () {
  // Плавный скролл при клике на элементы меню
  document.querySelectorAll(".bottom-nav-items li a").forEach((anchor) => {
      anchor.addEventListener("click", function (event) {
          event.preventDefault();
          const targetId = this.getAttribute("href");
          const targetElement = document.querySelector(targetId);

          if (targetElement) {
              window.scrollTo({
                  top: targetElement.offsetTop - 150, // Прокрутка с учетом отступа
                  behavior: "smooth",
              });
          }
      });
  });

  // Изменение текста кнопки dropdown и плавная прокрутка при выборе элемента из dropdown
  const dropdownButton = document.getElementById("dropdownMenuButton");
  document.querySelectorAll(".dropdown-menu .dropdown-item").forEach((item) => {
      item.addEventListener("click", function (event) {
          event.preventDefault();
          const targetId = this.getAttribute("href");
          const targetElement = document.querySelector(targetId);

          // Изменение текста кнопки dropdown на текст выбранного элемента
          dropdownButton.textContent = this.textContent;

          if (targetElement) {
              window.scrollTo({
                  top: targetElement.offsetTop - 150, // Прокрутка с учетом отступа
                  behavior: "smooth",
              });
          }
      });
  });
});
