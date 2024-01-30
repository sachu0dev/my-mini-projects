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

// event listeners
window.addEventListener("DOMContentLoaded", showNotes);
// addNote.addEventListener("click", createNewNote);
saveNoteBtn.addEventListener("click", saveNote);
// functions
function showNotes(){
  const notes = NotesAPI.getAllNotes();
  notesList.innerHTML = "";
  notes.forEach(element => {
    notesList.innerHTML += `
    <div class="note-container ${colors[Math.floor(Math.random() * colors.length)]} data-id="${element.id}">
      <div class="note-small-title">${element.title}</div>
      <div class="note-small-body">
        ${element.body}
      </div>
      <div class="note-small-updated">${element.updated}</div>
    </div>
    `;
    const noteBox = document.querySelector('.note-container');
    noteBox.addEventListener("click", editNote);
  });
}
function saveNote(){
  const note = {
    title: notesTitleInput.value,
    body: notesBodyInput.value,
  }
  NotesAPI.saveNote(note);
  notesTitleInput.value = "";
  notesBodyInput.value = "";
  showNotes();
}

function editNote(){
  const savedNotes = notesList.querySelectorAll(".note-container");
  const id = savedNotes.dataset.id;
  const note = {
    id,
    title: notesTitleInput.value,
    body: notesBodyInput.value,
  }
  showNotes();
}


