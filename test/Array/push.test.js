const Immutable = require('../../index');

describe("EasyImmutable Array, 'push' method", function () {

    it("returns new array", function () {
        const OG = Immutable(['Jan', 'Feb', 'March']);
        const next = OG.push('April', 'May', 'June');
        expect(OG).toEqual(['Jan', 'Feb', 'March']);
        expect(next).toEqual(['Jan', 'Feb', 'March', 'April', 'May', 'June']);
    });

    it("is chainable", function () {
        const OG = Immutable(['Jan', 'Feb', 'March']);
        const next = OG.push('April', 'May').push('June');
        expect(OG).toEqual(['Jan', 'Feb', 'March']);
        expect(next).toEqual(['Jan', 'Feb', 'March', 'April', 'May', 'June']);
    });

});