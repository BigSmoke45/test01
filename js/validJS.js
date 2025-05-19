import { initializeApp } from "https://www.gstatic.com/firebasejs/9.12.1/firebase-app.js";
import { getAuth, signInWithEmailAndPassword } from "https://www.gstatic.com/firebasejs/9.12.1/firebase-auth.js";
import { getDatabase, ref, child, get } from "https://www.gstatic.com/firebasejs/9.12.1/firebase-database.js";

// Инициализация Firebase
const firebaseConfig = {
  apiKey: "AIzaSyDQ9oYExUZ580AJ_HUbnZ0C6qot24F3yE4",
  authDomain: "firstproj-536ff.firebaseapp.com",
  databaseURL: "https://firstproj-536ff-default-rtdb.firebaseio.com",
  projectId: "firstproj-536ff",
  storageBucket: "firstproj-536ff.appspot.com",
  messagingSenderId: "812751731917",
  appId: "1:812751731917:web:2e215c156214bed7c7d84",
};

const app = initializeApp(firebaseConfig);
const auth = getAuth(app);
const db = getDatabase(app);

window.addEventListener('DOMContentLoaded', () => {
  // DOM элементы
  const nameField = document.querySelector('#name');
  const passwordField = document.querySelector('#password');
  const findBtn = document.querySelector('#find');
  const okBtn = document.querySelector('#okbut');
  const alertText = document.getElementById('alertText');
  const modalEl = document.getElementById('staticBackdrop');
  const bsModal = new bootstrap.Modal(modalEl);
  let loginSuccess = false;

  function showAlert(message) {
    alertText.innerText = message;
    bsModal.show();
  }

  // Обработчик входа
  findBtn.addEventListener('click', async (e) => {
    e.preventDefault();
    const name = nameField.value.trim();
    const pass = passwordField.value;

    if (!name || !pass) return showAlert('Вкажіть логін та пароль.');

    try {
      // Получаем данные пользователя
      const snapshot = await get(child(ref(db), `Користувачі АЗС/${name}`));
      if (!snapshot.exists()) return showAlert('Користувача не знайдено');
      const userData = snapshot.val();
      const email = userData.Email;

      // Входим с email и паролем
      await signInWithEmailAndPassword(auth, email, pass);

      // Сохраняем данные в sessionStorage
      Object.keys(userData).forEach(key => {
        sessionStorage.setItem(key, userData[key]);
      });

      showAlert('Вхід виконано успішно');
      loginSuccess = true;
    } catch (error) {
      console.error(error);
      showAlert('Помилка авторизації: ' + error.message);
    }
  });

  // Перехід у кабінет
  okBtn.addEventListener('click', () => {
    if (loginSuccess) {
      window.open('personal_cabinet.html', '_self');
    } else {
      showAlert('Спочатку виконайте вхід');
    }
  });
});
