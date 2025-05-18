// Функция для переключения категорий
function showCategory(categoryId) {
  // Убираем активные классы у всех категорий и кнопок
  document.querySelectorAll(".category-section").forEach((section) => {
    section.classList.remove("active");
  });
  document.querySelectorAll(".switch-btn").forEach((button) => {
    button.classList.remove("active");
  });

  // Добавляем активный класс выбранной категории и кнопке
  document.getElementById(categoryId).classList.add("active");
  event.target.classList.add("active");
}

document.addEventListener("DOMContentLoaded", () => {
  const cartItemsContainer = document.getElementById("cart-items");
  let cart = []; // Массив для хранения товаров в корзине

  // Функция добавления товара в корзину
  function addToCart(id, name, price) {
    const existingItem = cart.find((item) => item.id === id);

    if (existingItem) {
      existingItem.quantity += 1;
    } else {
      cart.push({ id, name, price: parseFloat(price), quantity: 1 });
    }

    renderCart();
  }

  // Функция отображения корзины
  function renderCart() {
    cartItemsContainer.innerHTML = "";

    if (cart.length === 0) {
      cartItemsContainer.innerHTML = "<p>Ваша корзина порожня.</p>";
      return;
    }

    cart.forEach((item, index) => {
      const cartItem = document.createElement("div");
      cartItem.classList.add("cart-item");

      cartItem.innerHTML = `
        <span class="item-name">${item.name}</span>
        <span class="item-price">₴${(item.price * item.quantity).toFixed(
          2
        )}</span>
        <div>
          <input
            type="number"
            class="item-quantity"
            min="1"
            value="${item.quantity}"
            data-index="${index}"
          />
          <button class="remove-item" data-index="${index}">Видалити</button>
        </div>
      `;

      cartItemsContainer.appendChild(cartItem);
    });

    // Обновляем события для изменения количества и удаления
    attachCartEvents();
  }

  // Функция для привязки событий к элементам корзины
  function attachCartEvents() {
    const quantityInputs = document.querySelectorAll(".item-quantity");
    const removeButtons = document.querySelectorAll(".remove-item");

    quantityInputs.forEach((input) => {
      input.addEventListener("change", (e) => {
        const index = e.target.dataset.index;
        const newQuantity = parseInt(e.target.value);

        if (newQuantity > 0) {
          cart[index].quantity = newQuantity;
          renderCart();
        }
      });
    });

    removeButtons.forEach((button) => {
      button.addEventListener("click", (e) => {
        const index = e.target.dataset.index;
        cart.splice(index, 1);
        renderCart();
      });
    });
  }

  // Открытие корзины (кнопка "Оформити замовлення")
  window.openCheckout = function () {
    if (cart.length === 0) {
      alert("Корзина порожня! Додайте товари, щоб оформити замовлення.");
      return;
    }

    console.log("Ваше замовлення:", cart);
    alert("Ваше замовлення відправлено. Дякуємо за покупку!");
    cart = []; // Очищаем корзину
    renderCart();
  };

  // Навешиваем события на кнопки "Купити"
  document.querySelectorAll(".buy-btn").forEach((button) => {
    button.addEventListener("click", () => {
      const id = button.dataset.id;
      const name = button.dataset.name;
      const price = button.dataset.price;
      addToCart(id, name, price);
    });
  });
});
