const Immutable = require('../../index');

describe("BasicImmutable Array, 'fill' method", function () {

    it("returns new array", function () {
        const OG = Immutable([1, 2, 3, 4, 5]);
        const next = OG.fill(0, 2, 4);
        expect(OG).toEqual([1, 2, 3, 4, 5]);
        expect(next).toEqual([1, 2, 0, 0, 5]);
    });

    it("is chainable", function () {
        const OG = Immutable([1, 2, 3, 4, 5]);
        const next = OG.fill(0, 2, 4).fill(1);
        expect(OG).toEqual([1, 2, 3, 4, 5]);
        expect(next).toEqual([1, 1, 1, 1, 1]);
    });

});