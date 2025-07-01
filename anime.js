const darkBTN = document.getElementById("darkMode");
const lightBTN = document.getElementById("lightMode");
let theme = "light";

function handelLightMode(){
  document.documentElement.style.setProperty("--background-color", "#ffffff");
  document.documentElement.style.setProperty("--font-color", "#000000");
  document.documentElement.style.setProperty("--div-color", "#ffffff");
  theme = "light";
  updateButtons();
}

function handelDarkMode(){
  document.documentElement.style.setProperty("--background-color", "#444444");
  document.documentElement.style.setProperty("--font-color", "#ffffff");
  document.documentElement.style.setProperty("--div-color", "#444444");
  theme = "dark";
  updateButtons();
}

function updateButtons() {
  if (theme === "light") {
    darkBTN.style.display = "block";
    lightBTN.style.display = "none";
  } else {
    darkBTN.style.display = "none";
    lightBTN.style.display = "block";
  }
}

darkBTN.addEventListener("click", handelDarkMode);
lightBTN.addEventListener("click", handelLightMode);

updateButtons();
