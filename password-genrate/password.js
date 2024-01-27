const passwordShow = document.querySelector('.pasword-container');
window.addEventListener('DOMContentLoaded', showPassWord);
function showPassWord(){
  const savedPasswords = JSON.parse(localStorage.getItem('passwords')) || [];
  if(savedPasswords.length > 0){
    savedPasswords.forEach(element => {
      const name = element.name;
      const password = element.password;
      passwordShow.innerHTML += `
      <div class="col">
        <p class="name">${name}</p>
        <p class="password-value">${password}</p>
      </div>`;
    });
  } else {
    passwordShow.innerHTML = "<h3 class='no-saved-pass'>No saved passwords</h3>"
  }
}