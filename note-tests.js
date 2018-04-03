(function(exports) {
  function testNoteCanBeInstantiatedWithGivenText() {
    var note = new Note("This is a new note")
    if (note.text !== "This is a new note") {
      throw new Error("Text Error")
    } else {
      console.log("Test Passed")
    };
  };

  testNoteCanBeInstantiatedWithGivenText();
})(this);
