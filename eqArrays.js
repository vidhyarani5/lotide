const eqArrays = function (firstArray,secondArray)
{
  for (var key in firstArray)
  {
    if(firstArray[key] === secondArray[key]) 
      return true;
    else 
      return false;
  }
};

const assertEqual = function(actual, expected) {
 
  if( actual === expected)
    console.log("Assertion Passed: ["+actual+"] === ["+expected+"]");
  else 
    console.log("Assertion Failed: ["+actual+"] !== ["+expected+"]");
  
};

console.log(eqArrays([1, 2, 3], [1, 2, 3])); // => true
console.log(eqArrays([1, 2, 3], [3, 2, 1])); // => false

console.log(eqArrays(["1", "2", "3"], ["1", "2", "3"])); // => true
console.log(eqArrays(["1", "2", "3"], ["1", "2", 3])) // => false
