const Immutable = require('../../index');

describe("EasyImmutable 'toJS' method", function () {

    it("has 'hidden' non-enumerable props before toJS()", function () {
        const OG = Immutable([1, 2]);
        const keysBefore = Object.getOwnPropertyNames(OG);
        expect(keysBefore.length).toBe(22);
        expect(OG).toEqual([1, 2]);
    });

    it("returns plain-old JS array, no non-enumerable props", function () {
        const OG = Immutable([1, 2]);
        const js = OG.toJS();
        const keysAfter = Object.getOwnPropertyNames(js);
        expect(keysAfter.length).toBe(3);
        expect(OG).toEqual([1, 2]);
    });

});
