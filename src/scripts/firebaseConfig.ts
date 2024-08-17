// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getFirestore, collection, getDocs } from "firebase/firestore/lite";
import { getAuth, createUserWithEmailAndPassword } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries
// Follow this pattern to import other Firebase services
// import { } from 'firebase/<service>';
import { RequestErrorMessage } from "./../../node_modules/undici-types/diagnostics-channel.d";

const firebaseConfig = {
  apiKey: "AIzaSyCHv52ZsnzbxlEhuc4ZaoUK2fqrvaYB4tg",
  authDomain: "shop-app-db-44520.firebaseapp.com",
  projectId: "shop-app-db-44520",
  storageBucket: "shop-app-db-44520.appspot.com",
  messagingSenderId: "122094970480",
  appId: "1:122094970480:web:da3e36da129ae3204036b5",
};

// Initialize Firebase
export const app = initializeApp(firebaseConfig);
// const db = getFirestore(app);
const auth = getAuth(app);

const signupForm = document.querySelector<HTMLFormElement>("#signup-form");
const loginForm = document.querySelector<HTMLFormElement>("#login-form");

signupForm?.addEventListener("submit", (e) => {
  e.preventDefault();
  const email = signupForm["signup-email"].value;
  const password = signupForm["signup-password"].value;

  createUserWithEmailAndPassword(auth, email, password)
    .then((res) => {
      console.log(res.user);
      const modal = document.querySelector<HTMLDivElement>("#signup-modal");
      modal?.classList.remove("active");
      signupForm["signup-email"].value = "";
      signupForm["signup-password"].value = "";
    })
    .catch((error) => {
      const errCode = error.code;

      console.log(errCode);
    });
});

loginForm?.addEventListener("submit", (e) => {
  e.preventDefault();
  const email = loginForm["login-email"].value;
  const password = loginForm["login-password"].value;

  console.log(email, password);
});
