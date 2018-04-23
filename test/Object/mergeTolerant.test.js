const  Immutable = require('../../index');

describe("BasicImmutable Object 'mergeTolerant' method", function () {

    it("immutably merges", function () {
        const OG = Immutable({ a: 1, b: 2 });
        const next = OG.mergeTolerant({ a: 2 });
        expect(next).toEqual({ a: 2, b: 2 });
        expect(OG).toEqual({ a: 1, b: 2 });
    });

    it("immutably merges from multiple sources", function () {
        const OG = Immutable({ a: 1, b: 2 });
        const next = OG.mergeTolerant({ a: 2 }, { c: 4 });
        expect(next).toEqual({ a: 2, b: 2, c: 4 });
        expect(OG).toEqual({ a: 1, b: 2 });
    });

    it("immutably merges non-own props", function () {
        const OG = Immutable({ a: 1 });
        const next = OG.mergeTolerant({ b: 2 });
        expect(next).toEqual({ a: 1, b: 2 });
        expect(OG).toEqual({ a: 1 });
    });

    it("is chainable", function () {
        const OG = Immutable({ a: 1 });
        const next = OG.mergeTolerant({ a: 2 }).mergeTolerant({ b: 1 });
        expect(next).toEqual({ a: 2, b: 1 });
        expect(OG).toEqual({ a: 1 });
    });

});