const Immutable = require('../../index');

describe("BasicImmutable Array, 'get' method", function () {

    it("gets from top level w/ index", function () {
        const OG = Immutable([1, 2, { a: 3, b: [1, 2]}]);
        const result = OG.get(2);
        expect(result).toEqual({ a: 3, b: [1, 2]});
    });

    it("gets from arbitrary depth w/ prop path string", function () {
        const OG = Immutable([1, 2, { a: 3, b: [1, 2]}]);
        const result = OG.get('2.b[1]');
        expect(result).toBe(2);
    });

    it("gets from arbitrary depth w/ prop path array", function () {
        const OG = Immutable([1, 2, { a: 3, b: [1, 2]}]);
        const result = OG.get(['2', 'b', '1']);
        expect(result).toBe(2);
    });

    it("returns default value when path is invalid", function () {
        const OG = Immutable([1, 2, { a: 3, b: [1, 2]}]);
        const result = OG.get(['1', 'c', '2', 'd'], 'default');
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