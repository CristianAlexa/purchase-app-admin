import { FirebaseApp, initializeApp } from "firebase/app";
import { getAuth, createUserWithEmailAndPassword } from "firebase/auth";
import { firebaseConfig } from "./firebaseConfig";

const app: FirebaseApp = initializeApp(firebaseConfig);
const auth = getAuth(app);

const signupForm = document.querySelector("#signup-form") as HTMLFormElement;
const loginForm = document.querySelector("#login-form") as HTMLFormElement;
const startScreen = document.querySelector(".start-screen") as HTMLDivElement;

signupForm.addEventListener("submit", (e: Event) => {
  e.preventDefault();
  const email: string = signupForm["signup-email"].value;
  const password: string = signupForm["signup-password"].value;

  createUserWithEmailAndPassword(auth, email, password)
    .then((userCredential) => {
      const user = userCredential.user;
      startScreen.innerHTML = `
      <p>Welcome</p>
        <h3>${user.email}</h3>
        <p>
          Please <button id="login-btn" class="btn btn-text">Login</button> to
          see the product list
        </p>
      `;
      const modal = document.querySelector("#signup-modal") as HTMLDivElement;
      modal.classList.remove("active");
      signupForm["signup-email"].value = "";
      signupForm["signup-password"].value = "";
    })
    .catch((error) => {
      const errCode = error.code;

      console.log(errCode);
    });
});

loginForm.addEventListener("submit", (e: Event) => {
  e.preventDefault();
  const email: string = loginForm["login-email"].value;
  const password: string = loginForm["login-password"].value;
});
