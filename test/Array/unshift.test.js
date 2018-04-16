const Immutable = require('../../index');

describe("EasyImmutable Array, 'unshift' method", function () {

    it("returns new array", function () {
        const OG = Immutable(['Jan', 'Feb', 'March']);
        const next = OG.unshift('Nov', 'Dec');
        expect(OG).toEqual(['Jan', 'Feb', 'March']);
        expect(next).toEqual(['Nov', 'Dec', 'Jan', 'Feb', 'March']);
    });

    it("is chainable", function () {
        const OG = Immutable(['Jan', 'Feb', 'March']);
        const next = OG.unshift('Nov', 'Dec').unshift('Oct');
        expect(OG).toEqual(['Jan', 'Feb', 'March']);
        expect(next).toEqual(['Oct', 'Nov', 'Dec', 'Jan', 'Feb', 'March']);
    });

});