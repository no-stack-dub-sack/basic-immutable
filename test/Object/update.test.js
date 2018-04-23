const Immutable = require('../../index');

describe("BasicImmutable Object 'update' method", function () {

    it("immutably updates top level w/ prop name string", function () {
        const OG = Immutable({ a: 1, b: 2 });
        const next = OG.update('a', (a) => a + 10);
        expect(next).toEqual({ a: 11, b: 2 });
        expect(OG).toEqual({ a: 1, b: 2 });
    });

    it("immutably updates at arbitrary depth w/ prop path string", function () {
        const OG = Immutable({ a: 1, b: { c: [ { d: 2 } ] } });
        const next = OG.update('b.c[0].d', (d) => d + 10);
        expect(next).toEqual({ a: 1, b: { c: [ { d: 12 } ] } });
        expect(OG).toEqual({ a: 1, b: { c: [ { d: 2 } ] } });
    });

    it("immutably updates at arbitrary depth w/ prop path array", function () {
        const OG = Immutable({ a: 1, b: { c: [ { d: 2 } ] } });
        const next = OG.update(['b', 'c', '0', 'd'], (d) => d + 10);
        expect(next).toEqual({ a: 1, b: { c: [ { d: 12 } ] } });
        expect(OG).toEqual({ a: 1, b: { c: [ { d: 2 } ] } });
    });

    it("throws if second arg is not a function", function () {
        const OG = Immutable({ a: 1 });
        const throws = () => OG.update('a', 2);
        expect(throws).toThrow();
    });

    it("throws when provided invalid propPath", function () {
        const OG = Immutable({ a: 1, b: { c: [{ d: 2 }] } });
        const throwA = () => OG.set('c', (c) => c + 9);
        const throwB = () => OG.set('b.c[1].d', (d) => d + 9);
        const throwC = () => OG.set(['b', 'c', '1', 'd'], (d) => d + 9);
        expect(throwA).toThrow();
        expect(throwB).toThrow();
        expect(throwC).toThrow();
    });

    it("is chainable", function () {
        const OG = Immutable({ a: 1, b: { c: [ { d: 2 } ] } });
        const next = OG
            .update('a', (a) => a + 9)
            .update(['b', 'c', '0', 'd'], (d) => d + 8);
        expect(next).toEqual({ a: 10, b: { c: [ { d: 10 } ] } });
        expect(OG).toEqual({ a: 1, b: { c: [ { d: 2 } ] } });
    });

});