// Quest 101 - Nesting For Loops

function multiplyAll(arr) {
  let product = 1;
  // Only change code below this line
  for (let i = 0; i < arr.length; i++) {
    for (let j = 0; j < arr[i].length; j++) {
      product = product * arr[i][j];
  }
}
  // Only change code above this line
  return product;
}

multiplyAll([[1, 2], [3, 4], [5, 6, 7]]);

// Quest 102 - Iterate with JavaScript Do...While Loops

// Setup
const myArray = [];
let i = 10;

// Only change code below this line

do {
  myArray.push(i);
  i++;
} while (i <5);

// Quest 103 - Replace Loops Using Recursion

function sum(arr, n) {
    // Only change code below this line
      if(n <= 0) {
        return 0;
      } else {
        return sum(arr, n - 1) + arr[n - 1];
      }
    // Only change code above this line
}