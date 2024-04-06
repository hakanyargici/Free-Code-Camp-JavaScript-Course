// Quest 91 - Testing Objects for Properties

function checkObj(obj, checkProp) {
    // Only change code below this line
    if (obj.hasOwnProperty(checkProp)) {
      return obj[checkProp];
    } else {
      return "Not Found";
    }
    // Only change code above this line
  }

// Quest 92 - Testing Object For Properties

const myMusic = [
    {
      "artist": "Billy Joel",
      "title": "Piano Man",
      "release_year": 1973,
      "formats": [
        "CD",
        "8T",
        "LP"
      ],
      "gold": true
    },
    {
      "artist": "dRİ",
      "title": "Piano ",
      "release_year": 1974,
      "formats": [
        "CD",
        "LP"
      ],
      "gold": false
    }
];

// Quest 93 - Accessing Nested Objects

const myStorage = {
    "car": {
      "inside": {
        "glove box": "maps",
        "passenger seat": "crumbs"
       },
      "outside": {
        "trunk": "jack"
      }
    }
  };
  
  const gloveBoxContents = myStorage.car.inside["glove box"];

// Quest 94 - Accessing nested Arrays

const myPlants = [
    {
      type: "flowers",
      list: [
        "rose",
        "tulip",
        "dandelion"
      ]
    },
    {
      type: "trees",
      list: [
        "fir",
        "pine",
        "birch"
      ]
    }
  ];
  
  const secondTree = myPlants[1].list[1];

// Quest 95 - Record Collection

// Setup
const recordCollection = {
    2548: {
      albumTitle: 'Slippery When Wet',
      artist: 'Bon Jovi',
      tracks: ['Let It Rock', 'You Give Love a Bad Name']
    },
    2468: {
      albumTitle: '1999',
      artist: 'Prince',
      tracks: ['1999', 'Little Red Corvette']
    },
    1245: {
      artist: 'Robert Palmer',
      tracks: []
    },
    5439: {
      albumTitle: 'ABBA Gold'
    }
  };
  
  // Only change code below this line
  function updateRecords(records, id, prop, value) {
    if (value === "") {
      delete records[id][prop];
    } else if (prop !== "tracks" && value !== "") {
      records[id][prop] = value;
    } else if (prop === "tracks" && value !== "") {
      if (records[id].hasOwnProperty("tracks") === false) {
        records[id][prop] = [];
      }
      records[id][prop].push(value);
    }
    return records;
}
  
updateRecords(recordCollection, 5439, 'artist', 'ABBA');

// Quest 96 - Iterate with JavaScript While Loops

// Setup
const myArray = [];

// Only change code below this line
let i = 5;

while (0 <= i) {
  myArray.push(i);
  i--;
}

console.log(myArray);

// Quest 97 - Iterate with JavaScript For Loops

// Setup
const myArray = [];

// Only change code below this line
for (let i = 1; i <= 5; i++) {
  myArray.push(i);
}

console.log(myArray);

// Quest 98 - Iterate Odd Numbers With a For Loop

// Setup
const myArray = [];

// Only change code below this line

for (let i = 1; i < 10; i += 2) {
  myArray.push(i);
}

console.log(myArray);

// Quest 99 - Count Backwards With a For Loop

// Setup
const myArray = [];

// Only change code below this line
for (let i = 9; i > 0; i -= 2){
  myArray.push(i);
}

  console.log(myArray);

// Quest 100 - Iterate Through an Array with a For Loop

// Setup
const myArr = [2, 3, 4, 5, 6];

// Only change code below this line
let total = 0;
for (let i = 0; i < myArr.length; i++) {
  console.log(myArr[i]);
  total += myArr[i];
}
