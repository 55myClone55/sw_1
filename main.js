//function
let items = ['hello', 'world', 23, '23', null]

function filterBy(arr, type){
  return  arr.filter(item => typeof item !== type)
} 

console.log(filterBy(items, "string"))