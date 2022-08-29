const checkbox = document.getElementById("drop-icon");
const content = document.querySelector(".dropdown-content");
const icon = document.querySelector(".dropdown-label");

// Funçao para apresentar a descrição da newsletter quando aumentar o tamanho da tela
window.addEventListener("resize", function () {
  if (this.window.innerWidth > 768) {
    content.style.display = "block";
  }
});

// Função para abrir e fechar o dropdown da newsletter
checkbox.onclick = function () {
  if (window.innerWidth <= 768) {
    if (this.checked) {
      content.style.display = "block";
      icon.style.rotate = "180deg";
    } else {
      content.style.display = "none";
      icon.style.rotate = "0deg";
    }
  }
};
