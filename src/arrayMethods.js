class ArrayMethods {
    // Adds an item to the end of the array
    static add(array, item) {
        array[array.length] = item; // Manually set the value at the next index
    }

    // Removes and returns the last item of the array
    static removeLast(array) {
        if (array.length === 0) return undefined; // Check if the array is empty
        const lastItem = array[array.length - 1]; // Get the last item
        array.length--; // Decrease the length of the array
        return lastItem; // Return the last item
    }

    // Removes and returns the first item of the array
    static removeFirst(array) {
        if (array.length === 0) return undefined; // Check if the array is empty
        const firstItem = array[0]; // Get the first item
        for (let i = 1; i < array.length; i++) {
            array[i - 1] = array[i]; // Shift items to the left
        }
        array.length--; // Decrease the length of the array
        return firstItem; // Return the first item
    }

    // Adds an item to the beginning of the array
    static addFirst(array, item) {
        for (let i = array.length; i > 0; i--) {
            array[i] = array[i - 1]; // Shift items to the right
        }
        array[0] = item; // Set the first item
        array.length++; // Increase the length of the array
    }
}

module.exports = ArrayMethods;
