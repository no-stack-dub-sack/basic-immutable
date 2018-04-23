const  Immutable = require('../../index');

describe("BasicImmutable Object 'merge' method", function () {

    it("immutably merges", function () {
        const OG = Immutable({ a: 1, b: 2 });
        const next = OG.merge({ a: 2 });
        expect(next).toEqual({ a: 2, b: 2 });
        expect(OG).toEqual({ a: 1, b: 2 });
    });

    it("immutably merges from multiple sources", function () {
        const OG = Immutable({ a: 1, b: 2 });
        const next = OG.merge({ a: 2 }, { b: 3 });
        expect(next).toEqual({ a: 2, b: 3 });
        expect(OG).toEqual({ a: 1, b: 2 });
    });

    it("only merges own props", function () {
        const OG = Immutable({ a: 1 });
        const throwsA = () => OG.merge({ b: 'c' });
        const throwsB = () => OG.merge({ a: 'c' }, { c: 'd'});
        expect(throwsA).toThrow();
        expect(throwsB).toThrow();
    });

    it("is chainable", function () {
        const OG = Immutable({ a: 1, b: 2 });
        const next = OG.merge({ a: 2 }).merge({ b: 1 });
        expect(next).toEqual({ a: 2, b: 1 });
        expect(OG).toEqual({ a: 1, b: 2 });
    });
});