(function(exports) {
  function NoteList() {
    this.list = []
  };

  NoteList.prototype.addNote = function(text) {
    this.list.push(new Note(text))
  };

  NoteList.prototype.showAllNotes = function () {
    return this.list
  };

  exports.NoteList = NoteList
})(this);
