import { initializeApp } from "https://www.gstatic.com/firebasejs/9.12.1/firebase-app.js";
import { getAuth, createUserWithEmailAndPassword } from "https://www.gstatic.com/firebasejs/9.12.1/firebase-auth.js";
import { getDatabase, ref, set } from "https://www.gstatic.com/firebasejs/9.12.1/firebase-database.js";

// Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyDQ9oYExUZ580AJ_HUbnZ0C6qot24F3yE4",
  authDomain: "firstproj-536ff.firebaseapp.com",
  databaseURL: "https://firstproj-536ff-default-rtdb.firebaseio.com",
  projectId: "firstproj-536ff",
  storageBucket: "firstproj-536ff.appspot.com",
  messagingSenderId: "812751731917",
  appId: "1:812751731917:web:2e215c1562146bed7c7d84",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const auth = getAuth(app);
const db = getDatabase(app);

// DOM elements
const nameField = document.querySelector('#name');
const emailField = document.querySelector('#email');
const passwordField = document.querySelector('#password');
const password2Field = document.querySelector('#password2');
const registerButton = document.querySelector('#registerBut');
const alertText = document.getElementById('alertText');

// Validate username (A-Z, a-z, 0-9)
function isValidName(username) {
  return /^[a-zA-Z0-9]+$/.test(username);
}

// Show message in modal
function showAlert(message) {
  if (alertText) alertText.innerText = message;
}

// Registration handler
registerButton.addEventListener('click', async () => {
  const name = nameField.value.trim();
  const email = emailField.value.trim();
  const pass = passwordField.value;
  const pass2 = password2Field.value;

  // Client-side validation
  if (!name || !email || !pass || !pass2) {
    return showAlert('Усі пыфоля обов'язкові.');
  }
  if (!isValidName(name)) {
    return showAlert('Лоыфгін має містити лише A-Z, a-z, 0-9.');
  }
  if (pass !== pass2 || pass.length < 6) {
    return showAlert('Паролі не співпадають або містять менше 6 символів.');
  }

  try {
    // Create user with Firebase Auth
    const userCredential = await createUserWithEmailAndPassword(auth, email, pass);
    const user = userCredential.user;

    // Save additional profile data
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
  } catch (error) {
    showAlert(error.message);
  }
});
