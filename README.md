# Subha JS

**Subha JS** is a simple and efficient JavaScript library for managing arrays with additional functionality. It provides methods for basic array operations as well as statistical calculations.

## Table of Contents

- [Installation](#installation)
- [Usage](#usage)
- [Methods](#methods)
- [Examples](#examples)
- [License](#license)

## Installation

You can install the library via npm:

```bash
npm install subha-js
Usage
To use the library, require it in your JavaScript file:

javascript
Copy code
const SubhaArray = require('subha-js');

const myArray = new SubhaArray();
myArray.add(10);
myArray.add(20);
console.log(myArray.average()); // Outputs: 15
Methods
The following methods are available in the SubhaArray class:

add(item): Adds an item to the end of the array.
removeLast(): Removes and returns the last item of the array.
removeFirst(): Removes and returns the first item of the array.
addFirst(item): Adds an item to the beginning of the array.
average(): Returns the average of the numbers in the array.
max(): Returns the maximum value in the array.
min(): Returns the minimum value in the array.
clear(): Clears all items from the array.
size(): Returns the number of items in the array.
getArray(): Returns a copy of the current array.
Examples
Here are some examples of how to use the methods:

javascript
Copy code
const myArray = new SubhaArray();

// Adding items
myArray.add(10);
myArray.add(20);
myArray.addFirst(5);

console.log(myArray.getArray()); // Outputs: [5, 10, 20]

// Removing items
myArray.removeLast(); // Removes 20
console.log(myArray.getArray()); // Outputs: [5, 10]

myArray.removeFirst(); // Removes 5
console.log(myArray.getArray()); // Outputs: [10]

// Statistical calculations
console.log(myArray.average()); // Outputs: 10
console.log(myArray.max()); // Outputs: 10
console.log(myArray.min()); // Outputs: 10

// Clearing the array
myArray.clear();
console.log(myArray.size()); // Outputs: 0
