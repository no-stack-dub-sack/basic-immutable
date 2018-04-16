const Immutable = require('../../index');

describe("EasyImmutable Array, 'pull' method", function () {

    it("immutably pulls", function () {
        const OG = Immutable([1, 2, 3, 4, 4, 5]);
        const next = OG.pull(4);
        expect(OG).toEqual([1, 2, 3, 4, 4, 5]);
        expect(next).toEqual([1, 2, 3, 5]);
    });

    it("is chainable", function () {
        const OG = Immutable([1, 2, 3, 4, 4, 5]);
        const next = OG.pull(4).pull(3);
        expect(OG).toEqual([1, 2, 3, 4, 4, 5]);
        expect(next).toEqual([1, 2, 5]);
    });

});