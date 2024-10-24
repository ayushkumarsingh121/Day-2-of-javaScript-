let arr = [
  [1, 2, 3],
  [4, 5, 6],
  [7, 8, 9]
];

let product = 1;

arr.forEach((subArray) => {
  subArray.forEach((num) => {
    if (num % 2 === 0) {
      product *= num;
    }
  });
});

console.log(product); 