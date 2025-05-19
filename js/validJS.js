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
    const input = nameField.value.trim();
    const pass = passwordField.value;

    if (!input || !pass) return showAlert('Вкажіть логін (або email) та пароль.');

    try {
      let email, userData;
      // Если введён email
      if (input.includes('@')) {
        email = input;
        // Попытаться войти
        await signInWithEmailAndPassword(auth, email, pass);
        // Получить все профили и найти по Email
        const snapshotAll = await get(ref(db, 'Користувачі АЗС'));
        if (snapshotAll.exists()) {
          snapshotAll.forEach(childSnap => {
            const val = childSnap.val();
            if (val.Email === email) {
              userData = val;
            }
          });
        }
        if (!userData) return showAlert('Профіль для цього email не знайдено');
      } else {
        // Если введён логин
        const snapshot = await get(child(ref(db), `Користувачі АЗС/${input}`));
        if (!snapshot.exists()) return showAlert('Користувача не знайдено');
        userData = snapshot.val();
        email = userData.Email;
        // Входим с email и паролем
        await signInWithEmailAndPassword(auth, email, pass);
      }

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
