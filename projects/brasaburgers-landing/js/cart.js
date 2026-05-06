let cart = [];

function addToCart(name, price) {
  cart.push({ name, price });

  updateCartCount();
  renderCart();
}

function updateCartCount() {
  document.getElementById("cart-count").innerText = cart.length;
}

function renderCart() {
  const cartItems = document.getElementById("cart-items");
  const cartTotal = document.getElementById("cart-total");

  cartItems.innerHTML = "";

  if (cart.length === 0) {
    cartItems.innerHTML = '<p class="empty-cart">Seu carrinho está vazio.</p>';
    cartTotal.innerText = "R$ 0,00";
    return;
  }

  let total = 0;

  cart.forEach((item, index) => {
    total += item.price;

    cartItems.innerHTML += `
      <div class="cart-item">
        <div>
          <strong>${item.name}</strong>
          <span>R$ ${item.price.toFixed(2).replace(".", ",")}</span>
        </div>

        <button onclick="removeFromCart(${index})">×</button>
      </div>
    `;
  });

  cartTotal.innerText = `R$ ${total.toFixed(2).replace(".", ",")}`;
}

function removeFromCart(index) {
  cart.splice(index, 1);

  updateCartCount();
  renderCart();
}

function sendToWhatsApp() {
  if (cart.length === 0) {
    alert("Seu carrinho está vazio!");
    return;
  }

  let message = "🍔 *NOVO PEDIDO - BURGER HOUSE* %0A%0A";

  let total = 0;

  cart.forEach((item, index) => {
    message += `${index + 1}. ${item.name} - R$ ${item.price.toFixed(2).replace(".", ",")}%0A`;
    total += item.price;
  });

  message += `%0A💰 *Total: R$ ${total.toFixed(2).replace(".", ",")}*`;
  message += `%0A%0A📍 Nome: `;
  message += `%0A🏠 Endereço: `;
  message += `%0A💳 Pagamento: `;

  const phone = "5588981610898";

  const url = `https://wa.me/${phone}?text=${message}`;

  window.open(url, "_blank");
}

function toggleCart() {
  const cart = document.getElementById("cart-dropdown");
  cart.classList.toggle("active");
}

cart = [];
updateCartCount();
renderCart();