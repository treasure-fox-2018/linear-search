'use strict'

// Release 0
console.log("Linear Search")
let linearSearch = (target, values) => {
let countTarget = 0;
  //write your code here
  for(var i = 0; i < values.length; i++){
    if(target === values[i]){
      countTarget++
    }
  }
  if(countTarget === 0){
    return countTarget - 1
  }else {
    return countTarget;
  }
}

let random_numbers = [ 6, 29, 18, 2, 72, 19, 18, 10, 37 ];

console.log(linearSearch(18, random_numbers));
// 2
console.log(linearSearch(9, random_numbers));
// -1

// Release 1
console.log("Global Linear Search")
let globalLinearSearch = (target, values) => {
  //write your code here
  let arrTarget = [];
  for(var i = 0; i < values.length; i++){
    if(target === values[i]){
      arrTarget.push(i)
    }
  }
  return arrTarget
}

let banana_arr = "banana".split("");
// ["b", "a", "n", "a", "n", "a"]
console.log(globalLinearSearch("a", banana_arr));
// [ 1, 3, 5 ]

module.exports = {
  linearSearch,
  globalLinearSearch
}
