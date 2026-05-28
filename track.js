import { initializeApp } from "https://www.gstatic.com/firebasejs/12.9.0/firebase-app.js";
import { getFirestore, collection, query, where, getDocs } from "https://www.gstatic.com/firebasejs/12.9.0/firebase-firestore.js";
import { firebaseConfig } from "./env.js";

const app = initializeApp(firebaseConfig);
const db = getFirestore(app);

window.trackComplaint = async () => {
  try {
  const mobile = document.getElementById("mobile").value;
  const result = document.getElementById("result");

  const snap = await getDocs(
    query(collection(db, "complaints"), where("mobile", "==", mobile))
  );

  result.innerHTML = snap.empty
    ? "No complaint found!"
    : "Status: " + snap.docs[0].data().status;
} catch (error) {
  document.getElementById("result").innerHTML = error.message;
  console.error(error);
}
};

