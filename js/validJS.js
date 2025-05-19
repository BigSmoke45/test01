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
const db  = getDatabase(app);

window.addEventListener('DOMContentLoaded', () => {
  const nameField     = document.querySelector('#name');
  const passwordField = document.querySelector('#password');
  const findBtn       = document.querySelector('#find');
  const okBtn         = document.querySelector('#okbut');
  const alertText     = document.getElementById('alertText');
  const modalEl       = document.getElementById('staticBackdrop');
  const bsModal       = new bootstrap.Modal(modalEl);
  let loginSuccess = false;

  function showAlert(msg) {
    alertText.innerText = msg;
    bsModal.show();
  }

  findBtn.addEventListener('click', async e => {
    e.preventDefault();
    const input = nameField.value.trim();
    const pass  = passwordField.value;
    if (!input || !pass)
      return showAlert('Вкажіть логін (або email) та пароль.');

    try {
      let email, userData;

      if (input.includes('@')) {
        // Вход по email
        email = input;
        await signInWithEmailAndPassword(auth, email, pass);

        const snapAll = await get(ref(db, 'Користувачі АЗС'));
        if (snapAll.exists()) {
          snapAll.forEach(s => {
            if (s.val().Email === email) {
              userData = s.val();
            }
          });
        }
        if (!userData) return showAlert('Профіль для цього email не знайдено');
      } else {
        // Вход по логину
        const snap = await get(child(ref(db), `Користувачі АЗС/${input}`));
        if (!snap.exists()) return showAlert('Користувача не знайдено');
        userData = snap.val();
        email = userData.Email;
        await signInWithEmailAndPassword(auth, email, pass);
      }

      // Сохраняем в sessionStorage
      Object.keys(userData).forEach(k => {
        sessionStorage.setItem(k, userData[k]);
      });

      showAlert('Вхід виконано успішно');
      loginSuccess = true;
    } catch (err) {
      console.error(err);
      showAlert('Помилка авторизації: ' + err.message);
    }
  });

  okBtn.addEventListener('click', () => {
    if (loginSuccess) {
      window.open('personal_cabinet.html', '_self');
    }
  });
});

