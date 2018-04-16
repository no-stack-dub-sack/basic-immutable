const  Immutable = require('../../index');

describe("EasyImmutable 'get' method", function () {

    it("gets top level w/ prop name string", function () {
        const OG = Immutable({ a: 1, b: 2 });
        const result = OG.get('a');
        expect(result).toBe(1);
    });

    it("gets from arbitrary depth w/ prop path string", function () {
        const OG = Immutable({ a: 1, b: { c: [{ d: 2 }] } });
        const result = OG.get('b.c[0].d');
        expect(result).toBe(2);
    });

    it("gets from arbitrary depth w/ prop path array", function () {
        const OG = Immutable({ a: 1, b: { c: [{ d: 2 }] } });
        const result = OG.get(['b', 'c', '0', 'd']);
        expect(result).toBe(2);
    });

    it("returns default value when path is invalid", function () {
        const OG = Immutable({ a: 1, b: { c: [{ d: 2 }] } });
        const result = OG.get(['b', 'c', '2', 'd'], 'default');
        expect(result).toBe('default');
    });

    it("throws when provided invalid propPath and no default argument is provided", function () {
        const OG = Immutable({ a: 1, b: { c: [{ d: 2 }] } });
        const throwA = () => OG.get('c');
        const throwB = () => OG.get('b.c[1].d');
        const throwC = () => OG.get(['b', 'c', '1', 'd']);
        expect(throwA).toThrow();
        expect(throwB).toThrow();
        expect(throwC).toThrow();
    });

});