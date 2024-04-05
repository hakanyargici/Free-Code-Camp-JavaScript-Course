// Quest 81 - Counting Cards

let count = 0;

function cc(card) {
  // Only change code below this line
  switch (card) {
    case 2:
    case 3:
    case 4:
    case 5:
    case 6:
      count++;
      break;
    case 10:
    case "J":
    case "Q":
    case "K":
    case "A":
      count--;
      break;
  }
  if (count > 0) {
    return count + " Bet";
  } else {
    return count + " Hold";
  }
  // Only change code above this line
}

// Quest 82 - Build JavaScript Object

const myDog = {
    // Only change code below this line
    "name": "Dri",
    "legs": 4,
    "tails": 1,
    "friends": ["Cat", "Dog"]
    // Only change code above this line
  };

// Quest 83 - Accessing Object Properties with Dot Notation

// Setup
const testObj = {
    hat: "ballcap",
    shirt: "jersey",
    shoes: "cleats"
  };
  
  // Only change code below this line
  const hatValue = testObj.hat;      // Change this line
  const shirtValue = testObj.shirt;    // Change this line

// Quest 84 - Accessing Object Properties with Bracket Notation

// Setup
const testObj = {
    "an entree": "hamburger",
    "my side": "veggies",
    "the drink": "water"
  };
  
  // Only change code below this line
  const entreeValue = testObj["an entree"];   // Change this line
  const drinkValue = testObj["the drink"];    // Change this line

// Quest 85 - Accessing Object Properties with Variables

// Setup
const testObj = {
    12: "Namath",
    16: "Montana",
    19: "Unitas"
  };
  
  // Only change code below this line
  const playerNumber = 16;  // Change this line
  const player = testObj[playerNumber];   // Change this line

// Quest 87 - Updating Object Properties

// Setup
const myDog = {
    "name": "Coder",
    "legs": 4,
    "tails": 1,
    "friends": ["freeCodeCamp Campers"]
  };
  
  // Only change code below this line
  myDog.name = "Happy Coder"

// Quest 88 - Add New Properties to a JavaScript Object

const myDog = {
    "name": "Happy Coder",
    "legs": 4,
    "tails": 1,
    "friends": ["freeCodeCamp Campers"]
  };
  
  myDog.bark = "bow-wow";

// Quest 89 - Delete Properties from a JavaScript Object

// Setup
const myDog = {
    "name": "Happy Coder",
    "legs": 4,
    "tails": 1,
    "friends": ["freeCodeCamp Campers"],
    "bark": "woof"
  };
  
  // Only change code below this line
  delete myDog.tails;

// Quest 90 - Using Objects for Lookups

// Setup
function phoneticLookup(val) {
    let result = "";
  
    // Only change code below this line
    const lookup = {
      "alpha": "Adams",
      "bravo": "Boston",
      "charlie": "Chicago",
      "delta": "Denver",
      "echo": "Easy",
      "foxtrot": "Frank",
    };
  
    result = lookup[val];
  
    // Only change code above this line
    return result;
  }
  
  phoneticLookup("charlie");