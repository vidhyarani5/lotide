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

function assertArraysEqual(actual, expected) {
  var index = 0;
  for (var key in actual) {
    if (actual[key] !== expected[key]) {
      index++;
  }}  
  if (index === 0) {
    console.log('Assertion Passed --> Expected "' + expected + '", and send "' + actual + '"');
  } else {
    console.log('Assertion Failed --> Expected "' + expected + '", but send "' + actual + '"');
}};

const middle = function(numArray) {
  var middleVal = Math.floor(numArray.length / 2);
  if(numArray.length % 2 === 0) {
    return (numArray[middleVal - 1]  + "," + numArray[middleVal]);
  } else {
    return (numArray[middleVal]);
  }
};

console.log(middle([1, 2, 3]));
console.log(middle([1, 2, 3, 4, 5,6]));
console.log(eqArrays(middle([1, 2, 3, 4]), [2, 3]))
assertArraysEqual(middle([1, 2, 3]), [2]);
