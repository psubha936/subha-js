class Statistics {
    // Calculates the average of the numbers in the array
    static average(array) {
        if (array.length === 0) return 0; // Return 0 for an empty array
        let total = 0;

        // Sum up all the numbers manually
        for (let i = 0; i < array.length; i++) {
            total += array[i];
        }

        // Return the average
        return total / array.length;
    }

    // Finds the maximum value in the array
    static max(array) {
        if (array.length === 0) return undefined; // Return undefined for an empty array
        let maxValue = array[0];

        // Iterate to find the maximum value
        for (let i = 1; i < array.length; i++) {
            if (array[i] > maxValue) {
                maxValue = array[i];
            }
        }

        return maxValue; // Return the maximum value
    }

    // Finds the minimum value in the array
    static min(array) {
        if (array.length === 0) return undefined; // Return undefined for an empty array
        let minValue = array[0];

        // Iterate to find the minimum value
        for (let i = 1; i < array.length; i++) {
            if (array[i] < minValue) {
                minValue = array[i];
            }
        }

        return minValue; // Return the minimum value
    }
}

module.exports = Statistics;
