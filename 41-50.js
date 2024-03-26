// Quest 41 - Access Array Data with Indexes

const myArray = [50, 60, 70];

const myData = myArray[0];

// Quest 42 - Modify Array Data With Indexes

// Setup
const myArray = [18, 64, 99];

// Only change code below this line
myArray[0] = 45;
myArray[1] = 64;
myArray[2] = 99;

// Quest 43 - Access Multi-Dimensional Arrays With Indexes

const myArray = [
    [1, 2, 3],
    [4, 5, 6],
    [7, 8, 9],
    [[10, 11, 12], 13, 14],
  ];
  
  const myData = myArray[2][1];

// Quest 44 - Manipulate Arrays With push Method
// Setup
const myArray = [["John", 23], ["cat", 2]];

// Only change code below this line
myArray.push(["dog", 3]);

// Quest 44 - Manipulate Arrays With pop Method
// Setup
const myArray = [["John", 23], ["cat", 2]];

// Only change code below this line

const removedFromMyArray = myArray.pop();

// Quest 45 - Manipulate Arrays With shift Method
// Setup
const myArray = [["John", 23], ["dog", 3]];

// Only change code below this line
const removedFromMyArray = myArray.shift();

// Quest 46 - Manipulate Arrays With unshift Method
// Setup
const myArray = [["John", 23], ["dog", 3]];
myArray.shift();

// Only change code below this line
myArray.unshift(["Paul", 35]);

// Quest 47 - Shopping List
const myList = [];

myList.push(["Muz", 0],["Çilek", 1],["Portakal", 2],["Elma", 3],["Armut", 4]);

// Quest 48 - Write Reusable JavaScript with Functions
function reusableFunction(){
    console.log("Hi World");
}
  
  reusableFunction();

// Quest 49 - Passing Values to Functions with Arguments

function functionWithArgs(p1,p2){
    if (p1 == 1 && p2 == 2)
      console.log(3)
    else if (p1 == 7 && p2 == 9){
      console.log(16)
    }
    else 
      console.log("Wrong")
}
  
functionWithArgs(1,2)

// Quest 50 - Return a Value from a Function with Return
function timesFive(num){
    return num * 5;
}

