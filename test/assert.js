var assert = {
  toEqual: function(assertionToCheck) {
    if (!assertionToCheck) {
      throw new Error("Test failed:" + assertionToCheck + " is not equal")
    } else {
      console.log("Test passed")
    }
  },

  toInclude: function(collection, element) {
    if (!collection.includes(element)) {
      throw new Error("Collection does not contain element")
    }
    console.log("Test passed")
  }
};
