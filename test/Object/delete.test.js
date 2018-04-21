const Immutable = require('../../index');

describe("EasyImmutable Object, 'delete' method", function () {

    it("immutably deletes", function () {
        const OG = Immutable({ a: 1, b: 2 });
        const next = OG.delete('a');
        expect(OG).toEqual({ a: 1, b: 2 });
        expect(next).toEqual({ b: 2 });
    });

    it("immutably deletes", function () {
        const OG = Immutable({ a: 1, b: 2, c: { x: 1, y: [1, 2, 3] } });
        const next = OG.delete('c.x');
        const next2 = OG.delete(['c', 'y', '1']);
        expect(OG).toEqual({ a: 1, b: 2, c: { x: 1, y: [1, 2, 3] } });
        expect(next).toEqual({ a: 1, b: 2, c: { y: [1, 2, 3] } });
        expect(next2).toEqual({ a: 1, b: 2, c: { x: 1, y: [1, 3] } });
    });

    it("is chainable", function () {
        const OG = Immutable({ a: 1, b: 2 });
        const next = OG.delete('a').delete('b');
        expect(OG).toEqual({ a: 1, b: 2 });
        expect(next).toEqual({});
    });

    it("throws when provided invalid path", function () {
        const OG = Immutable({ a: 1, b: 2  c: [1, 2, 3] });
        const throwsA = () => OG.delete('4.3.x.d');
        expect(throwsA).toThrow();
    });

});