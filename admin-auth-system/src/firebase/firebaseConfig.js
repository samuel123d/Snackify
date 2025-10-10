import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
import { getFirestore } from "firebase/firestore";

// Configuração do Firebase
const firebaseConfig = {
  apiKey: "AIzaSyBXUsCsHpebP8-S1gUFvqx1dyvJ5878M9g",
  authDomain: "snackify-bec06.firebaseapp.com",
  projectId: "snackify-bec06",
  storageBucket: "snackify-bec06.firebasestorage.app",
  messagingSenderId: "452200530393",
  appId: "1:452200530393:web:af3e09bae8735f2b2199c8",
  measurementId: "G-NMXJ9S4V8L"
};

// Inicializar Firebase
const app = initializeApp(firebaseConfig);
const auth = getAuth(app); // Serviço de autenticação
const db = getFirestore(app); // Firestore para banco de dados

// Exportar os serviços
export { app, auth, db };