const Immutable = require('../../index');

describe("EasyImmutable Array, 'update' method", function () {

    it("immutably updates top level w/ index", function () {
        const OG = Immutable([1, 2, { a: 3, b: [1, 2]}]);
        const next = OG.update(2, (o) => { o.a = 4; return o });
        expect(OG).toEqual([1, 2, { a: 3, b: [1, 2] }]);
        expect(next).toEqual([1, 2, { a: 4, b: [1, 2]}]);
    });

    it("immutably updates at arbitrary depth w/ prop path string", function () {
        const OG = Immutable([1, 2, { a: 3, b: [1, 2]}]);
        const next = OG.update('2.b[1]', (el) => el + 8);
        expect(next).toEqual([1, 2, { a: 3, b: [1, 10]}]);
        expect(OG).toEqual([1, 2, { a: 3, b: [1, 2]}]);
    });

    it("immutably updates at arbitrary depth w/ prop path array", function () {
        const OG = Immutable([1, 2, { a: 3, b: [1, 2]}]);
        const next = OG.update(['2', 'b', '1'], (el) => el + 8);
        expect(next).toEqual([1, 2, { a: 3, b: [1, 10]}]);
        expect(OG).toEqual([1, 2, { a: 3, b: [1, 2]}]);
    });

    it("is chainable", function () {
        const OG = Immutable([1, 2, 3, 4, 5]);
        const next = OG.update(0, (el) => el - 1).update(1, (el) => el + 2);
        expect(OG).toEqual([1, 2, 3, 4, 5]);
        expect(next).toEqual([0, 4, 3, 4, 5]);
    });

});