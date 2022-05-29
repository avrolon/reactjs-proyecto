import { initializeApp } from "firebase/app";

const firebaseConfig = {
  apiKey: "AIzaSyCEZpRXxchkngSeJ0q_C7gApHTQebzEGPI",
  authDomain: "ecommerce-cnctecnologia.firebaseapp.com",
  projectId: "ecommerce-cnctecnologia",
  storageBucket: "ecommerce-cnctecnologia.appspot.com",
  messagingSenderId: "662380299556",
  appId: "1:662380299556:web:a881d5b2706907f9a01fb1",
};

const app = initializeApp(firebaseConfig);

export default function getFirestoreApp() {
  return app;
}
