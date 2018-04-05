function testThatGetHTMLUpdatesAppElement() {
  nc = new NoteController
  nc.getHTML()
  assert.toEqual(document.getElementById("app").innerHTML === "Favourite Drink: Seltzer")
};

testThatGetHTMLUpdatesAppElement();
