> __NOTE:__ The library is not yet published. This file is a work in progress, and the API is not fully docmented yet.

# easy-immutable

### About
An unsophisticated, single-dependency, TypeScript friendly immutability library for creating backwards JavaScript compatible objects and arrays, with a few extra features, just for fun. Under the hood, this library is really just an immutable extension of sever Lodash methods; thrown together quickly and easily; nothing too fancy here :smile:

Pass your data structure to `Immutable()` and call `toJS()` to transform them back into POJO (plain-old JavaScript objects). Full list of methods below.

### Background
For the million or so immutability libraries out there, surprisingly, I was not able to find one that suited my needs perfectly. So I'm adding one more to the mix. Here's a brief summary of my favorite features of BasicImmutable, that I've found disparately across several libraries, but never together in one:

- Very TypeScript friendly (I had difficulty with ImmutableJS in particular for this one)
- Completely backwards JavaScript compatible, use BasicImmutable data structures in your code like any other JavaScript objects
- Re-implements all native JavaScript array mutator methods as immutable; e.g. `Array.push()` returns a new array with items appended, instead of returning the length of the array.
- Ability to easily strip away the API (with `toJS`), and convert to a 100% plain-old JS object, in case you still find edge cases in which there are unintended side-effects (such as in AngularJS, where using other libraries broke certain functionalities for me)
- Relatively small API surface area to learn; in addition to understanding that all array mutator methods are now immutable, there are only about 10 BasicImmutable specific methods to learn. Most of which should be very familiar to you if you've ever used Lodash.

However, that this library is so tailored to my needs, means that it might not be right for you, or you may simply be happier with one of the alternatives. And there has not been any special attention paid to performance or speed - the library is as fast as Lodash is. Try it out if you'd like, otherwise, no big deal. My intent in publishing this, was just in case even one other person out there was facing the same struggles as I was, they might find this useful.

# API

## get [object, array]
Gets the value at a given path, and returns it. _Uses Lodash's `_.get()`._

__Parameters:__
`path` Number, path string, or path array

