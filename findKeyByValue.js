const findKeyByValue = function(data,find) {
  let index = 0;
  const keys = Object.keys(data);
  for (let key of keys) {
    if (data[key] === find) {
      return keys[index];
    }
    index++;
  }
  return undefined;
};

const assertEqual = function(actual, expected) {
if( actual === expected)
    console.log("Assertion Passed: ["+actual+"] === ["+expected+"]");
  else 
    console.log("Assertion Failed: ["+actual+"] !== ["+expected+"]");
  
};

const bestTVShowsByGenre = { 
  sci_fi: "The Expanse",
  comedy: "Brooklyn Nine-Nine",
  drama:  "The Wire"
};

assertEqual(findKeyByValue(bestTVShowsByGenre, "The Wire"), "drama");
assertEqual(findKeyByValue(bestTVShowsByGenre, "That '70s Show"), undefined);