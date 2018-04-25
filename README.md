# basic-immutable

### About
An unsophisticated, single-dependency, [TypeScript friendly](#basicimmutable--typescript) immutability library for creating backwards JavaScript compatible objects and arrays, with a few extra features, just for fun. Under the hood, this library is really just an immutable extension of several [Lodash](https://github.com/lodash/lodash) methods; thrown together quickly and easily; nothing too fancy here :smile:

### Background
For the million or so immutability libraries out there, surprisingly, I was not able to find one that suited my needs perfectly. So I'm adding one more to the mix. Here's a brief summary of my favorite features of BasicImmutable, that I've found disparately across several libraries, but never together in one:

- Very [TypeScript friendly](#basicimmutable--typescript) (I had difficulty with ImmutableJS in particular for this one). Great for working with Redux apps in TypeScript, as complex types can be assigned to your state objects just as if you were working with a plain JavaScript object
- Completely backwards JavaScript compatible, use BasicImmutable data structures in your code like any other JavaScript objects
- Re-implements all native JavaScript array mutator methods as immutable; e.g. `Array.push()` returns a new array with items appended, instead of returning the length of the array.
- Ability to easily strip away the API (with `toJS`), and convert to a 100% plain-old JavaScript object, in case you still find edge cases in which there are unintended side-effects (such as in AngularJS, where using other libraries broke certain functionalities for me)
- Relatively small API surface area to learn; in addition to understanding that all array mutator methods are now immutable, there are only about 10 BasicImmutable specific methods to learn. Most of which should be very familiar to you if you've ever used Lodash.

However, that this library is so tailored to my needs, means that it might not be right for you, or you may simply be happier with one of the alternatives. And there has not been any special attention paid to performance or speed - the library is as fast as Lodash is. Try it out if you'd like, otherwise, no big deal. My intent in publishing this, was just in case even one other person out there was facing the same struggles as I was, they might find this useful.

# Getting Started

### Installation
- To install, run `yarn add basic-immutable` or `npm install --save basic-immutable`
- TypeScript typings are included and do not need to installed separately.

Pass your data structure to `Immutable()` and call `toJS()` to transform them back into POJO (plain-old JavaScript objects). [Full list of methods](#available-methods) and examples can be found in the [API section](#api) below.
### Basic examples

`ImmutableObject` with TypeScript:
```ts
import Immutable from 'basic-immutable';

interface Community {
  isLoading: boolean;
  users: {
    id: number;
    name: string;
  }[]
}

const community = Immutable<Community>({
  isLoading: true,
  users: [{
    id: 1,
    name: 'Raul'
  }, {
    id: 2,
    name: 'Jenny'
  }]
});

const updated = community
  .merge({ isLoading: false })
  .set('users[2]', { id: 3, name: 'Rhonda' });
```

`ImmutableArray` with JavaScript:
```js
const userStatus = Immutable([
  { name: 'Brittany', active: false },
  { name: 'Noah', active: true },
  { name: 'Jitendra', active: true }
]);

const userStatus1 = userStatus.push({
  name: 'Mikael',
  active: false
}, {
  name: 'Maria',
  active: true
}); // returns new ImmutableArray, not length

const userStatus2 = userStatus1.set(['0', 'active'], true).delete(1);
// the original userStatus is unchanged

// is just an array with extended functionality
// can still iterate over as normal
for (let el of userStatus2) {
  console.log(el.name, el.active)
}
// prints:
// 'Brittany' true
// 'Jitendra' true
// 'Mikael' false
// 'Maria' true
```

# API

### Available Methods:
- ImmutableObject / ImmutableArray
  - [get](#getpath)
  - [set](#setpath-value)
  - [update](#updatepath-value)
  - [delete](#deletepath)
  - [equals](#equals)
  - [asMutable](#asmutable)
  - [toJS](#tojs)
- ImmutableObject
  - [merge](#mergesources)
  - [mergeTolerant](#mergetolerantsources)
  - [toArray](#toarray)
- ImmutableArray
  - [pull](#pullpulldeep-values)
  - [flatten](#flattendeep)
  - [toObject](#toobjectkeyinitializer)
  - [all methods](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array#Methods) available on plain old JavaScript arrays**

__**An important note about `BasicImmutable` arrays:__
- Arrays created with `Immutable()` are still just JavaScript arrays under the hood, which means that all of the native array methods are still available to you, and all non-mutator methods behave as normal (`filter`, `map`, `reduce`, `includes`, `indexOf`, etc.). However, all [mutator methods](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/prototype#Mutator_methods) have been re-implemented as immutable.
- For example, `Immutable([1, 2, 3]).push(1)`, rather than returning the array's length after performing the push operation, will instead return a new `BasicImmutable` array (the original array is, of course, unmutated).

A full list of the re-implemented non-mutator methods is below, __which all return new BasicImmutable arrays__:

| Method     | Description                                                                                        |
|------------|----------------------------------------------------------------------------------------------------|
| push       | Returns a new `BasicImmutable` array with one or more elements added to the end                    |
| pop        | Returns a new `BasicImmutable` array with the last element removed                                 |
| shift      | Returns a new `BasicImmutable` array with the first element removed                                |
| unshift    | Returns a new `BasicImmutable` array with one or more elements added to the front                  |
| splice     | Returns a new `BasicImmutable` array with elements added and/or removed                            |
| sort       | Returns a new `BasicImmutable` array with the elements sorted                                      |
| reverse    | Returns a new `BasicImmutable` array with the order of the elements reversed                       |
| copyWithin | Returns a new `BasicImmutable` array with a sequence of array elements copied within the array     |
| fill       | Returns a new `BasicImmutable` array filled from a start index to an end index with a static value |

### BasicImmutable & TypeScript

__An important note about working with `BasicImmutable` and TypeScript:__ All methods that return a new, modified object or array will accept type arguments via the generic versions of their typings, so that a new type can be assigned should the given operation change the shape of your object or array.

For example:

```ts
const obj = Immutable<{ a: number, b: number }>({ a: 6, b: 2 })

const obj1 = obj.delete('a'); // inferred type of obj1 is still ImmutableObject<{ a: number; b: number; }>
```
This is incorrect. To ensure the object maintains type safety and accuracy, use the generic form of the method:
```ts
const obj2 = obj.delete<{ b: number; }>('a'); // type is now ImmutableObject<{ b: number; }>, which is correct
```

This might also be useful for converting an array's type, when popping, pushing, or otherwise modifying the returned array.
```ts
const users = Immutable<string[]>([['Pete', 'online'], ['Jared', 'offline']]);

// create new array and assign tuple-like type of ImmutableArray<'Jared' | 'online>

const jared = users.set([1, 1], 'online').shift<'Jared' | 'online'>().flatten(); // ['Jared','online']
```
This approach will work for all modifying methods: `set`, `update`, `delete`, `merge` (ImmutableObject only), `mergeTolerant` (ImmutableObject only), `pull` (ImmutableArray only), `fill` (ImmutableArray only), etc.

Of course, if your object or array is less strictly typed to begin with, this could be a non-issue, so there is a balancing act between type-safety and what works best for you and your particular use-case:
```ts
const obj = Immutable<{ [key: string]: number }>({ a: 6, b: 2 })

// OK! but not super type-safe
const obj1 = obj.delete('a'); // inferred type of obj1 is still ImmutableObject<{ [key: string]: number; }>
```

## get(path)
Gets the value at a given path of an `ImmutableObject` or `ImmutableArray` and returns it. _Uses Lodash's `_.get()`._

__Parameters:__

`path` Number, path string, or path array

```js
const arr = Immutable(['a', 'b', { a: 1, b: 2}]);
const obj = Immutable({ a: 1, b: [3, 9], c: ['s', 't', 'u'] });

obj.get('a.b[0]'); // 3
obj.get(['a', 'c', '0']); // 's'

arr.get(1); // 'b'
arr.get('2.a'); // 1
```
:point_up: [Run](https://repl.it/@no_stack_dub_sack/GetExample)

## set(path, value)
Returns a new `ImmutableObject` or `ImmutableArray` with value set at the given path. _Uses Lodash's `_.set()`._

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

## update(path, updater)
Like `set` except accepts an updater function to produce the value to set. _Uses Lodash's `_.update()`._

__Parameters:__

`path` Number, path string, or path array

`updater` The function to produce the updated value

```js
const arr = Immutable(['a', 'b', { a: 1, b: 2}]);
const obj = Immutable({ a: 1, b: [3, 9], c: ['s', 't', 'u'] });

const obj1 = obj.update(['a', 'c', '2'], (str) =>  str + ' r cool!');
const obj2 = obj.update('a.b[0]', (n) => n * 3);
const arr1 = arr.update(0, (str) => str.toUpperCase());
const arr2 = arr.update('2.a', (n) => n + 10);
```
:point_up: [Run](https://repl.it/@no_stack_dub_sack/UpdateExample)

## delete(path)
Returns a new `ImmutableObject` or `ImmutableArray` with element at a given path or position removed.

__TypeScript Tip:__ To maintain type-safety, be careful to re-type your object with the `delete` generic if the deletion causes a conflict with the base type originally defined or inferred for you object. See the note [here](#PLACEHOLDER) about working with BasicImmutable and TypeScript.

__Parameters:__

`path` Number, path string, or path array

With TypeScript:
```ts
interface IObj { a: number; b: number; c: (number | object)[]; }
const obj = Immutable<IObj>({ a: 1, b: 2, c: [ 1, 2, { x: 1, y: 2 }]})

// delete nested elements
const obj1 = obj.delete('c[2].x');

// re-assign type
const obj2 = obj1.delete<{ a: number; b: number; }>('c'); // { a: 1, b: 2 }

const arr = Immutable<number | number[]>([1, 2, [3, 4, 5]]);
const arr1 = arr.delete([2, 1]) // [1, 2, [3, 5]]
const arr2 = arr1.delete<number>(2) // type ImmutableArray<number>, [1, 2]
```
With JavaScript:
```js
const obj = Immutable({ a: 1, b: [ 1, 2, { x: 1, y: 2 }]})
const arr = Immutable([1, 2, [3, 4, 5]]);

// delete nested elements
const obj1 = obj.delete('b[2].x'); // { a: 1, b: [ 1, 2, { y: 2 }]}
const arr1 = arr.delete([2, 1]); // [1, 2, [3, 5]]
```

:point_up: [Run](https://repl.it/@no_stack_dub_sack/DeleteExample)

## equals(comparison)
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

## asMutable
Converts to mutable object or array, i.e. basic-immutable methods are still available, but mutations are allowed until another basic-immutable modifying method is called (i.e. any method that returns a new `ImmutableObject` or `ImmutableArray`).

__NOTE:__ For arrays, methods that are traditionally mutator methods will still be performed immutably, and if called, will return the array to it's immutable state.

__Parameters:__ None

```js
const arr = Immutable([1, 2, 3]);
const obj = Immutable({ a: 1, b: 2 });

const arr1 = arr.asMutable();
arr1[0] = 'allowed';
console.log(arr1.get(0)); // 'allowed'

const arr2 = arr1.push(4);
arr2[0] = 'not allowed'; // nope! push() was called, the resulting array is immutable

const obj1 = obj.asMutable();
obj1.a = 2; // { a: 2, b: 2 }
```
:point_up: [Run](https://repl.it/@no_stack_dub_sack/AsMutableExample)

## toJS
Converts `ImmutableObject` or `ImmutableArray` to plain-old JavaScript and returns it (can be mutated, basic-immutable API helper methods are stripped away).

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

## merge(...sources)
Merges source object(s) into target object and returns updated target as a new `ImmutableObject`. Will throw if any of the source objects contain keys uncommon to the target object. This is valuable to prevent accidentally merging the wrong source. __TIP:__ Use TypeScript to catch this error before runtime! _Uses Lodash's `_.merge()`._

Use `mergeTolerant` for a less strict merge.

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

## mergeTolerant(...sources)
Like `merge`, except this method allows source objects of different shapes (containing keys uncommon to the target object) to be merged. _Uses Lodash's `_.merge()`_.

__Typescript Tip:__ If using TypeScript, have no fear, this will still be a type-safe operation. The typings instruct TypeScript to create a new intersection type from the type of your original object and the type of the source object or objects. Be explicit to avoid loose type inference by passing your new type(s) to the `mergeTolerant` generic (see example below).

__Parameters:__

`source` or `…sources` One or more source objects.

With TypeScript:
```ts
const obj = Immutable<{ a: 'yes'; b: 'no' }>({ a: 'yes', b: 'no'});

const good = obj.mergeTolerant({ c: 'maybe' });
// is inferred type { a: "yes"; b: "no"; } & { c: string; }

interface IMaybe { c: 'maybe'; }
const better = obj.mergeTolerant<IMaybe>({ c: 'maybe' });
// is safer type { a: "yes"; b: "no"; } & { c: "maybe"; }
```
With JavaScript:
```js
const obj = Immutable({ a: 1, b: 2 });

const obj1 = obj.mergeTolerant({ c: 3 });
// { a: 1, b: 2, c: 3 }
```
:point_up: [Run](https://repl.it/@no_stack_dub_sack/MergeTolerantExample)

## toArray
Returns a new `ImmutableArray` array containing the values of the object's keys.

__TypeScript Tip:__ If using TypeScript, and your object has been explicitly typed, e.g. `Immutable<{ a: 1, b: 2 }>({a: 1, b: 2});`, and no type argument is explicitly passed to the `toArray` generic, this method will return a tuple-like array, which is strictly typed to allow only the values found in your object. For a less strictly typed array, pass a type argument, e.g. `toArray<number>();`, this way you will be able to add additional data with the type `number` to your array.

__Parameters:__ None

With TypeScript:
```ts
const obj = Immutable({ a: 1, b: 2 })
const obj1 = Immutable<{ a: 1, b: 2 }>({a: 1, b: 2})

const arr = obj1.toArray();
// inferred type: ImmutableArray<1, 2>

// will allow additional 1s and 2s to be added
arr.push(1, 1, 2, 2); // OK!

// but attempting to add other values will cause an error
arr.push(3); // Error!
// [ts] Argument of type '3' is not assignable to parameter of type '1 | 2'.

const arr1 = obj1.toArray<number>();
// type: ImmutableArray<number>, i.e. number[]
arr1.push(3, 4, 5); // OK!

const arr2 = obj.toArray() // inferred type: number[]
// because obj1's type was inferred, not explicitly defined
```
With JavaScript:
```js
const obj = Immutable({ a: 1, b: 2, c: 3 });

const arr = obj.toArray(); // [1, 2, 3]
```
:point_up: [Run](https://repl.it/@no_stack_dub_sack/ToArrayExample)

## pull(deep, ...values)
Removes all provided values from an `ImmutableArray` using SameValueZero for equality comparisons, either from the top level array, or recursively. _Uses Lodash's `_.pull()`_.

__Parameters:__

`pullDeep` Indicates whether or not to pull value(s) only from the top level array, or to pull value(s) recursively.

With TypeScript:
```ts
const arr = Immutable([1, 2, 3, '4', '5']);
// inferred type ImmutableArray<number | string>, i.e. (number | string)[]

// pass type argument to re-type the ImmutableArray
const arr1 = arr.pull<number>(false, '4', '5'); // [1, 2, 3]
// now ImmutableArray<number>, i.e. number[]
```
With JavaScript:
```js
const arr = Immutable([1, 3, 3, 4, [1, 3, 3, 4, [1, 3]], 1, 3]);

const arr1 = arr.pull(false, 3); // [ 1, 4, [ 1, 3, 3, 4, [ 1, 3 ] ], 1 ]

const arr2 = arr1.pull(true, 3, 4); // [ 1, [ 1, [ 1 ] ], 1 ]
```
:point_up: [Run](https://repl.it/@no_stack_dub_sack/PullExample)

## flatten(deep?)
Flattens `ImmutableArray` either a single level deep or recursively. _Uses Lodash's `_.flatten()`_.

__Parameters:__

`deep` **_[optional]_** boolean, indicates whether or not to flatten recursively.

With TypeScript:
```ts
const arr = Immutable([0, 0, [1, 1], [2, 2, [3, 3]]]);
// inferred type ImmutableArray<number | (number | number[])[]>

const flat = arr.flatten(); // [0, 0, 1, 1, 2, 2, [3, 3]]

// pass type argument to re-type the ImmutableArray
const flatter = arr.flatten<number>(true);
// now ImmutableArray<number>, i.e. number[]
```
With JavaScript:
```js
const arr = Immutable([0, 0, [1, 1], [2, 2, [3, 3]]]);

const flat = arr.flatten(); // [0, 0, 1, 1, 2, 2, [3, 3]]

const flatter = arr.flatten(true); // [0, 0, 1, 1, 2, 2, 3, 3]
```
:point_up: [Run](https://repl.it/@no_stack_dub_sack/FlattenExample)

## toObject(keyInitializer?)
Maps over array and converts to `ImmutableObject`. Keys-value pairs are produced by the elements in the array (values) and by providing a key-initializer argument as described below (keys).

__Parameters:__

`keyInitializer` **_[optional]_** A single-letter string, equivalent to `/[a-zA-Z]/`, number, or function synonymous with an `Array.map` callback.
- If provided a letter or number, keys will begin with that letter or number and be incremented for each element of the array.
- To designate custom keys, provide an `Array.map` callback instead (see example below).
- If undefined, keys will be equal to their values (numbers) or the stringified version of their values. Both `number` and `string` key indexers will be allowed.

With TypeScript:
```ts
const arr = Immutable(['a', 'b', 'c', 'd']);
const nested = Immutable([[1, 2], [3, 4], [5, 6], [7, 8]]);

/******** with no `keyInitializer` argument: ***********/
const obj1 = arr.toObject<{ [key: string]: string; }>();
// { a: 'a', b: 'b', c: 'c', d: 'd' }
// pass type argument to indicate correct key indexer, default is { [key: number]: T; [key: string]: T; }


/******** with string `keyInitializer` argument: ***********/
const obj2 = nested.toObject<{ [key: string]: number[]; }>('A');
// { A: [1, 2], B: [3, 4], C: [5, 6], D: [7, 8] }

// same as above with more strict typing
interface ObjFromArray { A: number[]; B: number[]; C: number[]; D: number[]; };
const obj2 = nested.toObject<ObjFromArray>('A');
// { A: [1, 2], B: [3, 4], C: [5, 6], D: [7, 8] }


/******** with number `keyInitializer` argument: ***********/
const obj4 = nested.toObject<{ [key: number]: number[]; }>(1);
// { 1: [1, 2], 2: [3, 4], 3: [5, 6], 4: [7, 8] }


/******** with Array.map `keyInitializer` argument: ***********/
const obj5 = nested.toObject<{ [key: number]: number[]; }>((arr) => arr[0] + arr[1]);
// { 3: [1, 2], 7: [3, 4], 11: [5, 6], 15: [7, 8] }

const obj6 = arr.toObject<{ [key: string]: string; }>((el) => el.toUpperCase());
// { A: 'a', B: 'b', C: 'c', D: 'd' }
```
With JavaScript:
```js
const arr = Immutable(['a', 'b', 'c', 'd']);
const nested = Immutable([[1, 2], [3, 4], [5, 6], [7, 8]]);

/******** with no `keyInitializer` argument: ***********/
const obj1 = arr.toObject();
// { a: 'a', b: 'b', c: 'c', d: 'd' }


/******** with string `keyInitializer` argument: ***********/
const obj2 = nested.toObject('A');
// { A: [1, 2], B: [3, 4], C: [5, 6], D: [7, 8] }


/******** with number `keyInitializer` argument: ***********/
const obj3 = nested.toObject(1);
// { 1: [1, 2], 2: [3, 4], 3: [5, 6], 4: [7, 8] }


/******** with Array.map `keyInitializer` argument: ***********/
const obj4 = nested.toObject((arr) => arr[0] + arr[1]);
// { 3: [1, 2], 7: [3, 4], 11: [5, 6], 15: [7, 8] }

const obj5 = arr.toObject((el) => el.toUpperCase());
// { A: 'a', B: 'b', C: 'c', D: 'd' }
```
:point_up: [Run](https://repl.it/@no_stack_dub_sack/ToObjectExample)

# Contributing
I slapped this together pretty quick, and it's not meant to be fancy or a miraculous feat of programming. That said, I'm sure there's still plenty of room for improvement. Contributing guidelines will be added soon, but for now, if there's any interest in contributing, please open an issue!
