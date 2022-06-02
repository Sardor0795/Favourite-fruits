const elDarkModeToggle = document.querySelector(".dark-mode-toggle");
const elCircle = document.querySelector(".circle");
const elHeaderText = document.querySelector(".header-text");

elDarkModeToggle.addEventListener("click", function () {
  elCircle.classList.toggle("move");
  document.body.classList.toggle("dark-mode");
  if (elHeaderText.textContent === "Dark mode") {
    elHeaderText.textContent = "Light mode";
  } else {
    elHeaderText.textContent = "Dark mode";
  }
});
