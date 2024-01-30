import NotesAPI from './NotesAPI.js';
const colors = ['pink', "blue", "green", "yellow", "red"];
// NotesAPI.deleteNote(703830628);
// console.log(NotesAPI.getAllNotes());
const notesList = document.querySelector(".notes-preview");
const notesTitleInput = document.querySelector(".notes-title");
const notesBodyInput = document.querySelector(".notes-body");
const addNote = document.querySelector(".add-note-btn");
const saveNoteBtn = document.querySelector(".save-btn");
const deleteNoteBtn = document.querySelector(".delete-btn");
const createNote = document.querySelector(".creat-note");
const inputContainer = document.querySelector(".input-container");
const welcome = document.querySelector(".welcome-container");
const clickArow = document.querySelector(".click-arrow");
let isInedit = {
  editFlag: false,
  editId: null,
}
// event listeners
window.addEventListener('keydown', (e) => {
  if (e.ctrlKey && e.key === 's') {
    e.preventDefault();
    saveNoteBtn();
  }
});
window.addEventListener("DOMContentLoaded", showNotes);
addNote.addEventListener("click", createNewNote);
saveNoteBtn.addEventListener("click", saveNote);
deleteNoteBtn.addEventListener("click", deleteNote);
// functions
function showNotes() {
  if(NotesAPI.getAllNotes().length === 0){
    changeMain("remove");
  }
  const notes = NotesAPI.getAllNotes();
  notesList.innerHTML = "";
  notes.forEach(element => {
    notesList.innerHTML += `
    <div class="note-container ${colors[Math.floor(Math.random() * colors.length)]}" data-id="${element.id}">
      <div class="note-small-title">${element.title}</div>
      <div class="note-small-body">
        ${element.body}
      </div>
      <div class="note-small-updated">${element.updated}</div>
    </div>
    `;
  });
  const noteBoxes = document.querySelectorAll('.note-container');
  noteBoxes.forEach(noteBox => {
    noteBox.addEventListener("click", editNote);
  });
}

function saveNote() {
  changeMain("remove");
  const note = {
    title: notesTitleInput.value,
    body: notesBodyInput.value,
  };

  if (isInedit.editFlag) {
    note.id = isInedit.editId;
  }

  NotesAPI.saveNote(note);
  notesTitleInput.value = "";
  notesBodyInput.value = "";
  showNotes();
  isInedit.editFlag = false;
}


function editNote(event) {
    changeMain("add");
  const notes = NotesAPI.getAllNotes();
  const noteBox = event.currentTarget;
  const id = noteBox.dataset.id;

  notes.forEach(note => {
    if (note.id == id) {
      notesTitleInput.value = note.title;
      notesBodyInput.value = note.body;
      isInedit.editFlag = true;
      isInedit.editId = note.id;
    }
  });
}
function deleteNote() {
  changeMain("remove");
  NotesAPI.deleteNote(isInedit.editId);
  isInedit.editId = null;
  notesTitleInput.value = "";
  notesBodyInput.value = "";
  showNotes();
  isInedit.editFlag = false;
}
function createNewNote(){
  if(notesTitleInput.value === "" || notesBodyInput.value === ""){

  } else {

    saveNote();
  }
    createNote.classList.remove("show-welcome");
    welcome.classList.remove("show-welcome");
    clickArow.classList.remove("show-welcome");
    inputContainer.classList.add("show-welcome");
}

function changeMain(options) {
  if(options === "add"){
    createNote.classList.remove("show-welcome");
    welcome.classList.remove("show-welcome");
    clickArow.classList.remove("show-welcome");
    inputContainer.classList.add("show-welcome");
  } else if(options === "remove"){
    createNote.classList.add("show-welcome");
    welcome.classList.add("show-welcome");
    clickArow.classList.add("show-welcome");
    inputContainer.classList.remove("show-welcome");
  }
}