import { initializeApp } from "https://www.gstatic.com/firebasejs/12.9.0/firebase-app.js";
import { getAuth, createUserWithEmailAndPassword }
from "https://www.gstatic.com/firebasejs/12.9.0/firebase-auth.js";
import { firebaseConfig } from "./env.js";

const app = initializeApp(firebaseConfig);
const auth = getAuth(app);

window.register = function(event) {

  event.preventDefault(); // page reload stop

  const email = document.getElementById("email").value;
  const password = document.getElementById("password").value;

  createUserWithEmailAndPassword(auth, email, password)
  .then(() => {
    alert("Registered Successfully ✅");
    window.location.href = "login.html";
  })
  .catch((error) => {
    alert(error.message);
  });

}