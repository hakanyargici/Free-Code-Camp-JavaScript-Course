// Quest 51 - Global Scope and Functions

function fun1() {
  }
  // Only change code above this line
  let myGlobal = 10;
  let oopsGlobal = 5;
  
  function fun2() {
    let output = "";
    if (typeof myGlobal != "undefined") {
      output += "myGlobal: " + myGlobal;
    }
    if (typeof oopsGlobal != "undefined") {
      output += " oopsGlobal: " + oopsGlobal;
    }
    console.log(output);
  }

// Quest 52 - Local Scope and Functions

function myLocalScope() {
    // Only change code below this line
    const myVar = "myLocalScope";
    console.log('inside myLocalScope', myVar);
  }
  myLocalScope();
  console.log('outside myLocalScope', myVar);
  
// Quest 53 - Global vs. Local Scope in Functions

const outerWear = "T-Shirt";

function myOutfit() {
  // Only change code below this line
  let outerWear = "sweater"
  // Only change code above this line
  return outerWear;
}

myOutfit();

// Quest 54 - Understanding Undefined Value returned from a Function

// Setup
let sum = 0;

function addThree() {
  sum = sum + 3;
}
// Only change code below this line
function addFive() {
  sum = sum + 5;
}

// Only change code above this line

addThree();
addFive();

// Quest 55 - Assignment with a Returned Value
// Setup
let processed = 0;

function processArg(num) {
  return (num + 3) / 5;
}

// Only change code below this line
processed = processArg(7); // Equal to 2

// Quest 56 - Stand in Line

function nextInLine(arr, item) {
    // Only change code below this line
    arr.push(item);
    const removed = arr.shift();
    return removed;
    // Only change code above this line
  }
  
  // Setup
  let testArr = [1, 2, 3, 4, 5];
  
  // Display code
  console.log("Before: " + JSON.stringify(testArr));
  console.log(nextInLine(testArr, 6));
  console.log("After: " + JSON.stringify(testArr));

// Quest 57 - Understanding Boolean Value
function welcomeToBooleans() {
    return true; // Change this line
}

// Quest 58 - Use Conditional Logic with If Statements

function trueOrFalse(wasThatTrue) {
    // Only change code below this line
    if (wasThatTrue) {
      return "Yes, that was true";
    } else {
      return "No, that was false"
    }
}

// Quest 59 - Comparison with the Equality Operator

// Setup
function testEqual(val) {
    if (val == 12) { // Change this line
      return "Equal";
    }
    return "Not Equal";
  }
  
  testEqual(10);

// Quest 60 - Comparison with the Strict Equality Operator

// Setup
function testStrict(val) {
    if (val === 7) { // Change this line
      return "Equal";
    }
    return "Not Equal";
  }
  
  testStrict(10);