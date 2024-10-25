// 5. Check for Even or Odd
// Use forEach() to go through an array of numbers and print "Even" if a number is even and "Odd" if it’s odd.
// Example Array: [3, 6, 8, 11]
// Expected Output:
// Odd  
// Even  
// Even  
// Odd  

let arr = [3, 6, 8, 11];
arr.forEach((ele)=>{
  console.log(ele % 2 == 0 ? "Even" : "Odd")
})