# Subha JS

A simple JavaScript library for managing arrays with additional functionality.

## Installation

```bash
npm install subha-js
Usage
javascript
Copy code
const SubhaArray = require('subha-js');

const myArray = new SubhaArray();
myArray.add(10);
myArray.add(20);
console.log(myArray.average()); // 15
Methods
add(item): Adds an item to the end of the array.
removeLast(): Removes and returns the last item.
removeFirst(): Removes and returns the first item.
addFirst(item): Adds an item to the beginning.
average(): Returns the average of the numbers.
max(): Returns the maximum value.
min(): Returns the minimum value.
clear(): Clears the array.
size(): Returns the size of the array.
getArray(): Returns a copy of the current array.
go
Copy code

### Step 5: Add a `.gitignore` File

Create a `.gitignore` file to ignore `node_modules` and other unnecessary files:

node_modules/

markdown
Copy code

### Final Steps

1. **Run Tests**: Run your tests using:

   ```bash
   npm test
Publish: Once everything is set, publish your library:

bash
Copy code
npm publish