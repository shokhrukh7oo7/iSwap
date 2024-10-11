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
const closeBtn = document.getElementById("close-btn");
const overlay = document.getElementById("overlay");

// ---------------------------------------------------------
// HEADER ENTER MODAL JS START
// add classlist hidden
// const addHidden = () => {
//   enterModal.classList.add("hidden");
//   overlay.classList.add("hidden");
// };

// // remove classlist hidden
// const removeHidden = () => {
//   enterModal.classList.remove("hidden");
//   overlay.classList.remove("hidden");
// };

// showBtn.addEventListener("click", removeHidden);

// closeBtn.addEventListener("click", addHidden);

// overlay.addEventListener("click", addHidden);

// document.addEventListener("keydown", (e) => {
//   if (e.key == "Escape") {
//     addHidden();
//   }
// });
// HEADER ENTER MODAL JS END
// ---------------------------------------------------------
const addHidden = () => {
  enterModal.classList.remove("visible");
  overlay.classList.remove("visible");
  setTimeout(() => {
    enterModal.classList.add("hidden");
    overlay.classList.add("hidden");
  }, 0); // Таймер, чтобы дождаться завершения анимации
};

// Показ модального окна
const removeHidden = () => {
  enterModal.classList.remove("hidden");
  overlay.classList.remove("hidden");
  setTimeout(() => {
    enterModal.classList.add("visible");
    overlay.classList.add("visible");
  }, 10); // Небольшая задержка для корректного срабатывания анимации
};

// События
showBtn.addEventListener("click", removeHidden);

closeBtn.addEventListener("click", addHidden);

overlay.addEventListener("click", addHidden);

document.addEventListener("keydown", (e) => {
  if (e.key === "Escape") {
    addHidden();
  }
});
