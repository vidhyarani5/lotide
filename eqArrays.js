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

module.exports = eqArrays;