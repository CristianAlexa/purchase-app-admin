const signupBtn = document.querySelector<HTMLButtonElement>("#signup-btn");
const loginBtn = document.querySelector<HTMLButtonElement>("#login-btn");
const signupBtnLogin =
  document.querySelector<HTMLButtonElement>("#signup-btn-login");
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

cancelSignupBtn?.addEventListener("click", () => {
  const signupForm = document.querySelector<HTMLFormElement>("#signup-form");
  signupForm["signup-email"].value = "";
  signupForm["signup-password"].value = "";
  signupModal?.classList.remove("active");
});

cancelLoginBtn?.addEventListener("click", () => {
  loginModal?.classList.remove("active");
});

signupBtnLogin?.addEventListener("click", () => {
  loginModal?.classList.remove("active");
  signupModal?.classList.add("active");
});
