// password arrays
const numbers = ['0', '1', '2', '3', '4', '5', '6', '7', '8', '9'];
const chars = ['a', 'b', 'c', 'd', 'e', 'f', 'g', 'h', 'i', 'j', 'k', 'l', 'm', 'n', 'o', 'p', 'q', 'r', 's', 't', 'u', 'v', 'w', 'x', 'y', 'z'];
const signs = ['{', '}', '(', ')', '[', ']', '#', ':', ';', ',', '.', '?', '!', '@', '#', '$', '%', '^', '&', '*'];
const upchars = convertToUppercase(chars);

// query selections
const output = document.getElementById('password');
const copyBtn = document.querySelector('.copy-btn');
const genBtn = document.getElementById('generate');
const saveBtn = document.getElementById('save-btn');

// event listeners
copyBtn.addEventListener('click', copyPassword);
genBtn.addEventListener('click', generatePassword);
saveBtn.addEventListener('click', savePassword(password));

// default methods
let isDefault = true;
let defaultMethod = {
  lengthOfPass: 10,
  uppercase: true,
  lowercase: true,
  numbers: true,
  symbols: true,
}

// function to generate password
function generatePassword() {
  let password = "";

  if (isDefault) {
    const allChars = []
      .concat(defaultMethod.uppercase ? upchars : [])
      .concat(defaultMethod.lowercase ? chars : [])
      .concat(defaultMethod.numbers ? numbers : [])
      .concat(defaultMethod.symbols ? signs : []);

    for (let i = 0; i < defaultMethod.lengthOfPass; i++) {
      password += allChars[Math.floor(Math.random() * allChars.length)];
    }
  }
  output.value = password;
  saveBtn.addEventListener('click', savePassword(password));
}

// function to copy password
function copyPassword() {
  output.select();
  document.execCommand('copy');
}

function convertToUppercase(charArray) {
  return charArray.map(char => char.toUpperCase());
}
function savePassword(newPassword) {
  const existingPasswords = JSON.parse(localStorage.getItem('passwords')) || [];

  existingPasswords.push(newPassword);

  localStorage.setItem('passwords', JSON.stringify(existingPasswords));

  console.log('Password saved successfully!');
}