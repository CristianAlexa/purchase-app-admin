// document.querySelector<HTMLDivElement>("")!.innerHTML = `
//   <div>
//     <a href="https://vitejs.dev" target="_blank">
//       <img src="" class="logo" alt="Vite logo" />
//     </a>
//     <a href="https://www.typescriptlang.org/" target="_blank">
//       <img src="" class="logo vanilla" alt="TypeScript logo" />
//     </a>
//     <h1>Vite + TypeScript</h1>
//     <div class="card">
//       <button id="counter" type="button"></button>
//     </div>
//     <p class="read-the-docs">
//       Click on the Vite and TypeScript logos to learn more
//     </p>
//   </div>
// `;

// setupCounter(document.querySelector<HTMLButtonElement>("#counter")!);

const signupBtn = document.querySelector<HTMLButtonElement>("#signup-btn");
const signupBtnLogin =
  document.querySelector<HTMLButtonElement>("#signup-btn-login");
const loginBtn = document.querySelector<HTMLButtonElement>("#login-btn");
const cancelSignupBtn =
  document.querySelector<HTMLButtonElement>("#cancel-signup-btn");
const cancelLoginBtn =
  document.querySelector<HTMLButtonElement>("#cancel-login-btn");
const signupModal = document.querySelector<HTMLDivElement>("#signup-modal");
const loginModal = document.querySelector<HTMLDivElement>("#login-modal");

signupBtn?.addEventListener("click", () => {
  signupModal?.classList.add("active");
});

loginBtn?.addEventListener("click", () => {
  loginModal?.classList.add("active");
});

cancelSignupBtn?.addEventListener("click", (e) => {
  signupModal?.classList.remove("active");
});

cancelLoginBtn?.addEventListener("click", () => {
  loginModal?.classList.remove("active");
});

signupBtnLogin?.addEventListener("click", () => {
  loginModal?.classList.remove("active");
  signupModal?.classList.add("active");
});
