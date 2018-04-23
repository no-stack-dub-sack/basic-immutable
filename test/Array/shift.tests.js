const Immutable = require('../../index');

describe("BasicImmutable Array, 'shift' method", function () {

    it("returns new array", function () {
        const OG = Immutable(['Jan', 'Feb', 'March']);
        const next = OG.pop();
        expect(OG).toEqual(['Jan', 'Feb', 'March']);
        expect(next).toEqual(['Feb', 'March']);
    });

    it("is chainable", function () {
        const OG = Immutable(['Jan', 'Feb', 'March']);
        const next = OG.shift().shift();
        expect(OG).toEqual(['Jan', 'Feb', 'March']);
        expect(next).toEqual(['March']);
    });

});