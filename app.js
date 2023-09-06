const password = document.querySelector("#password");
const confirmPassword = document.querySelector("#confirm_password");
const passwordErrorMsg = document.querySelector(".error-msg");
const submitBtn = document.querySelector(".submit-btn");

password.classList.remove("error");
confirmPassword.classList.remove("error");
passwordErrorMsg.style.visibility = "hidden";

confirmPassword.addEventListener("input", checkPassword);

function checkPassword() {
  setTimeout(function () {
    if (password.value === confirmPassword.value) {
      password.classList.remove("error");
      confirmPassword.classList.remove("error");
      passwordErrorMsg.style.visibility = "hidden";
      console.log("pass matches");
    } else {
      password.classList.add("error");
      confirmPassword.classList.add("error");
      passwordErrorMsg.style.visibility = "";
      console.log("pass does not matches");
    }
  }, 1000);
}
