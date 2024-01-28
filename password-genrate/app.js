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
const moreBtn = document.querySelector(".advnc-opt");
const optContainer = document.querySelector('.more-opt-section');
const optChangeBtn = document.querySelector('.submit-opt');
const alert = document.querySelector('.alert');
// checbox
const lenghtInput = document.querySelector('.length-input');
const uppercaseInput = document.getElementById('uppercase');
const lowercaseInput = document.getElementById('lowercase');
const numbersInput = document.getElementById('number');
const symbolsInput = document.getElementById('symbols');
const showMyPass = document.querySelector(".show-password");
// event listeners
copyBtn.addEventListener('click', copyPassword);
genBtn.addEventListener('click', generatePassword);
saveBtn.addEventListener('click', () => savePassword(output.value));
moreBtn.addEventListener('click', showOpt);
optChangeBtn.addEventListener('click', setPreference);
window.addEventListener('DOMContentLoaded', ()=>{
  if(JSON.parse(localStorage.getItem('passwords')) !== null){
    showMyPass.classList.add('show-alert');
  }
});


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
      let allChars = [];
      if (defaultMethod.uppercase) {
          allChars = allChars.concat(upchars);
      }
      if (defaultMethod.lowercase) {
          allChars = allChars.concat(chars);
      }
      if (defaultMethod.numbers) {
          allChars = allChars.concat(numbers);
      }
      if (defaultMethod.symbols) {
          allChars = allChars.concat(signs);
      }
      for (let i = 0; i < defaultMethod.lengthOfPass; i++) {
          password += allChars[Math.floor(Math.random() * allChars.length)];
      }
  }
  output.value = password;
}


// function to copy password
function copyPassword() {
  output.select();
  document.execCommand('copy');
}

function convertToUppercase(charArray) {
  return charArray.map(char => char.toUpperCase());
}
function savePassword(password) {
  // get existing passwords
  const existingPasswords = JSON.parse(localStorage.getItem('passwords')) || [];
  let idpass = {
    name: prompt('Enter a name for your password'),
    password: password
  }
  // add new password to existing passwords
  existingPasswords.push(idpass);
  localStorage.setItem('passwords', JSON.stringify(existingPasswords));
  if(JSON.parse(localStorage.getItem('passwords')) !== null){
    showMyPass.classList.add('show-alert');
  }
  displayAlert('Password saved!');
}
function showOpt() {
  optContainer.classList.toggle('show-container');
}
function setPreference(){
  if(lenghtInput.value !== '' && lenghtInput.value < 20 && lenghtInput.value > 4){
    defaultMethod.lengthOfPass = parseInt(lenghtInput.value);
  }
    defaultMethod.uppercase = uppercaseInput.checked;
    defaultMethod.lowercase = lowercaseInput.checked;
    defaultMethod.numbers = numbersInput.checked;
    defaultMethod.symbols = symbolsInput.checked;
    displayAlert('Preferences updated!');
}
function displayAlert(message) {
  alert.textContent = message;
  alert.classList.add('show-alert');
  setTimeout(() => alert.classList.remove('show-alert'), 1500);
}
