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
document.getElementById('faqSelect').addEventListener('change', function() {
  const sectionId = this.value;
  if (sectionId && sectionId !== "#") {
      // Прокрутка к элементу с указанным ID
      document.querySelector(sectionId).scrollIntoView({ behavior: 'smooth' });
  }
});
// ============================================================================================
document.addEventListener("DOMContentLoaded", function () {
  // Плавный скролл при клике на элементы меню
  document.querySelectorAll(".bottom-nav-items li a").forEach((anchor) => {
      anchor.addEventListener("click", function (event) {
          event.preventDefault();
          const targetId = this.getAttribute("href");
          const targetElement = document.querySelector(targetId);

          if (targetElement) {
              window.scrollTo({
                  top: targetElement.offsetTop - 150,
                  behavior: "smooth",
              });
          }
      });
  });

  // Плавный скролл при выборе элемента из выпадающего списка
  document.getElementById("faqSelect").addEventListener("change", function () {
      const targetId = this.value;
      if (targetId && targetId !== "#") {
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