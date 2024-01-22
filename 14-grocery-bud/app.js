// ****** SELECT ITEMS **********
const alert = document.querySelector('.alert');
const form = document.querySelector('.grocery-form');
const grocery = document.getElementById('grocery');
const submiteBtn = document.querySelector('.submit-btn');
const container = document.querySelector('.grocery-container');
const list = document.querySelector('.grocery-list');
const clearBtn = document.querySelector('.clear-btn');

// edit option
let editElement ;
let editFlag = false;
let editID = '';

// ****** EVENT LISTENERS **********
// submite form
form.addEventListener('submit', addItem);
// clear items
clearBtn.addEventListener('click', clearItems);
// load items from local storage
window.addEventListener('DOMContentLoaded', setupItems);
// ****** FUNCTIONS **********
function addItem(e){
  e.preventDefault();
  const value = grocery.value;
  const id = new Date().getTime().toString();
  if(value && !editFlag){
    createListItems(id,value);
    // display alert
    displayAlert('Item added','success');
    // show container
    container.classList.add('show-container');
    // add to loacal storage
    addToLocalStorage(id,value);
    // set back to default
    setBackToDefault();
  }else if(value && editFlag){
    editElement.innerHTML = value;
    displayAlert('Item edited','success');
    // edit loacal storage
    editLoacalStorage(editID,value);
    setBackToDefault();
  }else {
    displayAlert('Please enter a value', 'danger');
  }
}
// display alret
function displayAlert(text,action){
  alert.textContent = text;
  alert.classList.add(`alert-${action}`);
  
  // remove alert after 1 seconds
  setTimeout(()=>{
    alert.textContent = '';
    alert.classList.remove(`alert-${action}`);
  },1000);
}
// clear items
function clearItems(){
  const items = document.querySelectorAll('.grocery-item');

  if(items.length > 0){
    items.forEach((item)=>{
      list.removeChild(item);
    });
  }
  container.classList.remove('show-container');
  displayAlert('All items cleared','danger');
  localStorage.removeItem('list');
  setBackToDefault();
}
// delete item
function deleteItem(e){
  const element = e.currentTarget.parentElement.parentElement;
  const id = element.dataset.id;
  list.removeChild(element);
  if(list.children.length === 0){
    container.classList.remove('show-container');
  }
  displayAlert('Item deleted','danger');
  setBackToDefault();
  // remove from loacal storage
  removeFromLocalStorage(id);
}

// edit item
function editItem(e){
  const element = e.currentTarget.parentElement.parentElement;
  // set edit item
  editElement = e.currentTarget.parentElement.previousElementSibling;
  // set form value
  grocery.value = editElement.textContent;
  editFlag = true;
  editID = element.dataset.id;
  submiteBtn.textContent = 'update';

}
//  set back to default
function setBackToDefault(){
  grocery.value = '';
  editFlag = false;
  editID = '';
  submiteBtn.textContent = 'submit';
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
  items = items.filter((item)=>{
    if(item.id!== id){
      return item;
    }
  });
  localStorage.setItem('list',JSON.stringify(items));
}
function editLoacalStorage(id,value){
  let items = getLocalStorage();
  items = items.map((item)=>{
    if(item.id === id){
      item.value = value;
    }
    return item;
  });
  localStorage.setItem('list',JSON.stringify(items));
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
  container.classList.add('show-container');
 }
}

function createListItems(id,value){
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
    // edit / delete btn
    const deleteBtn = element.querySelector('.delete-btn');
    const editBtn = element.querySelector('.edit-btn');
    deleteBtn.addEventListener('click', deleteItem);
    editBtn.addEventListener('click', editItem);
    // append child
    list.appendChild(element);
}