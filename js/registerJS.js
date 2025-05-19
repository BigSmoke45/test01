import { initializeApp } from "https://www.gstatic.com/firebasejs/9.12.1/firebase-app.js";

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

import {
  getDatabase,
  ref,
  get,
  set,
  child,
  update,
  remove,
} from "https://www.gstatic.com/firebasejs/9.12.1/firebase-database.js";

const db = getDatabase();
var name = document.querySelector("#name");
var email = document.querySelector("#email");
var password = document.querySelector("#password");
var password2 = document.querySelector("#password2");
var registerButton = document.querySelector("#registerBut");

function InsertData() {
  var alTxt;
  const dbref = ref(db);
  get(child(dbref, "Користувачі АЗС/" + name.value))
    .then((snapshot) => {
      if (snapshot.exists() && name.value == snapshot.val().Login) {
        alTxt = "Ой, такий логін вже зареєстровано, будь ласка оберіть інший!";
        document.getElementById("alertText").innerHTML = alTxt;
      } else {
        if (
          password.value == password2.value &&
          password.value != null &&
          password.value.length >= 6
        ) {
          if (name.value != null && name.value != "") {
            if (email.value != null && email.value != "") {
              if (isValidname(name.value)) {
                set(ref(db, "Користувачі АЗС/" + name.value), {
                  Login: name.value,
                  Email: email.value,
                  Password: password.value,
                  BuyA95: 0,
                  BuyA92: 0,
                  BuyDiesel: 0,
                  BuyGas: 0,
                  Discont: 0,
                });
                alTxt = "Користувач успішно зареєстрований";
                document.getElementById("alertText").innerHTML = alTxt;
              } else {
                alTxt =
                  'Ой, ви маєте правильно заповнити поле "Логін" (лише символи A-z A-Z та 0-9)';
                document.getElementById("alertText").innerHTML = alTxt;
              }
            } else {
              alTxt = 'Ой, ви маєте заповнити поле "Пошта"';
              document.getElementById("alertText").innerHTML = alTxt;
            }
          } else {
            alTxt = "Ой, ви маєте заповнити поле Логін";
            document.getElementById("alertText").innerHTML = alTxt;
          }
        } else {
          alTxt = "Ой, пароль не співпадає або містить меньше 6 символів!";
          document.getElementById("alertText").innerHTML = alTxt;
        }
      }
    })
    .catch((error) => {
      alert(error);
    });
}

function isValidname(username) {
  return /^[a-zA-Z0-9]+$/.test(username);
}

registerButton.addEventListener("click", InsertData);
