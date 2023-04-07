const assertObjectsEqual = function(actual, expected) {
  var isEqual = false;
  const keys1 = Object.keys(actual);
  const keys2 = Object.keys(expected);
  if (keys1.length !== keys2.length) {
    isEqual = false;
  } else {
    for (let key of keys1) {
      if (actual[key] === expected[key]) {
        isEqual =  true;
      } else {
          isEqual = false;
          break;
      }
    }
  }
  if (isEqual) {
    console.log('✅✅✅ Assertion Passed: --> "' + expected + '" === "' + actual + '"');
  } else {
    console.log('🛑🛑🛑 Assertion Failed: --> "' + expected + '" !== "' + actual + '"');
  }
};

const eqObjects = function(object1, object2) {
  const keys1 = Object.keys(object1);
  const keys2 = Object.keys(object2);
  if (keys1.length !== keys2.length) {
    return false;
  }
  for (let key of keys1) {
    if (object1[key] !== object2[key]) {
      return false;
    }
  }
  return true;
};

assertObjectsEqual({ a: '1', b: 2 },{ b: 2, a: '1' });
assertObjectsEqual({ a: '1', b: 2 },{ b: 2, a: '1', c: 3 });