const botaoMenu = document.querySelector(".botao-menu");
const sidebarMenu = document.querySelector(".navbar");
const botaoFechar = document.querySelector(".menu-fechar");
const overlay = document.querySelector(".overlay");
const body = document.querySelector("body");

botaoMenu.addEventListener("click", () => {
  sidebarMenu.classList.toggle("ativo");
  overlay.classList.toggle("taligado");
  body.classList.toggle("no-scroll");
});

botaoFechar.addEventListener("click", () => {
  sidebarMenu.classList.toggle("ativo");
  overlay.classList.toggle("taligado");
  body.classList.toggle("no-scroll");
});
