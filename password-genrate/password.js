const passwordShow = document.querySelector('.pasword-container');
const clearBtn = document.querySelector('.remove-btn');
// event listeners
window.addEventListener('DOMContentLoaded', showPassWord);
clearBtn.addEventListener('click', deleteLocalStorage);
function showPassWord(){
  if(JSON.parse(localStorage.getItem('passwords')) !== null){
    clearBtn.classList.add('show-delete');
  } else {
    clearBtn.classList.remove('show-delete');
  }
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

function deleteLocalStorage(){
  localStorage.clear();
  clearBtn.classList.remove('show-delete');
  window.location.reload();
}