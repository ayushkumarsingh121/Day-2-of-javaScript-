// 2. Display Names
// You have an array of names. Use forEach() to print each name with the message "Hello, [name]!".

// Example Array: ["Alice", "Bob", "Charlie"]
// Expected Output:
// Hello, Alice!  
// Hello, Bob!  
// Hello, Charlie!  

let arr = ["Alice", "Bob", "Charlie"];
arr.forEach((ele)=>{
  console.log(`Hello ${ele}!`)
})