const order = [];
const formatter = new Intl.NumberFormat("es-PY");

const orderList = document.querySelector("#orderList");
const orderTotal = document.querySelector("#orderTotal");
const sendOrderButton = document.querySelector("#sendOrder");

function formatPrice(value) {
  return `Gs. ${formatter.format(value)}`;
}

function addDish(day, name, price) {
  const existingDish = order.find((item) => item.day === day && item.name === name);

  if (existingDish) {
    existingDish.quantity += 1;
  } else {
    order.push({ day, name, price, quantity: 1 });
  }

  renderOrder();
}

function removeDish(day, name) {
  const dishIndex = order.findIndex((item) => item.day === day && item.name === name);

  if (dishIndex === -1) {
    return;
  }

  order[dishIndex].quantity -= 1;

  if (order[dishIndex].quantity === 0) {
    order.splice(dishIndex, 1);
  }

  renderOrder();
}

function renderOrder() {
  orderList.innerHTML = "";

  if (order.length === 0) {
    orderList.innerHTML = '<p class="empty-message">Todavia no agregaste platos.</p>';
  }

  order.forEach((item) => {
    const orderItem = document.createElement("div");
    orderItem.className = "order-item";
    orderItem.innerHTML = `
      <div>
        <strong>${item.name}</strong>
        <small>${item.day}</small>
        <span>${item.quantity} x ${formatPrice(item.price)}</span>
      </div>
      <button type="button" aria-label="Quitar ${item.name}">-</button>
    `;

    orderItem.querySelector("button").addEventListener("click", () => {
      removeDish(item.day, item.name);
    });

    orderList.appendChild(orderItem);
  });

  const total = order.reduce((sum, item) => sum + item.price * item.quantity, 0);
  orderTotal.textContent = formatPrice(total);
}

function confirmOrder() {
  const name = document.querySelector("#customerName").value.trim();

  if (order.length === 0) {
    alert("Primero agrega al menos un plato.");
    return;
  }

  if (!name) {
    alert("Escribi tu nombre para confirmar el pedido.");
    return;
  }

  alert(`Pedido confirmado para ${name}. Tu carrito tiene ${order.length} tipo(s) de comida.`);
}

document.querySelectorAll(".dish-card").forEach((card) => {
  const button = card.querySelector("button");
  const day = card.dataset.day;
  const name = card.dataset.name;
  const price = Number(card.dataset.price);

  button.addEventListener("click", () => {
    addDish(day, name, price);
  });
});

sendOrderButton.addEventListener("click", confirmOrder);
