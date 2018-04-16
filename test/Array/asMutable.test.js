const Immutable = require('../../index');

describe("EasyImmutable Array 'asMutable' method", function () {

    it("returns mutable array", function () {
        const OG = Immutable([1, 2, 3]);
        const mutable = OG.asMutable();
        mutable[0] = 2;
        expect(mutable).toEqual([2, 2, 3]);
    });

    it("returns to immutable object once another method is called", function () {
        const OG = Immutable([1, 2, 3]);
        const mutable = OG.asMutable();
        mutable[0] = 2;
        expect(mutable).toEqual([2, 2, 3]);
        const next = mutable.set(1, 4);
        next.a = 2;
        expect(next).toEqual([2, 4, 3]);
    });

});
