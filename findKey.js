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

  const findKey = function(obj, callback) {
		var key = undefined;
		for (var val in obj)
		{
      if(callback(obj[val])) {
				key = val;
        break;
      }
		}
		return key;
	};

  const data1 = {
    "Blue Hill": { stars: 1 },
    "Akaleri":   { stars: 3 },
    "noma":      { stars: 2 },
    "elBulli":   { stars: 3 },
    "Ora":       { stars: 2 },
    "Akelarre":  { stars: 3 }
  };
  const results1 = findKey(data1, x => x.stars === 2);
  console.log(results1);
 

  assertArraysEqual(results1,"noma");