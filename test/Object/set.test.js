const  Immutable = require('../../index');

describe("EasyImmutable 'set' method", function () {

    it("immutably sets top level w/ prop name string", function () {
        const OG = Immutable({ a: 1, b: 2 });
        const next = OG.set('a', 2);
        expect(next).toEqual({ a: 2, b: 2 });
        expect(OG).toEqual({ a: 1, b: 2 });
    });

    it("immutably sets at arbitrary depth w/ prop path string", function () {
        const OG = Immutable({ a: 1, b: { c: [ {d: 2 } ] } });
        const next = OG.set('b.c[0].d', 10);
        expect(next).toEqual({ a: 1, b: { c: [ { d: 10 } ] } });
        expect(OG).toEqual({ a: 1, b: { c: [ { d: 2 } ] } });
    });

    it("immutably sets at arbitrary depth w/ prop path array", function () {
        const OG = Immutable({ a: 1, b: { c: [ {d: 2 } ] } });
        const next = OG.set(['b', 'c', '0', 'd'], 10);
        expect(next).toEqual({ a: 1, b: { c: [ { d: 10 } ] } });
        expect(OG).toEqual({ a: 1, b: { c: [ { d: 2 } ] } });
    });

    it("throws when provided invalid propPath", function () {
        const OG = Immutable({ a: 1, b: { c: [ {d: 2 } ] } });
        const throwA = () => OG.set('c', 10);
        const throwB = () => OG.set('b.c[1].d', 10);
        const throwC = () => OG.set(['b', 'c', '1', 'd'], 10);
        expect(throwA).toThrow();
        expect(throwB).toThrow();
        expect(throwC).toThrow();
    });

    it("is chainable", function () {
        const OG = Immutable({ a: 1, b: { c: [ {d: 2 } ] } });
        const next = OG.set('a', 10).set(['b', 'c', '0', 'd'], 10);
        expect(next).toEqual({ a: 10, b: { c: [ { d: 10 } ] } });
        expect(OG).toEqual({ a: 1, b: { c: [ { d: 2 } ] } });
    });

});