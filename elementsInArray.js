const arr = [1 , 'two', 3,  'four', 5, 'six ' ,7 ,'eight', 9 , 'ten']
const printOnlyElements = function(array) {
  for(let element of array){
    if(typeof element === 'string'){
      console.log(element);

    }
  }
}
printonlystrings(arr);