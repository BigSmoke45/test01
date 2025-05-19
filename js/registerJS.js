import { initializeApp } from "https://www.gstatic.com/firebasejs/9.12.1/firebase-app.js";
import { getAuth, createUserWithEmailAndPassword } from "https://www.gstatic.com/firebasejs/9.12.1/firebase-auth.js";
import { getDatabase, ref, set } from "https://www.gstatic.com/firebasejs/9.12.1/firebase-database.js";

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

// Ждём, пока DOM загрузится
window.addEventListener('DOMContentLoaded', () => {
  // DOM-элементы
  const nameField = document.querySelector('#name');
  const emailField = document.querySelector('#email');
  const passwordField = document.querySelector('#password');
  const password2Field = document.querySelector('#password2');
  const registerBtn = document.querySelector('#registerBut');
  const alertText = document.getElementById('alertText');
  const modalEl = document.getElementById('staticBackdrop');
  const bsModal = new bootstrap.Modal(modalEl);

  // Валидация логина
  function isValidName(username) {
    return /^[a-zA-Z0-9]+$/.test(username);
  }

  // Показываем сообщение в модальном окне
  function showAlert(message) {
    alertText.innerText = message;
    bsModal.show();
  }

  // Обработчик регистрации
  registerBtn.addEventListener('click', async (e) => {
    e.preventDefault();

    const name = nameField.value.trim();
    const email = emailField.value.trim();
    const pass = passwordField.value;
    const pass2 = password2Field.value;

    if (!name || !email || !pass || !pass2) return showAlert('Усі поля обов\'язкові.');
    if (!isValidName(name)) return showAlert('Логін лише A-Z, a-z, 0-9.');
    if (pass !== pass2 || pass.length < 6) return showAlert('Паролі не співпадають або менше 6 символів.');

    try {
      const userCredential = await createUserWithEmailAndPassword(auth, email, pass);
      const user = userCredential.user;

      // Данные профиля
      await set(ref(db, `Користувачі АЗС/${name}`), {
        UID: user.uid,
        Login: name,
        Email: email,
        BuyA95: 0,
        BuyA92: 0,
        BuyDiesel: 0,
        BuyGas: 0,
        Discont: 0
      });

      showAlert('Користувач успішно зареєстрований!');
      // очищаем поля
      nameField.value = emailField.value = passwordField.value = password2Field.value = '';
    } catch (error) {
      console.error(error);
      showAlert(error.message);
    }
  });
});

