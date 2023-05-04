let menu = document.querySelector("#menu");
let menuBar = document.querySelector("#menu-bar");

menuBar.addEventListener("click", desplegar);

function desplegar() {
  menu.classList.toggle("menu-toggle");
}
