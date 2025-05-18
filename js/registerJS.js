import { initializeApp } from "https://www.gstatic.com/firebasejs/9.12.1/firebase-app.js";
import {
  getAuth,
  GoogleAuthProvider,
  signInWithPopup,
} from "https://www.gstatic.com/firebasejs/9.12.1/firebase-auth.js";
import {
  getDatabase,
  ref,
  set,
} from "https://www.gstatic.com/firebasejs/9.12.1/firebase-database.js";

// Инициализация Firebase
const firebaseConfig = {
  apiKey: "AIzaSyDQ9oYExUZ580AJ_HUbnZ0C6qot24F3yE4",
  authDomain: "firstproj-536ff.firebaseapp.com",
  databaseURL: "https://firstproj-536ff-default-rtdb.firebaseio.com",
  projectId: "firstproj-536ff",
  storageBucket: "firstproj-536ff.appspot.com",
  messagingSenderId: "812751731917",
  appId: "1:812751731917:web:2e215c1562146bed7c7d84",
};

const app = initializeApp(firebaseConfig);
const auth = getAuth();
const provider = new GoogleAuthProvider();
var password = document.querySelector("#password");
// Получаем ссылку на кнопку входа через Google
var googleLoginButton = document.querySelector("#googleLogin");

googleLoginButton.addEventListener("click", () => {
  // Входим через Google
  signInWithPopup(auth, provider)
    .then((result) => {
      // Получаем информацию о пользователе
      const user = result.user;
      console.log(user);

      // Записываем данные в Firebase Database
      const db = getDatabase();
      const userRef = ref(db, "Користувачі АЗС/" + user.displayName);

      set(userRef, {
        Login: user.displayName,
        Email: user.email,
        Password: password.value,
        DataBuy1: 0,
        TypeGas1: 0,
        liters1: 0,
        Sum1: 0,
        BonusInTable1: 0,
        Bonus1: 0,
        Bonus2: 0,
        Discont: 0,
      })
        .then(() => {
          console.log("Данные пользователя записаны в базу данных");
        })
        .catch((error) => {
          console.error("Ошибка записи данных:", error);
        });
    })
    .catch((error) => {
      const errorCode = error.code;
      const errorMessage = error.message;
      console.error("Ошибка аутентификации:", errorCode, errorMessage);
      alert("Ошибка входа: " + errorMessage);
    });
});
