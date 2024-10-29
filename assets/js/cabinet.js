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
    item.querySelector(".change-btn").addEventListener("click", () => openEditModal(item));
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

const inputs = document.querySelectorAll("input");
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
