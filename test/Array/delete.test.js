const Immutable = require('../../index');

describe("EasyImmutable Array, 'delete' method", function () {

    it("immutably deletes", function () {
        const OG = Immutable([1, 2, 3, 4, 4, 5]);
        const next = OG.delete(4);
        expect(OG).toEqual([1, 2, 3, 4, 4, 5]);
        expect(next).toEqual([1, 2, 3, 4, 5]);
    });

    it("is chainable", function () {
        const OG = Immutable([1, 2, 3, 4, 4, 5]);
        const next = OG.delete(4).delete(-4);
        expect(OG).toEqual([1, 2, 3, 4, 4, 5]);
        expect(next).toEqual([1, 3, 4, 5]);
    });

    it("throws when provided invalid index", function () {
        const OG = Immutable([1, 2, 3]);
        const throwsA = () => OG.delete(3);
        const throwsB = () => OG.delete(-3);
        expect(throwsA).toThrow();
        expect(throwsB).toThrow();
    });

});