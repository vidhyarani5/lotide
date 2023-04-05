const eqArrays = function (firstArray,secondArray)
{
  let result = false;
  for (var key in firstArray)
  {
    if(firstArray[key] === secondArray[key]) 
      result = true;
    else 
      result = false;
  }
  return result;
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

assertEqual(eqArrays([1, 2, 3], [1, 2, 3]));
