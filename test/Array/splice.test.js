const Immutable = require('../../index');

describe("EasyImmutable Array, 'splice' method", function () {

    it("returns new spliced array", function () {
        const OG = Immutable(['Jan', 'March', 'April', 'June']);
        const next = OG.splice(1, 0, 'Feb');
        expect(OG).toEqual(['Jan', 'March', 'April', 'June']);
        expect(next).toEqual(['Jan', 'Feb', 'March', 'April', 'June']);
    });

    it("is chainable", function () {
        const OG = Immutable(['Jan', 'March', 'April', 'June']);
        const next = OG.splice(1, 0, 'Feb').splice(4, 0, 'May');
        expect(OG).toEqual(['Jan', 'March', 'April', 'June']);
        expect(next).toEqual(['Jan', 'Feb', 'March', 'April', 'May', 'June']);
    });

});