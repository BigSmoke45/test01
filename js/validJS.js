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
var password = document.querySelector("#password");
var bool1 = false;
var findBtn = document.querySelector("#find");
var okbut = document.querySelector("#okbut");

function FindData() {
  var alTxt;
  const dbref = ref(db);

  get(child(dbref, "Користувачі АЗС/" + name.value))
    .then((snapshot) => {
      if (
        snapshot.exists() &&
        name.value == snapshot.val().Login &&
        name.value != null &&
        name.value != "" &&
        password.value == snapshot.val().Password &&
        password.value != null &&
        password.value != ""
      ) {
        sessionStorage.setItem("Login", snapshot.val().Login);
        sessionStorage.setItem("Email", snapshot.val().Email);
        sessionStorage.setItem("Password", snapshot.val().Password);
        sessionStorage.setItem("BuyA95", snapshot.val().BuyA95);
        sessionStorage.setItem("BuyA92", snapshot.val().BuyA92);
        sessionStorage.setItem("BuyDiesel", snapshot.val().BuyDiesel);
        sessionStorage.setItem("BuyGas", snapshot.val().BuyGas);
        sessionStorage.setItem("Discont", snapshot.val().Discont);
        sessionStorage.setItem("OrderSum", snapshot.val().OrderSum);
        bool1 = true;
        alTxt = "Вхід виконано.";
        document.getElementById("alertText").innerHTML = alTxt;
      } else {
        alTxt = "Нічого не знайдено!";
        document.getElementById("alertText").innerHTML = alTxt;
      }
    })
    .catch((error) => {
      alert(error);
    });
}

function OkBut() {
  if (bool1 == true) {
    window.open("personal_cabinet.html", "_self");
  }
}
findBtn.addEventListener("click", FindData);
okbut.addEventListener("click", OkBut);
