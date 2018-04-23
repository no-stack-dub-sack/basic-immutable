const Immutable = require('../../index');

describe("BasicImmutable Array, 'reverse' method", function () {

    it("returns new array", function () {
        const OG = Immutable(['Jan', 'Feb', 'March']);
        const next = OG.reverse();
        expect(OG).toEqual(['Jan', 'Feb', 'March']);
        expect(next).toEqual(['March', 'Feb', 'Jan']);
    });

    it("is chainable", function () {
        const OG = Immutable(['Jan', 'Feb', 'March']);
        const next = OG.reverse().reverse().push('April');
        expect(OG).toEqual(['Jan', 'Feb', 'March']);
        expect(next).toEqual(['Jan', 'Feb', 'March', 'April']);
    });

});