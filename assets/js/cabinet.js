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

