const Immutable = require('../../index');

describe("BasicImmutable Array, 'set' method", function () {

    it("immutably sets top level w/ index", function () {
        const OG = Immutable([1, 2, { a: 3, b: [1, 2]}]);
        const next = OG.set(2, 3);
        expect(next).toEqual([1, 2, 3]);
        expect(OG).toEqual([1, 2, { a: 3, b: [1, 2] }]);
    });

    it("immutably sets at arbitrary depth w/ prop path string", function () {
        const OG = Immutable([1, 2, { a: 3, b: [1, 2]}]);
        const next = OG.set('2.b[1]', 10);
        expect(next).toEqual([1, 2, { a: 3, b: [1, 10]}]);
        expect(OG).toEqual([1, 2, { a: 3, b: [1, 2]}]);
    });

    it("immutably sets at arbitrary depth w/ prop path array", function () {
        const OG = Immutable([1, 2, { a: 3, b: [1, 2]}]);
        const next = OG.set(['2', 'b', '1'], 10);
        expect(next).toEqual([1, 2, { a: 3, b: [1, 10]}]);
        expect(OG).toEqual([1, 2, { a: 3, b: [1, 2]}]);
    });

    it("is chainable", function () {
        const OG = Immutable([1, 2, 3, 4, 5]);
        const next = OG.set(0, 0).set(1, 4);
        expect(next).toEqual([0, 4, 3, 4, 5]);
        expect(OG).toEqual([1, 2, 3, 4, 5]);
    });

});