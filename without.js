function without(actual, expected) {
   var subset = [];
  for (var key in actual) {
    if (actual[key] !== expected[key]) {
      subset.push(actual[key]);
    }
  }  
  return subset;
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
  }}

  console.log(without([1, 2, 3], [1]));
  console.log(without(["1", "2", "3"], [1, 2, "3"]));

const words = ["hello", "world", "lighthouse"];
without(words, ["lighthouse"]);
assertArraysEqual(words, ["hello", "world", "lighthouse"]);