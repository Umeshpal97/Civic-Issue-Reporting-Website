import { initializeApp } from "https://www.gstatic.com/firebasejs/12.9.0/firebase-app.js";
import { getFirestore, collection, addDoc } from "https://www.gstatic.com/firebasejs/12.9.0/firebase-firestore.js";
import { getAuth } from "https://www.gstatic.com/firebasejs/12.9.0/firebase-auth.js";
import { firebaseConfig } from "./env.js";

const app = initializeApp(firebaseConfig);
const db = getFirestore(app);
const auth = getAuth(app);

console.log("Current User:",auth.currentuser);

if (auth.currentuser) {
  console.log("Login User Email:",auth.currentuser.email);
} else {
  console.log("User Not Login");
}

window.submitComplaint = async function() {
  const name = document.getElementById("name").value;
  const mobile = document.getElementById("mobile").value;
  const title = document.getElementById("title").value;
  const category = document.getElementById("category").value;
  const description = document.getElementById("description").value;
  const location = document.getElementById("location").value;

  try {
    await addDoc(collection(db, "complaints"), {
      name: name,
      mobile: mobile,
      title: title,
      category: category,
      description: description,
      location: location,
      status: "Pending",
      date: new Date()
    });

    document.getElementById("msg").innerHTML = "Report issue successfully ✅";

    // Clear form after submit
    document.getElementById("name").value = "";
    document.getElementById("mobile").value = "";
    document.getElementById("title").value = "";
    document.getElementById("category").value = "";
    document.getElementById("description").value = "";
    document.getElementById("location").value = "";
    document.getElementById("image").value = "";

  } catch (error) {
    alert("Error: " + error.message);
  }
}