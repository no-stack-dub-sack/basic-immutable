const Immutable = require('../../index');

describe("BasicImmutable Object 'toJS' method", function () {

    it("has 'hidden' non-enumerable props before toJS()", function () {
        const OG = Immutable({ a: 1, b: 2 });
        const keysBefore = Object.getOwnPropertyNames(OG);
        expect(keysBefore.length).toBe(12);
        expect(OG).toEqual({ a: 1, b: 2 });
    });

    it("returns plain-old JS object, no non-enumerable props", function () {
        const OG = Immutable({ a: 1, b: 2 });
        const js = OG.toJS();
        const keysAfter = Object.getOwnPropertyNames(js);
        expect(keysAfter.length).toBe(2);
        expect(js).toEqual({ a: 1, b: 2 });
    });

    it("can be mutated if 'frozen' argument is not provided", function () {
        const OG = Immutable({ a: 1, b: 2 });
        const js = OG.toJS();
        js.a = 3
        expect(OG).toEqual({ a: 1, b: 2 });
        expect(js).toEqual({ a: 3, b: 2 });
    });

    it("cannot be mutated if 'frozen' argument is true", function () {
        const OG = Immutable({ a: 1, b: 2 });
        const js = OG.toJS(true);
        js.a = 3
        expect(OG).toEqual({ a: 1, b: 2 });
        expect(js).toEqual({ a: 1, b: 2 });
    });

});
