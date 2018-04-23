const Immutable = require('../../index');

describe("BasicImmutable Array, 'sort' method", function () {

    it("returns new array", function () {
        const OG = Immutable([5, 4, 3, 2, 1]);
        const next = OG.sort();
        expect(OG).toEqual([5, 4, 3, 2, 1]);
        expect(next).toEqual([1, 2, 3, 4, 5]);
    });

    it("is chainable", function () {
        const OG = Immutable([5, 4, 3, 2, 1]);
        const next = OG.sort().unshift(6, 7).sort();
        expect(OG).toEqual([5, 4, 3, 2, 1]);
        expect(next).toEqual([1, 2, 3, 4, 5, 6, 7]);
    });

});