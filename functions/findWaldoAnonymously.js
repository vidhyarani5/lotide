// Refactor the function findWaldo to use the forEach() method instead of a for loop.
const findWaldo = function(names, found) {
  names.forEach((name,index) => {
      if (name === "Waldo") {
       found(index);
    }
  });
};


findWaldo(["Alice", "Bob", "Waldo", "Winston"], function(index) {
  console.log("Waldo is located at:", index);
});