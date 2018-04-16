const Immutable = require('../../index');

describe("EasyImmutable Array 'asObject' method", function () {

    it("correctly handles number argument", function () {
        const OG = Immutable(['a', 'b', 'c']);
        const object = OG.asObject(1);
        expect(object).toEqual({ 1: 'a', 2: 'b', 3: 'c' });
    });

    it("correctly handles function argument", function () {
        const OG = Immutable(['a', 'b', 'c']);
        const object = OG.asObject((l) => l.toUpperCase());
        expect(object).toEqual({ A: 'a', B: 'b', C: 'c' });
    });

    it("correctly handles char argument", function () {
        const OG = Immutable(['a', 'b', 'c']);
        const object = OG.asObject('j');
        expect(object).toEqual({ j: 'a', k: 'b', l: 'c' });
    });

    it("throws when provided invalid char argument", function () {
        const OG = Immutable(['a', 'b', 'c']);
        const throwsA = () => OG.asObject('[');
        const throwsB = () => OG.asObject('#');
        const throwsC = () => OG.asObject('@');
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
        const object = OG.asObject('a');
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

    it("throws when argument is ommited", function () {
        const OG = Immutable(['a', 'b', 'c']);
        const throws = () => OG.asObject();
        expect(throws).toThrow();
    });

});
