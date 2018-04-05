(function(exports){
  function NoteListView(noteList) {
    this.noteList = noteList
  }

  NoteListView.prototype.showNotesAsHTML = function () {
    var htmlArray = ["<ul>"]
    var notes = this.noteList.showAllNotes()
    if (notes.length === 0) {
      return "<ul><li><div></div></li></ul>"
    } else {
      for (var i = 0; i < notes.length; i++) {
        htmlArray.push("<li><div>" + this.noteList.showAllNotes()[i].getText() + "</div></li><br>")
      }
      htmlArray.push("</ul>")
      return htmlArray
    }
  };

  exports.NoteListView = NoteListView
})(this);
