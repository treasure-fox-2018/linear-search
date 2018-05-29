'use strict'

// Release 0
console.log("Linear Search")
let linearSearch = (target, values) => {
  //write your code here
  var index;
  for (var a = 0 ; a < values.length; a++) {
    if (target === values[a]) {
      return index = a
    } //else if ()
  }
  if (index === undefined) {
    return -1
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
  var containIndex = []
  for (var a = 0; a < values.length; a++) {
    if(target === values[a]) {
      containIndex.push(a)
    }
  }
  return containIndex
}

let banana_arr = "banana".split("");
// ["b", "a", "n", "a", "n", "a"]
console.log(globalLinearSearch("a", banana_arr));
// [ 1, 3, 5 ]

module.exports = {
  linearSearch,
  globalLinearSearch
}
