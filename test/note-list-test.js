// is initialized with an empty array

// function testNoteListIsInstantiatedWithEmptyArray() {
//   var noteList = new NoteList
//   assert.toEqual(noteList.list === [])
// };

function testNoteListIsInstantiatedWithEmptyArray() {
  var noteList = new NoteList
  if (!Array.isArray(noteList.list) && (noteList.list).length === 0) {
    throw new Error("Not instantiated with empty array")
  }
  console.log("Test passed")
};

// has method that can add new notes to the note list

function testNoteListCanAddAndStoreNewNotes() {
  var noteList = new NoteList
  noteList.addNote("I am a new note")
  assert.toEqual(noteList.list[0].getText() === "I am a new note")
};

// has a method that can return all the notes stored in the list

function testNoteListCanReturnAllNotesItHasStoredInIt() {
  var noteList = new NoteList
  noteList.addNote("Note Number 1")
  noteList.addNote("Note Number 2")
  assert.toInclude(noteList.showAllNotes()[0].getText(), "Note Number 1")
  assert.toInclude(noteList.showAllNotes()[1].getText(), "Note Number 2")
};

testNoteListIsInstantiatedWithEmptyArray();
testNoteListCanAddAndStoreNewNotes();
testNoteListCanReturnAllNotesItHasStoredInIt();
