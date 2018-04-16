const  Immutable = require('../../index');

describe("EasyImmutable 'asMutable' method", function () {

    it("returns mutable object", function () {
        const OG = Immutable({ a: 1, b: 2 });
        const mutable = OG.asMutable();
        mutable.a = 2;
        delete mutable.b;
        expect(mutable).toEqual({ a: 2 });
    });

    it("returns to immutable object once another method is called", function () {
        const OG = Immutable({ a: 1, b: 2 });
        const mutable = OG.asMutable();

        mutable.a = 2;
        delete mutable.b;
        expect(mutable).toEqual({ a: 2 });

        const next = mutable.set('a', 4);
        next.a = 2;
        expect(next).toEqual({ a: 4 });
    });

});