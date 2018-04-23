const Immutable = require('../../index');

describe("EasyImmutable Array, 'pull' method", function () {

    it("immutably pulls", function () {
        const OG = Immutable([1, 2, 3, 4, 4, 5]);
        const next = OG.pull(false, 4);
        expect(OG).toEqual([1, 2, 3, 4, 4, 5]);
        expect(next).toEqual([1, 2, 3, 5]);
    });

    it("immutably pulls (multiple values)", function () {
        const OG = Immutable([1, 2, 3, 4, 4, 5]);
        const next = OG.pull(false, 4, 2);
        expect(OG).toEqual([1, 2, 3, 4, 4, 5]);
        expect(next).toEqual([1, 3, 5]);
    });

    it("immutably pulls deep", function () {
        const arr = [1, 2, [3, 3, 2, [1, 3, 4]], { a: 3 }, 2, 3];
        const OG = Immutable(arr);
        const next = OG.pull(true, 3);
        expect(OG).toEqual(arr);
        expect(next).toEqual([1, 2, [2, [1, 4]], { a: 3 }, 2]);
    });

    it("immutably pulls deep (multiple values)", function () {
        const arr = [1, 2, [3, 3, 2, [1, 3, 4]], { a: 3 }, 2, 3];
        const OG = Immutable(arr);
        const next = OG.pull(true, 3, 2);
        expect(OG).toEqual(arr);
        expect(next).toEqual([1, [[1, 4]], { a: 3 }]);
    });

    it("is chainable", function () {
        const OG = Immutable([1, 2, 3, 4, 4, 5]);
        const next = OG.pull(false, 4).pull(false, 3);
        expect(OG).toEqual([1, 2, 3, 4, 4, 5]);
        expect(next).toEqual([1, 2, 5]);
    });

});