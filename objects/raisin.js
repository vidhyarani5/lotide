const raisinAlarm = function (cookie) {
  let result = "All good!";
  for( var val of cookie){
    if(val == "🍇")
      result = "Raisin alert!";
  }
  return result;
  // Put your solution here
};

console.log(raisinAlarm(["🍫", "🍫", "🍇", "🍫"]));
console.log(raisinAlarm(["🍫", "🍇", "🍫", "🍫", "🍇"]));
console.log(raisinAlarm(["🍫", "🍫", "🍫"]));