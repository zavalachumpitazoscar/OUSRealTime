import { initializeApp } from "https://www.gstatic.com/firebasejs/12.0.0/firebase-app.js";

import {
  getFirestore,
  doc,
  setDoc
} from "https://www.gstatic.com/firebasejs/12.0.0/firebase-firestore.js";

const firebaseConfig = {
  apiKey: "AIzaSyBz9IVIpECD16fSo5Sz2jc6SZkTJHr2bk0",
  authDomain: "ous-rastreo.firebaseapp.com",
  projectId: "ous-rastreo",
  storageBucket: "ous-rastreo.firebasestorage.app",
  messagingSenderId: "606108188440",
  appId: "1:606108188440:web:0416b98a7738af947ae86d"
};

const app = initializeApp(firebaseConfig);
const db = getFirestore(app);

document.getElementById("estado").innerHTML = "Conectando...";

try {

  await setDoc(
    doc(db, "prueba", "documento1"),
    {
      mensaje: "Hola Firebase",
      fecha: new Date().toISOString()
    }
  );

  document.getElementById("estado").innerHTML =
    "FIREBASE OK";

  console.log("Documento creado");

} catch (error) {

  document.getElementById("estado").innerHTML =
    "ERROR FIREBASE";

  console.error(error);

}
