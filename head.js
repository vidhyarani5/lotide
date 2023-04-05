// FUNCTION IMPLEMENTATION
const assertEqual = function(actual, expected) {
 
  if( actual === expected)
    return "Assertion Passed: ["+actual+"] === ["+expected+"]"
  else 
    return "Assertion failed: ["+actual+"] !== ["+expected+"]"
  
};

const head = function(arr1) {
  return arr1[0];
};
// TEST CODE

console.log(assertEqual(head([5,6,7]), 5));

console.log(assertEqual(head(["Hello", "Lighthouse", "Labs"]), "Hello"));