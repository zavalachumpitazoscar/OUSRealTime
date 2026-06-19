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
  appId: "1:606108188440:web:0416b98a7738af947ae86d",
  measurementId: "G-22W9LPCC35"
};

const app = initializeApp(firebaseConfig);
const db = getFirestore(app);

// Por ahora un técnico fijo
const tecnico = "oscar";

navigator.geolocation.watchPosition(

async (position) => {

  const lat = position.coords.latitude;
  const lng = position.coords.longitude;

  document.getElementById("estado").innerHTML =
    "Lat: " + lat +
    "<br>Lng: " + lng;

  await setDoc(
    doc(db, "ubicaciones", tecnico),
    {
      tecnico: tecnico,
      lat: lat,
      lng: lng,
      fecha: new Date().toISOString()
    }
  );

},

(error) => {
  console.error(error);
}

);
