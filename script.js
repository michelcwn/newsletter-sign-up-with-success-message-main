"use strict";

// elements

const signUp = document.querySelector(".sign-up-page");
const successSubscribing = document.querySelector(".success-subscribing ");
const newsletterForm = document.querySelector(".newsletter__form"); // Sélectionner le formulaire
const btnNewsletter = document.querySelector(".newsletter__button");
const btnDismiss = document.querySelector(
  ".success-subscribing__dismiss-button"
);
const input = document.getElementById("email");

// error
const errorLabel = document.querySelector(".newsletter__label--error");

// Fonction d'affichage des messages d'erreur
const displayErrorMessage = function () {
  errorLabel.classList.remove("hidden");
  input.style.color = "var(--color-bittersweet)";
  input.style.fontWeight = "700";
  input.style.border = "1px solid var(--color-bittersweet)";
  input.style.backgroundColor = "rgba(255, 106, 58, 0.1)";
};

// Fonction de basculement de la visibilité
const toggleVisibility = function () {
  signUp.classList.toggle("hidden");
  successSubscribing.classList.toggle("hidden");
};

// Fonction de validation de l'email
const isValidMail = function (email) {
  const atIndex = input.value.indexOf("@");
  return !(email === "" || atIndex === -1 || atIndex === email.length - 1);
};

newsletterForm.addEventListener("submit", function (e) {
  e.preventDefault();
  if (!isValidMail(input.value)) return displayErrorMessage();

  toggleVisibility();
});

btnDismiss.addEventListener("click", function (e) {
  e.preventDefault();

  toggleVisibility();
});
