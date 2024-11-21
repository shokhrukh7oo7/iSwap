// CABINET HEADER AND SIDEBAR JS START
const drpButtons = document.querySelectorAll(".link-dropdown .nav-drp-button");
drpButtons.forEach((drpButton) => {
  drpButton.addEventListener("click", (e) => {
    e.stopPropagation();
    const arrow = drpButton.querySelector(".arrow");
    const drpContent = drpButton.nextElementSibling;
    const height = drpContent.getAttribute("data-height");

    if (drpContent.classList.contains("show")) {
      drpContent.classList.remove("show");
      drpContent.style.maxHeight = "0";
      arrow.style.transform = "rotate(0deg)";
      setTimeout(() => {
        drpContent.style.display = "none";
      }, 500);
    } else {
      drpContent.classList.add("show");
      drpContent.style.display = "block";
      arrow.style.transform = "rotate(180deg)";
      setTimeout(() => {
        drpContent.style.maxHeight = height + "px";
      }, 100);
    }
  });
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
// CABINET HEADER AND SIDEBAR JS END

// ================================================================================================

// CABINET LOCATION CUSTOM JS START
const locShowBtn = document.getElementById("addBtn");
const locModal = document.getElementById("location-modal");
const locCloseBtn = document.getElementById("location-close-btbn");
const locOverlay = document.getElementById("location-overlay");
const saveBtn = document.getElementById("save-btn");
const cabinetBodyWrapper = document.querySelector(".cabinet-body-wrapper");
const locationNotFound = document.querySelector(".location-not-found");
const cabinetBody = document.querySelector(".cabinet-body-wrapper");

let currentEditItem = null;

// Function to check for .item presence and update location-not-found visibility
function updateLocationNotFound() {
  const hasItems = cabinetBodyWrapper.querySelectorAll(".item").length > 0;
  locationNotFound.style.display = hasItems ? "none" : "block";
  cabinetBody.style.marginTop = hasItems ? "30px" : "0px";
}

updateLocationNotFound();

// Open and close modal
const addLocHidden = () => {
  locModal.classList.add("location-hidden");
  locOverlay.classList.add("location-hidden");
};
const removeLocHidden = () => {
  locModal.classList.remove("location-hidden");
  locOverlay.classList.remove("location-hidden");
};

locShowBtn.addEventListener("click", () => {
  currentEditItem = null; // Reset current edit
  document.getElementById("viewRegion").value = "";
  document.getElementById("viewCity").value = "";
  document.getElementById("viewAddress").value = "";
  removeLocHidden();
});

locCloseBtn.addEventListener("click", addLocHidden);
locOverlay.addEventListener("click", addLocHidden);
document.addEventListener("keydown", (e) => {
  if (e.key == "Escape") addLocHidden();
});

// Save button logic
saveBtn.addEventListener("click", (e) => {
  e.preventDefault();

  const region = document.getElementById("viewRegion").value;
  const city = document.getElementById("viewCity").value;
  const address = document.getElementById("viewAddress").value;

  if (currentEditItem) {
    // Edit existing item
    const spans = currentEditItem.querySelectorAll("span");
    spans[0].textContent = region;
    spans[1].textContent = city;
    spans[2].textContent = address;
  } else {
    // Create new item
    const item = document.createElement("div");
    item.classList.add("item");
    item.innerHTML = `
      <div class="item-info">
        <span>${region}</span>
        <span>${city}</span>
        <span>${address}</span>
      </div>
      <div class="item-delete-change-wrapper">
        <button class="btn change-btn">
          <img src="/assets/images/cabinet-menu/Pencil.svg" alt="image">
        </button>
        <button class="btn delete-btn">
          <img src="/assets/images/cabinet-menu/Korzina.svg" alt="image">
        </button>
      </div>
    `;

    cabinetBodyWrapper.appendChild(item);

    // Add event listeners for change and delete buttons
    item
      .querySelector(".change-btn")
      .addEventListener("click", () => openEditModal(item));
    item.querySelector(".delete-btn").addEventListener("click", () => {
      item.remove();
      updateLocationNotFound(); // Update status after deletion
    });
  }

  updateLocationNotFound(); // Update status after adding
  addLocHidden();
});

// Function to open edit modal
function openEditModal(item) {
  currentEditItem = item;
  const spans = item.querySelectorAll("span");

  document.getElementById("viewRegion").value = spans[0].textContent;
  document.getElementById("viewCity").value = spans[1].textContent;
  document.getElementById("viewAddress").value = spans[2].textContent;

  removeLocHidden();
}
// CABINET LOCATION CUSTOM JS END

// CABINET SETTINGS CUSTOM JS START
const viewSection = document.getElementById("viewSection");
const editSection = document.getElementById("editSection");
const editButton = document.getElementById("editButton");
const cancelButton = document.getElementById("cancelButton");
const saveButton = document.getElementById("saveButton");

// Элементы для показа в режиме просмотра
const viewFullName = document.getElementById("viewFullName");
const viewSex = document.getElementById("viewSex");
const viewTel = document.getElementById("viewTel");
const viewBirthday = document.getElementById("viewBirthday");

// Элементы для редактирования
const editFullName = document.getElementById("editFullName");
const editSex = document.getElementById("editSex");
const editTel = document.getElementById("editTel");
const editBirthday = document.getElementById("editBirthday");

const inputs = document.querySelectorAll("#editSection input");
// Переход в режим редактирования
editButton.addEventListener("click", () => {
  inputs.forEach((input) => {
    input.style.border = "1px solid red";
    input.classList.add("red-border");
  });
  editFullName.value = viewFullName.value;
  editSex.value = viewSex.value;
  editTel.value = viewTel.value;
  editBirthday.value = viewBirthday.value;

  viewSection.style.display = "none";
  editSection.style.display = "block";
});

// Отмена редактирования
cancelButton.addEventListener("click", () => {
  viewSection.style.display = "block";
  editSection.style.display = "none";
  inputs.forEach((input) => {
    input.style.border = "none";
  });
});

// Сохранение изменений
saveButton.addEventListener("click", () => {
  Swal.fire({
    position: "center",
    title: "Muvaffaqiyatli saqlandi!",
    showConfirmButton: false,
    imageUrl: "/assets/images/form/check.png", // Укажите путь к вашей иконке
    imageWidth: 120, // Задайте ширину изображения
    imageHeight: 120, // Задайте высоту изображения
    timer: 1231500,
  });
  viewFullName.value = editFullName.value;
  viewSex.value = editSex.value;
  viewTel.value = editTel.value;
  viewBirthday.value = editBirthday.value;

  viewSection.style.display = "block";
  editSection.style.display = "none";
  inputs.forEach((input) => {
    input.style.border = "none";
  });
});
// CABINET SETTINGS CUSTOM JS END

// TRANSFER MONEY TO A PERSONAL CARD JS START
const transferMoneyBtn = document.getElementById("get-money-btn");
const sectionTable = document.querySelector(".get-money-body-wrapper");
const formTransfer = document.querySelector(".transfer-money-to-card-wrapper");
const confirmBtn = document.getElementById("get-confirm-btn");

transferMoneyBtn.addEventListener("click", () => {
  sectionTable.style.display = "none";
  formTransfer.style.display = "block";
});
// TRANSFER MONEY TO A PERSONAL CARD JS END

// REPORT SECTION FILTER MODAL JS START
const filtrOpenBtn = document.getElementById("cabinet-report-filter-btn");
const filtrModal = document.querySelector(".cabinet-report-filtr-modal");
const filtrCloseBtn = document.querySelectorAll(".filtr-btn");
const filtrNextBtn = document.getElementById("filter-next-btn");
const filtrModalBody = document.querySelector(
  ".cabinet-report-filtr-modal-body"
);

const filtrNotFound = document.querySelector(
  ".cabinet-report-filtr-modal-not-found"
);
const filtrBackBtn = document.getElementById("filter-back-btn");

filtrNextBtn.addEventListener("click", () => {
  filtrNotFound.style.display = "flex";
  filtrModalBody.style.display = "none";
});
filtrBackBtn.addEventListener("click", () => {
  filtrNotFound.style.display = "none";
  filtrModalBody.style.display = "block";
});

// ==============================================
filtrOpenBtn.addEventListener("click", () => {
  locOverlay.classList.remove("location-hidden");
  filtrModal.style.transform = "translateX(0%)";
});

filtrCloseBtn.forEach((i) => {
  i.addEventListener("click", () => {
    locOverlay.classList.add("location-hidden");
    filtrModal.style.transform = "translateX(100%)";
  });
});
locOverlay.addEventListener("click", () => {
  filtrModal.style.transform = "translateX(100%)";
});

document.addEventListener("keydown", (e) => {
  if (e.key == "Escape") {
    filtrModal.style.transform = "translateX(100%)";
  }
});

// REPORT SECTION FILTER MODAL JS END

// ==============================================
const mainBodyContentToggler = document.querySelector(
  "#main-body-content-toggler"
);
const leftMenu = document.querySelector(".left-menu");

function navDropdownHandler(e) {
  e.stopPropagation();

  leftMenu.classList.toggle("as-dropdown");
  if (leftMenu.classList.contains("as-dropdown")) {
    leftMenu.style.display = "block";
    leftMenu.style.maxHeight = "100%";
    leftMenu.style.overflow = "auto";
    setTimeout(() => {
      leftMenu.style.maxHeight = "100%";
      leftMenu.style.height = "120vh";
    }, 100);
    setTimeout(() => {
      leftMenu.style.overflow = "auto";
    }, 500);
  } else {
    leftMenu.style.maxHeight = "0";
    leftMenu.style.overflow = "hidden";
    leftMenu.style.display = "none";
  }
}
if (window.innerWidth < 992) {
  mainBodyContentToggler.addEventListener("click", navDropdownHandler);
} else {
  mainBodyContentToggler.removeEventListener("click", navDropdownHandler);
}
// ====================== Filtr modal ============================

// FILTR DOWNLOAD - SHARE - PRINT JS START
const shareBtn = document.getElementById("share-btn");

async function shareHandler() {
  navigator.share({
    title: "From Shokhrukh",
    text: "This is a message from Shokhrukh",
    url: "https://t.me/shokhrukh274/",
  });
}

shareBtn.addEventListener("click", shareHandler);
// FILTR DOWNLOAD - SHARE - PRINT JS END

// FILTR DOWNLOAD - RECEIPT START
function downloadAsPDF() {
  const preview = document.getElementById("table");
  const otp = {
    margin: 1,
    fileName: "document.pdf",
    image: {
      type: "jpeg",
      quality: 1,
    },
    html2canvas: {
      scale: 2,
      useCORS: true,
      logging: true,
      allowTaint: true,
    },
    jsPDF: {
      unit: "in",
      format: "letter",
      orientation: "portrait",
    },
  };
  if (preview) {
    setTimeout(() => {
      html2pdf()
        .set(otp)
        .from(preview)
        .save()
        .catch((err) => console.error("Error generating PDF:", err));
    }, 1000);
  } else {
    alert("Файл не найдет");
  }
}
const downloadBtn = document.getElementById("download-btn");
if (downloadBtn) {
  downloadBtn.onclick = downloadAsPDF;
} else {
  alert("Файл не найдет");
}
// FILTR DOWNLOAD - RECEIPT END

// ====================== report ============================
const cabinetReportWrapper = document.querySelector(
  ".cabinet-report-table-wrapper"
);
const reportWrapper = document.querySelectorAll(".report-table-item");
const reportTable = document.getElementById("report-table-info");
const enterSum = document.querySelector(".enter-sum-wrapper");

reportWrapper.forEach((item) => {
  item.addEventListener("click", () => {
    reportTable.style.display = "flex";
    cabinetReportWrapper.style.display = "none;";
  });
});

reportTable.addEventListener("click", () => {
  enterSum.style.display = "block";
});
