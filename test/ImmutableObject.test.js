const  Immutable = require('../index');

describe("EasyImmutable Object", function () {

    it("returns immutable object", function () {
        const immutable = Immutable({ a: 1, b: 2 });
        immutable.a = 2;
        delete immutable.b;
        expect(immutable).toEqual({ a: 1, b: 2 });
    });

    it("is compatible with bracket notation", function () {
        const immutable = Immutable({ a: 1, b: 2 });
        const a = 'a', b = 'b';
        const test = [immutable[a], immutable[b]];
        expect(test).toEqual([1, 2]);
    });

    it("is compatible with bracket notation", function () {
        const immutable = Immutable({ a: 1, b: 2 });
        const test = [immutable.a, immutable.b];
        expect(test).toEqual([1, 2]);
    });

    it("can be iterated over with for...in", function () {
        const immutable = Immutable({ a: 1, b: 2 });
        const test = [];
        for (const k in immutable) {
            test.push(k);
        }
        expect(test).toEqual(['a', 'b']);
    });

    it("has non-enumerable API methods", function () {
        expect(Object.getOwnPropertyNames(Immutable({})))
            .toEqual([
                'get',
                'set',
                'update',
                'delete',
                'merge',
                'mergeTolerant',
                'equals',
                'toArray',
                'asMutable',
                'toJS'
            ]);
    });

});