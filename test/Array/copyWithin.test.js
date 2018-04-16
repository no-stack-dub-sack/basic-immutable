const Immutable = require('../../index');

describe("EasyImmutable Array, 'copyWithin' method", function () {

    it("returns new array", function () {
        const OG = Immutable([1, 2, 3, 4, 5]);
        const next = OG.copyWithin(0, 3, 4);
        expect(OG).toEqual([1, 2, 3, 4, 5]);
        expect(next).toEqual([4, 2, 3, 4, 5]);
    });

    it("is chainable", function () {
        const OG = Immutable([1, 2, 3, 4, 5]);
        const next = OG.copyWithin(0, 3, 4).copyWithin(1, 2, 4);
        expect(OG).toEqual([1, 2, 3, 4, 5]);
        expect(next).toEqual([4, 3, 4, 4, 5]);
    });

});