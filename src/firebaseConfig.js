// firebaseConfig.js
import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore"; // Импортируйте Firestore

const firebaseConfig = {
  apiKey: "AIzaSyBBV_nkgxUYvtprj8po6SJZfrOL8hXgITA",
  authDomain: "lesson12-7fe32.firebaseapp.com",
  projectId: "lesson12-7fe32",
  storageBucket: "lesson12-7fe32.firebasestorage.app",
  messagingSenderId: "959671889997",
  appId: "1:959671889997:web:34dbfe805778727decec04",
  measurementId: "G-36679BL5J8"
};

// Инициализация Firebase
const app = initializeApp(firebaseConfig);
const db = getFirestore(app); // Инициализация Firestore

// Экспортируйте db для использования в других частях приложения
export { db };
