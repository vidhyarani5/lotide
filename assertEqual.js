// FUNCTION IMPLEMENTATION
const assertEqual = function(actual, expected) {
 
  if( actual === expected)
    return "Assertion Passed: ["+actual+"] === ["+expected+"]"
  else 
    return "Assertion failed: ["+actual+"] !== ["+expected+"]"
  
};

// TEST CODE

console.log(assertEqual("lighthouse labs", "Bootcamp"))


console.log(assertEqual(1, 1));
console.log(assertEqual(1, -1));