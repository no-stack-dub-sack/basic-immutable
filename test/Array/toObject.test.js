const Immutable = require('../../index');

describe("EasyImmutable Array 'toObject' method", function () {

    it("correctly handles undefined argument", function () {
        const OG = Immutable(['a', 'b', 'c']);
        const object = OG.toObject();
        expect(object).toEqual({ a: 'a', b: 'b', c: 'c' });
    });

    it("throws when repeat keys detected from undefined argument", function () {
        const OG = Immutable(['a', 'b', 'c', 'c']);
        const throws = () => OG.toObject();
        expect(throws).toThrow();
    });

    it("correctly handles number argument", function () {
        const OG = Immutable(['a', 'b', 'c']);
        const object = OG.toObject(1);
        expect(object).toEqual({ 1: 'a', 2: 'b', 3: 'c' });
    });

    it("correctly handles function argument", function () {
        const OG = Immutable(['a', 'b', 'c']);
        const object = OG.toObject((l) => l.toUpperCase());
        expect(object).toEqual({ A: 'a', B: 'b', C: 'c' });
    });

    it("correctly handles char argument", function () {
        const OG = Immutable(['a', 'b', 'c']);
        const object = OG.toObject('j');
        expect(object).toEqual({ j: 'a', k: 'b', l: 'c' });
    });

    it("throws when provided invalid char argument", function () {
        const OG = Immutable(['a', 'b', 'c']);
        const throwsA = () => OG.toObject('[');
        const throwsB = () => OG.toObject('#');
        const throwsC = () => OG.toObject('@');
        expect(throwsA).toThrow();
        expect(throwsB).toThrow();
        expect(throwsC).toThrow();
    });

    it("correctly handles recurring char keys", function () {
        let i = 0;
        const arr = []
        while (i <= 52) {
            arr.push(i++);
        }
        const OG = Immutable(arr);
        const object = OG.toObject('a');
        expect(object).toEqual({
            a: 0,  b: 1,  c: 2,  d: 3,  e: 4,  f: 5,  g: 6,
            h: 7,  i: 8,  j: 9,  k: 10, l: 11, m: 12,  n: 13,
            o: 14,  p: 15,  q: 16,  r: 17,  s: 18,  t: 19,  u: 20,
            v: 21,  w: 22, x: 23,  y: 24,  z: 25,  aa: 26,  bb: 27,
            cc: 28,  dd: 29,  ee: 30, ff: 31,  gg: 32,  hh: 33,  ii: 34,
            jj: 35,  kk: 36,  ll: 37,  mm: 38,  nn: 39,  oo: 40, pp: 41, qq: 42, rr: 43,
            ss: 44,  tt: 45,  uu: 46,  vv: 47,  ww: 48,  xx: 49,  yy: 50,  zz: 51,  aaa: 52
        });
    });

    it("throws when argument is unacceptable type", function () {
        const OG = Immutable(['a', 'b', 'c']);
        const throws = () => OG.toObject({});
        expect(throws).toThrow();
    });

    it("is chainable with immutable object methods", function () {
        const OG = Immutable(['a', 'b', 'c']);
        const test = OG.toObject(1).merge({ 1: 'z'})
        expect(test).toEqual({ 1: 'z', 2: 'b', 3: 'c' });
    });

});
