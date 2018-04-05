function testNoteListViewCanHandleEmptyNoteLists() {
  var noteList = new NoteList
  var noteListView = new NoteListView(noteList)
  assert.toEqual(noteListView.showNotesAsHTML() === "<ul><li><div></div></li></ul>")
};

function testNoteListViewCanHandleNoteListsWithMultipleNotes() {
  var noteList = new NoteList
  noteList.addNote("Note 1")
  noteList.addNote("Note 2")
  var noteListView = new NoteListView(noteList)
  assert.toEqual(noteListView.showNotesAsHTML().join("") === "<ul><li><div>Note 1</div></li><br><li><div>Note 2</div></li><br></ul>")
};

testNoteListViewCanHandleEmptyNoteLists();
testNoteListViewCanHandleNoteListsWithMultipleNotes();
