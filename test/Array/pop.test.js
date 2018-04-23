const Immutable = require('../../index');

describe("BasicImmutable Array, 'pop' method", function () {

    it("returns new array", function () {
        const OG = Immutable(['Jan', 'Feb', 'March']);
        const next = OG.pop();
        expect(OG).toEqual(['Jan', 'Feb', 'March']);
        expect(next).toEqual(['Jan', 'Feb']);
    });

    it("is chainable", function () {
        const OG = Immutable(['Jan', 'Feb', 'March']);
        const next = OG.pop().pop();
        expect(OG).toEqual(['Jan', 'Feb', 'March']);
        expect(next).toEqual(['Jan']);
    });

});