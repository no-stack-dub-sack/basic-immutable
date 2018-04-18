const Immutable = require('../../index');

describe("EasyImmutable Array, 'equals' method", function () {

    it("returns true when deep equal", function () {
        const state = [1, 2, 3, {a: 1 }, { a: [1, 2], b: () => 2 }];
        const immutable = Immutable(state);
        const test = immutable.equals(state);
        expect(test).toBe(true);
    });

    it("returns false when not deep equal", function () {
        const state = [1, 2, 3, {a: 1 }, { a: [1, 2], b: () => 2 }];
        const immutable = Immutable(state);
        const test = immutable.equals([]);
        expect(test).toBe(false);
    });

});