const ArrayMethods = require('./arrayMethods');
const Statistics = require('./statistics');

class SubhaArray {
    constructor() {
        this.array = [];
    }

    // Array manipulation methods
    add(item) {
        ArrayMethods.add(this.array, item);
    }

    removeLast() {
        return ArrayMethods.removeLast(this.array);
    }

    removeFirst() {
        return ArrayMethods.removeFirst(this.array);
    }

    addFirst(item) {
        ArrayMethods.addFirst(this.array, item);
    }

    // Statistical methods
    average() {
        return Statistics.average(this.array);
    }

    max() {
        return Statistics.max(this.array);
    }

    min() {
        return Statistics.min(this.array);
    }

    clear() {
        this.array = [];
    }

    size() {
        return this.array.length;
    }

    getArray() {
        return [...this.array];
    }
}

module.exports = SubhaArray;
