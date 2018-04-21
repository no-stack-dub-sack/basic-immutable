const Immutable = require('../../index');

describe("EasyImmutable Array, 'delete' method", function () {

    it("immutably deletes", function () {
        const OG = Immutable([1, 2, 3, 4, 4, 5]);
        const next = OG.delete(4);
        expect(OG).toEqual([1, 2, 3, 4, 4, 5]);
        expect(next).toEqual([1, 2, 3, 4, 5]);
    });

    it("immutably deletes nested", function () {
        const arr = [1, 2, 3, 4, [1, 2, { a: 1, b: 2, c: [1, 2, 3]}]];
        const OG = Immutable(arr);
        const next1 = OG.delete('4[2].c[1]');
        const next2 = OG.delete(['4', '2', 'b']);
        const next3 = OG.delete('4[2]');
        expect(OG).toEqual(arr);
        expect(next1).toEqual([1, 2, 3, 4, [1, 2, { a: 1, b: 2, c: [1, 3]}]]);
        expect(next2).toEqual([1, 2, 3, 4, [1, 2, { a: 1, c: [1, 2, 3]}]]);
        expect(next3).toEqual([1, 2, 3, 4, [1, 2]]);
    });

    it("is chainable", function () {
        const OG = Immutable([1, 2, 3, 4, 4, 5]);
        const next = OG.delete(4).delete(2);
        expect(OG).toEqual([1, 2, 3, 4, 4, 5]);
        expect(next).toEqual([1, 2, 4, 5]);
    });

    it("throws when provided invalid path", function () {
        const OG = Immutable([1, 2, 3]);
        const throwsA = () => OG.delete(3);
        const throwsB = () => OG.delete(-3);
        const throwsC = () => OG.delete('4.3.x.d');
        expect(throwsA).toThrow();
        expect(throwsB).toThrow();
        expect(throwsC).toThrow();
    });

});