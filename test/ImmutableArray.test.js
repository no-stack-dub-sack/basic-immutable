const  Immutable = require('../index');

describe("BasicImmutable Array", function () {

    it("returns immutable array", function () {
        const immutable = Immutable([1, 2]);
        immutable[0] = 2;
        expect(immutable).toEqual([1, 2]);
    });

    it("is compatible with bracket notation", function () {
        const immutable = Immutable([1, 2]);
        const test = [immutable[0], immutable[1]];
        expect(test).toEqual([1, 2]);
    });

    it("can be iterated over with for...of", function () {
        const immutable = Immutable([1, 2, 3]);
        const test = [];
        for (const el of immutable) {
            test.push(el);
        }
        expect(test).toEqual([1, 2, 3]);
    });

    it("can be iterated over with for...in", function () {
        const immutable = Immutable([1, 2, 3]);
        const test = [];
        for (const i in immutable) {
            test.push(i);
        }
        expect(test).toEqual(['0', '1', '2']);
    });

    it("can be iterated over with for", function () {
        const immutable = Immutable([1, 2, 3]);
        const test = [];
        for (let i = 0; i < immutable.length; i++) {
            test.push(immutable[i]);
        }
        expect(test).toEqual([1, 2, 3]);
    });

    it("has working native methods", function () {
        const immutable = Immutable([1, 2, 3]);
        const testOne = immutable.map((n) => n+1);
        const testTwo = immutable.filter((n) => n === 1);
        expect(testOne).toEqual([2, 3, 4]);
        expect(testTwo).toEqual([1]);
        expect(immutable).toEqual([1, 2, 3]);
    });

    it("can be copied using spread", function () {
        const immutable = Immutable([1, 2, 3]);
        const newArr = [...immutable];
        newArr.push(4);
        expect(newArr).toEqual([1, 2, 3, 4]);
        expect(immutable).toEqual([1, 2, 3]);
    });

    it("has non-enumerable API methods", function () {
        expect(Object.getOwnPropertyNames(Immutable([])))
            .toEqual([
                'length',
                'push',
                'unshift',
                'pop',
                'shift',
                'splice',
                'reverse',
                'sort',
                'copyWithin',
                'fill',
                'get',
                'set',
                'update',
                'delete',
                'pull',
                'flatten',
                'equals',
                'toObject',
                'asMutable',
                'toJS',
            ]);
    });

});