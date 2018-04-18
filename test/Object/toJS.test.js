const Immutable = require('../../index');

describe("EasyImmutable 'toJS' method", function () {

    it("has 'hidden' non-enumerable props before toJS()", function () {
        const OG = Immutable({ a: 1, b: 2 });
        const keysBefore = Object.getOwnPropertyNames(OG);
        expect(keysBefore.length).toBe(11);
        expect(OG).toEqual({ a: 1, b: 2 });
    });

    it("returns plain-old JS object, no non-enumerable props", function () {
        const OG = Immutable({ a: 1, b: 2 });
        const js = OG.toJS();
        const keysAfter = Object.getOwnPropertyNames(js);
        expect(keysAfter.length).toBe(2);
        expect(js).toEqual({ a: 1, b: 2 });
    });

});
