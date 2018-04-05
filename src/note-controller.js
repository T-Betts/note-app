(function(exports){
  function NoteController(noteList = new NoteList) {
    noteList.addNote("Favourite Drink: Seltzer")
    this.noteListView = new NoteListView(noteList)
  }

  NoteController.prototype.getHTML = function () {
    var arr = this.noteListView.showNotesAsHTML()
    document.getElementById("app").innerHTML = arr.join("");
  };

  exports.NoteController = NoteController
})(this);
