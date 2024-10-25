// 4. Print Index and Element
// Use forEach() to print each element in an array along with its index in the format "Index: [index], Value: [value]".
// Example Array: ["apple", "banana", "mango"]
// Expected Output:
// Index: 0, Value: apple  
// Index: 1, Value: banana  
// Index: 2, Value: mango  


let arr = ["apple", "banana", "mango"];
arr.forEach((ele , index)=>{
  console.log(`Index : ${index}, Value : ${ele}`)
})