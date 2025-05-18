// document.getElementById("bodyValidation").onload = function () {
//   myFunction();
// };

window.onload = function () {
  if (sessionStorage.getItem("Login") == null) {
    alert(
      "Увага! В акаунті немає інформації, буль ласка перейдіть на сторінку авторизації"
    );
  }
  var tblA95 = sessionStorage.getItem("BuyA95");
  var tblA92 = sessionStorage.getItem("BuyA92");
  var tblDies = sessionStorage.getItem("BuyDiesel");
  var tblGas = sessionStorage.getItem("BuyGas");
  var discont = sessionStorage.getItem("Discont");

  var alTxt =
    "Вхід виконано. Ваш пароль: " +
    sessionStorage.getItem("Password") +
    ". Ваша пошта: " +
    sessionStorage.getItem("Email") +
    ". Ваш логін: " +
    sessionStorage.getItem("Login");

  var tblA95Price = parseInt(tblA95) * 49.4;
  tblA95Price = Math.floor(tblA95Price * 100) / 100;

  var tblA92Price = parseInt(tblA92) * 47.9;
  tblA92Price = Math.floor(tblA92Price * 100) / 100;

  var tblDiesPrice = parseInt(tblDies) * 53.8;
  tblDiesPrice = Math.floor(tblDiesPrice * 100) / 100;

  var tblGasPrice = parseInt(tblGas) * 28.4;
  tblGasPrice = Math.floor(tblGasPrice * 100) / 100;

  var mail = sessionStorage.getItem("Email");
  var password = sessionStorage.getItem("Password");
  var login = sessionStorage.getItem("Login");

  document.getElementById("mailPersCab").value = mail;
  document.getElementById("passwordPersCab").value = password;
  document.getElementById("loginPersCab").value = login;

  document.getElementById("discont").innerHTML = "Знижка: " + discont + "%";

  //   document.getElementById("Text123").innerHTML = alTxt;
  document.getElementById("tblA95").innerHTML = tblA95;
  document.getElementById("tblA92").innerHTML = tblA92;
  document.getElementById("tblDies").innerHTML = tblDies;
  document.getElementById("tblGas").innerHTML = tblGas;

  document.getElementById("tblA95Price").innerHTML = tblA95Price;
  document.getElementById("tblA92Price").innerHTML = tblA92Price;
  document.getElementById("tblDiesPrice").innerHTML = tblDiesPrice;
  document.getElementById("tblGasPrice").innerHTML = tblGasPrice;
};

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
var mail = document.querySelector("#mailPersCab");
var password = document.querySelector("#passwordPersCab");

var SaveCabinetBut = document.querySelector("#saveCabinetBut");
var ExitCabinetBut = document.querySelector("#exitCabinetBut");

function UpdateData() {
  if (password.value != null && password.value.length >= 6) {
    if (mail.value != null && mail.value != "") {
      update(ref(db, "Користувачі АЗС/" + sessionStorage.getItem("Login")), {
        Email: mail.value,
        Password: password.value,
      }).catch((error) => {
        alert(error);
      });

      alert("Успішно");
      sessionStorage.setItem("Email", mail.value);
      sessionStorage.setItem("Password", password.value);
    } else {
      alert('Упс, ви маєте заповнити поле "Пошта"');
    }
  } else {
    alert("Упс, пароль містить меньше 6 символів!");
  }
}

function ExitData() {
  sessionStorage.clear();
}

SaveCabinetBut.addEventListener("click", UpdateData);
ExitCabinetBut.addEventListener("click", ExitData);
