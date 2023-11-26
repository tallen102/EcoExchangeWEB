// Header Scroll
let header = document.querySelector("header");

window.addEventListener("scroll", () => {
  header.classList.toggle("shadow", window.scrollY > 0);
});

function sell() {
  // Redirect to the "sell" page
  window.location.href = 'sell.html';
}

function signup() {
  // Redirect to the "signup" page
  window.location.href = 'signup.html';
}

function login() {
  // Redirect to the "login" page
  window.location.href = 'login.html';
}