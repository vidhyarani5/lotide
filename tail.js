// FUNCTION IMPLEMENTATION
const assertEqual = function(actual, expected) {
 
  if( actual.toString() === expected.toString())
    return "Assertion Passed: ["+actual+"] === ["+expected+"]"
  else 
    return "Assertion failed: ["+actual+"] !== ["+expected+"]"
  
};

const tail = function(arr1) {
  let arr2 = [];
  for(let i=1; i<arr1.length; i++)
    arr2.push(arr1[i]);
  return arr2;
};
// TEST CODE

console.log(assertEqual(tail([5,6,7]), [6,7]));

console.log(assertEqual(tail(["Hello", "Lighthouse", "Labs"]), ["Lighthouse", "Labs"]));