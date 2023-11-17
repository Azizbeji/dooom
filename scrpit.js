document.addEventListener("DOMContentLoaded", function () {
  const productsContainer = document.getElementById("products");
  const cartItemsContainer = document.getElementById("cart-items");

  // Display products
  const products = document.querySelectorAll(".product-card");

  products.forEach((product) => {
    const productId = product.getAttribute("data-id");
    const addToCartButton = product.querySelector(".cart-btn");
    addToCartButton.addEventListener("click", () => addToCart(productId));
  });

  // Add to cart function
  window.addToCart = function (productId) {
    const productCard = document.querySelector(
      `.product-card[data-id="${productId}"]`
    );
    const productName = productCard.querySelector(".product-name").innerText;
    const productPrice = productCard.querySelector(".product-price").innerText;

    const cartItem = document.createElement("li");
    cartItem.classList.add("cart-item");
    cartItem.innerHTML = `
            <span>${productName}</span>
            <span>${productPrice}</span>
            <button onclick="removeFromCart(${productId})">Remove</button>
        `;
    cartItemsContainer.appendChild(cartItem);
  };

  // Remove from cart function
  window.removeFromCart = function (productId) {
    const cartItemToRemove = document.querySelector(
      `#cart-items [onclick="removeFromCart(${productId})"]`
    );
    if (cartItemToRemove) {
      cartItemsContainer.removeChild(cartItemToRemove.parentElement);
    }
  };
});
// chnage the color of the heart
let icons = document.getElementsByClassName("fa-heart");
for (let i = 0; i < icons.length; i++) {
  icons[i].addEventListener("click", function () {
    icons[i].classList.toggle("text-danger");
  });
}
// the plus icon
let a1 = document.getElementsByClassName("a+");
console.log(a1);
let plus = document.getElementsByClassName("fa-plus");
console.log(plus);
let count = 0;
for (let i = 0; i < plus.length; i++) {
  plus[i].addEventListener("click", function () {
    count = count + 1;
    a1[i].textContent = Number(a1[i].textContent) + 1;
    console.log(count);
  });
}
// the moins icon
let a2 = document.getElementsByClassName("a+");
console.log(a2);
let moins = document.getElementsByClassName("fa-minus");
console.log(plus);
 count = 0;
for (let j = 0; j < moins.length; j--) {
  moins[j].addEventListener("click", function () {
    count = count - 1;
    a1[j].textContent = Number(a1[j].textContent);
    console.log(count);
  });
}