const Immutable = require('../../index');

describe("BasicImmutable Array, 'flatten' method", function () {

    it("immutable flattens 1 level deep", function () {
        const OG = Immutable([1, 2, [1, 2, [3, 4]]]);
        const next = OG.flatten();
        expect(OG).toEqual([1, 2, [1, 2, [3, 4]]]);
        expect(next).toEqual([ 1, 2, 1, 2, [ 3, 4 ] ]);
    });

    it("immutable flattens deep", function () {
        const OG = Immutable([1, 2, [1, 2, [3, 4]]]);
        const next = OG.flatten(true);
        expect(OG).toEqual([1, 2, [1, 2, [3, 4]]]);
        expect(next).toEqual([ 1, 2, 1, 2, 3, 4 ]);
    });

    it("is chainable", function () {
        const OG = Immutable([1, 2, [1, 2, [3, 4]]]);
        const next = OG.flatten().flatten();
        expect(OG).toEqual([1, 2, [1, 2, [3, 4]]]);
        expect(next).toEqual([ 1, 2, 1, 2, 3, 4 ]);
    });

});