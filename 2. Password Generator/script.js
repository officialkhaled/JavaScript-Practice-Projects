const lowercaseLetters = "abcdefghijklmnopqrstuvwxyz";
const uppercaseLetters = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
const numbers = "0123456789";
const symbols = "@#$%^&*()_+|}{[]:?></-=";

const lengthElement = document.getElementById("length");
const lowercaseElement = document.getElementById("lowercase");
const uppercaseElement = document.getElementById("uppercase");
const numbersElement = document.getElementById("numbers");
const symbolsElement = document.getElementById("symbols");
const generateBtn = document.getElementById("generate");
const passwordElement = document.getElementById("password");

generateBtn.addEventListener("click", function () {
  const length = lengthElement.value;
  let characters = "";
  let password = "";

  if (lowercaseElement.checked) {
    characters += lowercaseLetters;
  }

  if (uppercaseElement.checked) {
    characters += uppercaseLetters;
  }

  if (numbersElement.checked) {
    characters += numbers;
  }

  if (symbolsElement.checked) {
    characters += symbols;
  }

  for (let i = 0; i < length; i++) {
    password += characters.charAt(
      Math.floor(Math.random() * characters.length)
    );
  }

  passwordElement.value = password;
});
