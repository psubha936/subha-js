const SubhaArray = require('../src/index');

describe('SubhaArray', () => {
    let myArray;

    beforeEach(() => {
        myArray = new SubhaArray();
    });

    test('should add items', () => {
        myArray.add(10);
        expect(myArray.getArray()).toEqual([10]);
        myArray.add(20);
        expect(myArray.getArray()).toEqual([10, 20]);
    });

    test('should remove last item', () => {
        myArray.add(10);
        myArray.add(20);
        expect(myArray.removeLast()).toBe(20);
        expect(myArray.getArray()).toEqual([10]);
    });

    test('should remove first item', () => {
        myArray.add(10);
        myArray.add(20);
        expect(myArray.removeFirst()).toBe(10);
        expect(myArray.getArray()).toEqual([20]);
    });

    test('should calculate average', () => {
        myArray.add(10);
        myArray.add(20);
        expect(myArray.average()).toBe(15);
    });

    test('should find max and min', () => {
        myArray.add(10);
        myArray.add(20);
        myArray.add(5);
        expect(myArray.max()).toBe(20);
        expect(myArray.min()).toBe(5);
    });

    test('should clear the array', () => {
        myArray.add(10);
        myArray.clear();
        expect(myArray.getArray()).toEqual([]);
    });

    test('should return size of the array', () => {
        expect(myArray.size()).toBe(0);
        myArray.add(10);
        expect(myArray.size()).toBe(1);
    });
});
