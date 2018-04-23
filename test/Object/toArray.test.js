const Immutable = require('../../index');

describe("BasicImmutable Object 'toArray' method", function () {

    it("returns immutable array", function () {
        const obj = { a: 1, b: 2, c: { a: 1, b: 2 }, d: [1, 2]};
        const OG = Immutable(obj);
        const next = OG.toArray();
        expect(OG).toEqual(obj);
        expect(next).toEqual([ 1, 2, { a: 1, b: 2 }, [ 1, 2 ]]);
    });

    it("is chainable with immutable array methods", function () {
        const OG = Immutable({ a: 1, b: 2, c: 3 });
        const test = OG.toArray(1).push(4)
        expect(test).toEqual([1, 2, 3, 4]);
    });

});