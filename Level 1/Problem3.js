// 3.  Count how many times a "apple" element appears in an array using forEach().

let arr = ['apple', 'banana', 'apple', 'orange', 'apple', 'apple']

let count = 0;
let nArr = arr.forEach((ele, index)=>{
  ele == "apple" ? count++ : false
})
console.log(count)
