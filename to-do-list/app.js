// input selections
const alertBox = document.querySelector('.right')
const inputText = document.getElementById('input-text');
const submitBtn = document.getElementById('submit');
const inputBox = document.querySelector('.input-box');
// tasks container
const listContainer = document.querySelector('.list-container');
const tasksContainer = document.querySelector('.task-list');
// clear tasks btn
const alert = document.querySelector('.alert');
const clearBtn = document.querySelector('.clear-btn');


// edit option
let editElement ;
let editFlag = false;
let editID = '';

// ****** EVENT LISTENERS **********
inputBox.addEventListener('submit', addItem);
// clear items
clearBtn.addEventListener('click', clearItems);
// load items from local storage
window.addEventListener('DOMContentLoaded', setupItems);



//  ****** FUNCTIONS **********
function addItem(e){
  e.preventDefault();
  const value = inputText.value;
  const id = new Date().getTime().toString();
  if(value && !editFlag){
    createListItems(id,value);
    // display alert
    displayAlert('Item added','success');
    // show container
    listContainer.classList.add('show-container'); 
    // add to local storage
    addToLocalStorage(id,value);
    // set back to default
    setBackToDefault();
  } else if(value && editFlag) {
    editElement.innerHTML = value;
    displayAlert('Item edited','success');
    // edit local storage
    editLocalStorage(editID,value);
    setBackToDefault();
  } else {
    displayAlert('Please enter a value', 'danger');
  }
}


// display alret
function displayAlert(text, action){
  alert
  alert.textContent = text;
  alertBox.classList.add(`alert-${action}`);
  
  // remove alert after 1 seconds
  setTimeout(()=>{
    alert.textContent = '';
    alertBox.classList.remove(`alert-${action}`);
  }
  ,1000);
}

// clear items
// clear items
function clearItems(){
  const items = document.querySelectorAll('.list-item');

  if(items.length > 0){  // Corrected from items.lenght to items.length
    items.forEach((item)=>{
      tasksContainer.removeChild(item);
    });
  }
  listContainer.classList.remove('show-container');
  displayAlert('All items cleared','danger');
  localStorage.removeItem('list');
  setBackToDefault();
}

// delete item
function deleteItem(e){
  const element = e.currentTarget.parentElement.parentElement;
  const id = element.dataset.id;
  tasksContainer.removeChild(element);
  if (tasksContainer.children.length === 0) {
    listContainer.classList.remove('show-container');
  }
  displayAlert('Item deleted','danger');
  setBackToDefault();
  removeFromLocalStorage(id);
}
// edit item
function editItem(e){
  const element = e.currentTarget.parentElement.parentElement;
  // set edit item
  editElement = e.currentTarget.parentElement.previousElementSibling;
  // set form value
  inputText.value = editElement.textContent;
  editFlag = true;
  editID = element.dataset.id;
  submitBtn.innerHTML = 'update';
}
//  set back to default
function setBackToDefault(){
  inputText.value = '';
  editFlag = false;
  editID = '';
  submitBtn.innerHTML = 'add';
  
}
// ****** LOCAL STORAGE **********
function addToLocalStorage(id,value){
  const grocery = {id,value};
  let items = getLocalStorage();
  items.push(grocery);
  localStorage.setItem('list',JSON.stringify(items));
}
function removeFromLocalStorage(id){
  let items = getLocalStorage();
  console.log(getLocalStorage());
  items = items.filter((item)=>{
    if(item.id!== id){
      return item;
    }
  });
  localStorage.setItem('list',JSON.stringify(items));
}
function editLocalStorage(id, value) {
  let items = getLocalStorage();
  items = items.map((item) => {
    if (item.id === id) {
      item.value = value;
    }
    return item;
  });
  localStorage.setItem('list', JSON.stringify(items));
}
function getLocalStorage(){
  return localStorage.getItem('list')?JSON.parse(localStorage.getItem('list')):[];
}
// ****** SETUP ITEMS **********
function setupItems(){
  let items = getLocalStorage();
  if(items.length > 0){
    items.forEach((item)=>{
      createListItems(item.id,item.value);
    });
    listContainer.classList.add('show-container');
  }
}

function createListItems(id, value) {
  const element = document.createElement('article');
  element.classList.add('list-item');
  const attr = document.createAttribute('data-id');
  attr.value = id;
  element.setAttributeNode(attr);
  element.innerHTML = `<label class="check-container">
    <input checked="checked" type="checkbox" />
    <div class="checkmark"></div>
  </label>
  <p class="title">${value}</p>
  <div class="btn-container">
    <button type="button" class="edit-btn">
      <span class="material-symbols-outlined"> edit </span>
    </button>
    <button type="button" class="delete-btn">
      <span class="material-symbols-outlined"> close </span>
    </button>
  </div>`;

  // edit / delete btn within the created element
  const deleteBtn = element.querySelector('.delete-btn');
  const editBtn = element.querySelector('.edit-btn');

  deleteBtn.addEventListener('click', deleteItem);
  editBtn.addEventListener('click', editItem);

  // append child
  tasksContainer.appendChild(element);
  
}
