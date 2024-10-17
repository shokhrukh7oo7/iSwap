const togglePassword = document.querySelector("#enter-eye-password");
const passwrodField = document.querySelector("#enter-password");

togglePassword.addEventListener("click", () => {
  // change type input
  const type =
    passwrodField.getAttribute("type") === "password" ? "text" : "password";
  passwrodField.setAttribute("type", type);

  // change eye icon
  this.src =
    type === "password"
      ? "/assets/images/form/eye (2).svg"
      : "/assets/images/form/eye-open.svg";
});
