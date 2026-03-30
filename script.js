let cartCount = 0;
const cartDisplay = document.querySelector(".cart-count");

document.querySelectorAll(".btn-secondary").forEach(button => {
  button.addEventListener("click", () => {
    cartCount++;
    cartDisplay.textContent = cartCount;
  });
});