```js
const arr = Immutable(['a', 'b', { a: 1, b: 2}]);
const obj = Immutable({ a: 1, b: [3, 9], c: ['s', 't', 'u'] });

obj1.set('a.b[0]'); // 3
obj.get(['a', 'c', '0']); // 's'

arr.get(1); // 'b'
arr.get('2.a'); // 1
```
:point_up: [Run](https://repl.it/@no_stack_dub_sack/GetExample)

## set [object, array]
Sets value at a given path, and returns a new BasicImmutable object or array. _Uses Lodash's `_.set()`._

__Parameters:__
`path` Number, path string, or path array
`value` The value to set at the resolved path

```js
const arr = Immutable(['a', 'b', { a: 1, b: 2}]);
const obj = Immutable({ a: 1, b: [3, 9], c: ['s', 't', 'u'] });

const obj1 = obj.set(['a', 'c', '0'], 'sweet!');
const obj2 = obj1.set('a.b[0]', 9);

const arr1 = arr.set(0, (str) => 'A');
const arr2 = arr1.set('2.a', 10);
```
:point_up: [Run](https://repl.it/@no_stack_dub_sack/SetExample)

## update [object, array]
Like `set` except accepts an updater function to produce the value to set. _Uses Lodash's `_.update()`._

__Parameters:__
`path` Number, path string, or path array
`updater` The function to produce the updated value

```js
const arr = Immutable(['a', 'b', { a: 1, b: 2}]);
const obj = Immutable({ a: 1, b: [3, 9], c: ['s', 't', 'u'] });

const obj1 = obj.update(['a', 'c', '0'], (str) =>  str + ' r cool!');
const obj2 = obj.update('a.b[0]', (n) => n * 3);
const arr1 = arr.update(0, (str) => str.toUpperCase());
const arr2 = arr.update('2.a', (n) => n + 10);
```
:point_up: [Run](https://repl.it/@no_stack_dub_sack/UpdateExample)

## equals [object, array]
Performs a deep comparison (excluding the basic-immutable methods) between the object and array and the given argument. _Uses Lodash's `_.equals()`._

__Parameters:__
`comparison` Any (but an object or array makes the most sense).

```js
const arr = Immutable([1, 2, 3]);
const obj = Immutable({ a: 1, b: 2 });

arr.equals([1, 2, 3]); // true
obj.equals([1, 2, 3]); // false
```
:point_up: [Run](https://repl.it/@no_stack_dub_sack/EqualsExample)

## asMutable [object, array]
Converts to mutable object or array, i.e. basic-immutable methods are still available, but mutations are allowed until another basic-immutable method is called (unless that method is `toJS`).

__NOTE:__ For array's, methods that are traditionally mutator methods will still be performed immutably, and if called, will return the array to it's immutable state.

__Parameters:__ None

```js
const arr = Immutable([1, 2, 3]);
const obj = Immutable({ a: 1, b: 2 });

const arr1 = arr.asMutable();
arr1[0] = 'allowed';
console.log(arr1.get(0)); // 'allowed'
arr1[0] = 'not allowed'; // nope!

const obj1 = obj.asMutable();
obj1.a = 2; // { a: 2, b: 2 }
```
:point_up: [Run](https://repl.it/@no_stack_dub_sack/AsMutableExample)

## toJS [object, array]
Converts BasicImmutable object or array to plain-old JavaScript and returns it.

Useful for working with front-end libraries that don't play well with instance objects (such as AngularJS, which I had difficulties with in particular when trying to use other plain-old JS immutability libraries).

__Parameters:__ None

```js
const arr = Immutable([1, 2, 3]);
const obj = Immutable({ a: 1, b: 2 });

const jsArr = arr.toJS();
const jsObj = arr.toJS();

let props = Object.getOwnPropertyNames(jsArr);
props = props.concat(Object.getOwnPropertyNames(jsObj));

const isDefinitelyJustJS = !props.includes('asMutable'); // true
```
:point_up: [Run](https://repl.it/@no_stack_dub_sack/ToJSExample)

## merge [object]
Merges source object(s) into target object and returns updated target as a new BasicImmutable object. Will throw if any of the source objects contain keys uncommon to the target object. This is valuable to prevent accidentally merging the wrong source. __TIP:__ Use TypeScript to catch this error before runtime! _Uses Lodash's `_.merge()`._

Use `mergeTollerant` for a less strict merge.

__Parameters:__
`source` or `…sources` One or more source objects.

With TypeScript:
```ts
const obj = Immutable<{ a: string; b: number }>({ a: 'foo', b: 2 });

const obj1 = obj.merge({ b: 3 }, { a: 'bar' })
// { a: 'bar', b: 3 }

obj.merge({ c: 3 })
// Error! [TS] Object literal may only specify known properties, and 'c' does not exist in type 'Partial<{ a: string; b: number; }>'

obj.merge({ b: 'baz' })
// Error! [TS] Argument of type '{ b: string; }' is not assignable to parameter of type 'Partial<{ a: string; b: number; }>'
```
With JavaScript:
```js
const obj = Immutable({ a: 1, b: 2, c: 3 });

const obj1 = obj.merge({ a: 3 });
// { a: 3, b: 2, c: 3 }

const obj2 = obj1.merge({ c: 5 }, { b: 4 });
// { a: 3, b: 4, c: 5 }

obj.merge({ a: 3 }, { d: 'nope!' }); // throws! key 'd' is not found on source object
```
:point_up: [Run](https://repl.it/@no_stack_dub_sack/MergeExample)

## mergeTollerant [object]
Merges source object(s) into target object and returns updated target as BasicImmutable object. Unlike `merge`, this method allows objects of different shapes to be merged. _Uses Lodash's \_.merge()_.

__TIP:__ If using TypeScript, have no fear, this will still be a type-safe operation. The typings instruct TypeScript to create a new intersection type from the type of your original object and the type of the source object or objects. Be explicit to avoid loose type inference by passing your new type(s) to the `mergeTollerant` generic (see example below).

__Parameters:__
`source` or `…sources` One or more source objects.

With TypeScript:
```ts
const obj = Immutable<{ a: 'yes'; b: 'no' }>({ a: 'yes', b: 'no'});

const good = obj.mergeTollerant({ c: 'maybe' })
// is inferred type { a: "yes"; b: "no"; } & { c: string; }

interface IMaybe { c: 'maybe'; }
const better = obj.mergeTollerant<IMaybe>({ c: 'maybe' })
// is safer type { a: "yes"; b: "no"; } & { c: "maybe"; }
```
With JavaScript:
```js
const obj = Immutable({ a: 1, b: 2 });

const obj1 = obj.merge({ c: 3 });
// { a: 1, b: 2, c: 3 }
```
:point_up: [Run](https://repl.it/@no_stack_dub_sack/MergeTollerantExample)

