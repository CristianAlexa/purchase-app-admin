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
const loginBtn = document.querySelector<HTMLButtonElement>("#login-btn");
const signupModal = document.querySelector<HTMLDivElement>("#signup-modal");
const loginModal = document.querySelector<HTMLDivElement>("#login-modal");

signupBtn?.addEventListener("click", () => {
  console.log("click");
  signupModal?.classList.add("active");
});

loginBtn?.addEventListener("click", () => {
  console.log("click");
  loginModal?.classList.add("active");
});
