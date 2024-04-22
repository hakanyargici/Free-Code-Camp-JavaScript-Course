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

// Quest 104 - Profile Lookup

function lookUpProfile(name, prop) {
    // Only change code below this line
    for (let i = 0; i < contacts.length; i++) {
      if (contacts[i].firstName === name) {
        if (contacts[i].hasOwnProperty(prop)) {
          return contacts[i][prop];
        } else {
          return "No such property";
        }
      }
    }
    return "No such contact";
    // Only change code above this line
}

// Quest 105 - Generate Random Fractions with JavaScript

function randomFraction() {
    // Only change code below this line
    let result = 0;
    while (result === 0) {
      result = Math.random();
    }
    return result;
    // Only change code above this line
}

// Quest 106 - Generate Random Whole Numbers with JavaScript

var randomNumberBetween0and19 = Math.floor(Math.random() * 20);

function randomWholeNum() {
  // Only change code below this line.
  return Math.floor(Math.random() * 10);
}

// Quest 107 - Generate Random Whole Numbers within a Range
function randomRange(myMin, myMax) {
  if(myMin < myMax) {
    const math = Math.floor(Math.random() * (myMax - myMin + 1)) + myMin;
    if (math == myMax) {
      console.log(myMin);
      return myMax;
    } else if (math <= myMax || math >= myMin) {
      console.log(math);
      return math; 
    } else {
      console.log(myMin);
      return myMin;
    }
  }
  return 0;
}

// Quest 108 - Use The parseInt Function
function convertToInteger(str) {
  const convert = parseInt(str);
  return convert;
}

