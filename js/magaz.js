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
