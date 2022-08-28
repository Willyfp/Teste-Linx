const checkbox = document.getElementById("drop-icon");
const content = document.querySelector(".dropdown-content");
const icon = document.querySelector(".dropdown-label");

window.addEventListener("resize", function () {
  if (this.window.innerWidth > 768) {
    content.style.display = "block";
  }
});

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

renderDropdown();
