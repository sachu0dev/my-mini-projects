// ****** SELECT ITEMS **********
const alert = document.querySelector('.alert');
const form = document.querySelector('.grocery-form');
const grocery = document.getElementById('grocery');
const submiteBtn = document.querySelector('.grocery-btn');
const container = document.querySelector('.grocery-container');
const list = document.querySelector('.grocery-list');
const clearBtn = document.querySelector('.clear-btn');

// edit option
let editElement ;
let editFlag = false;
let editId = '';

// ****** EVENT LISTENERS **********
// submite form
form.addEventListener('submit', addItem);

// ****** FUNCTIONS **********
function addItem(e){
  e.preventDefault();
  const value = grocery.value;
  const id = new Date().getTime().toString();
  if(value && !editFlag){
    const element = document.createElement('article');
    // add class
    element.classList.add('grocery-item');
    // add id 
    const attr  = document.createAttribute('data-id');
    attr.value = id;
    element.setAttributeNode(attr);
    element.innerHTML = ` <p class="title">${value}</p>
    <div class="btn-container">
      <button type="button" class="edit-btn">
        <i class="fas fa-edit"></i>
      </button>
      <button type="button" class="delete-btn">
        <i class="fas fa-trash"></i>
      </button>
    </div>`;
    // append child
    list.appendChild(element);
    // display alert
    displayAlert('Item added','success');
    // show container
    container.classList.add('show-container');
    // clear input
    grocery.value = '';
    // add to loacal storage
    addToLocalStorage(id,value);
    // set back to default
    setBackToDefault();
  }else if(value && editFlag){
    console.log('editing');
  }else {
    displayAlert('Please enter a value', 'danger');
  }
}
// display allret
function displayAlert(text,action){
  alert.textContent = text;
  alert.classList.add(`alert-${action}`);
  
  // remove alert after 1 seconds
  setTimeout(()=>{
    alert.textContent = '';
    alert.classList.remove(`alert-${action}`);
  },1000);
}
//  set back to default
function setBackToDefault(){
  console.log('set back to default');
}
// ****** LOCAL STORAGE **********
function addToLocalStorage(id,value){
  console.log('adding to local storage');
}
// ****** SETUP ITEMS **********
