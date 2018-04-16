const  Immutable = require('../index');

describe("EasyImmutable", function () {

    it("returns immutable object", function () {
        const imutable = Immutable({ a: 1, b: 2 });
        imutable.a = 2;
        delete imutable.b;
        expect(imutable).toEqual({ a: 1, b: 2 });
    });

    it("returns immutable array", function () {
        const imutable = Immutable([1, 2]);
        imutable[0] = 2;
        expect(imutable).toEqual([1, 2]);
    });

    it("has non-enumerable API methods on ImmutableObject", function () {
        expect(Object.getOwnPropertyNames(Immutable({})))
            .toEqual([
                'set',
                'merge',
                'mergeTolerant',
                'update',
                'get',
                'asMutable',
                'toJS'
            ]);
    });

    it("has non-enumerable API methods on ImmutableObject", function () {
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
                'set',
                'get',
                'update',
                'pull',
                'asObject',
                'asMutable',
                'toJS',
            ]);
    });

});