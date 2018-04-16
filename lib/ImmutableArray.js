const { cloneDeep, pull } = require('lodash');
const { baseAsMutable, baseAsObject, baseGet, baseSet, baseUpdate, errors } = require('./utils/index');

function ImmutableArray(immutable, freeze) {

    const Immutable = require('../index');

    /*&*************************************&*\
       override native Array mutator methods
       with their EasyImmutable counterparts
    \*&*************************************&*/

    // differs from Array.push in that it returns the
    // new array with value(s) appended to the end
    Object.defineProperty(immutable.array, 'push', {
        value: function (...values) {
            const copy = cloneDeep(immutable.array);
            copy.push(...values);
            return Immutable(copy, true);
        }
    });

    // differs from Array.unshift in that it returns
    // new array with value(s) appended to the start
    Object.defineProperty(immutable.array, 'unshift', {
        value: function (...values) {
            const copy = cloneDeep(immutable.array);
            copy.unshift(...values);
            return Immutable(copy, true);
        }
    });

    // differs from Array.pop in that it returns the
    // new array with last index popped off the end
    Object.defineProperty(immutable.array, 'pop', {
        value: function () {
            const copy = cloneDeep(immutable.array);
            copy.pop();
            return Immutable(copy, true);
        }
    });

    // differs from Array.pop in that it returns
    // the new array with 1st shifted off the front
    Object.defineProperty(immutable.array, 'shift', {
        value: function () {
            const copy = cloneDeep(immutable.array);
            copy.shift();
            return Immutable(copy, true);
        }
    });

    // the following methods are like their mutable
    // counterparts except they return new arrays:
    Object.defineProperty(immutable.array, 'splice', {
        value: function (start, deleteCount, ...values) {
            const copy = cloneDeep(immutable.array);
            copy.splice(start, deleteCount, ...values);
            return Immutable(copy, true);
        }
    });

    Object.defineProperty(immutable.array, 'reverse', {
        value: function () {
            const copy = cloneDeep(immutable.array);
            copy.reverse();
            return Immutable(copy, true);
        }
    });

    Object.defineProperty(immutable.array, 'sort', {
        value: function (comparisonFunction) {
            if (typeof comparisonFunction !== 'function' &&
                typeof comparisonFunction !== 'undefined')
                throw new TypeError(errors.COMPARISON);
            const copy = cloneDeep(immutable.array);
            copy.sort(comparisonFunction);
            return Immutable(copy, true);
        }
    });

    Object.defineProperty(immutable.array, 'copyWithin', {
        value: function (target, start, end) {
            const copy = cloneDeep(immutable.array);
            copy.copyWithin(target, start, end);
            return Immutable(copy, true);
        }
    });

    Object.defineProperty(immutable.array, 'fill', {
        value: function (target, start, end) {
            const copy = cloneDeep(immutable.array);
            copy.fill(target, start, end);
            return Immutable(copy, true);
        }
    });

    /*&**************************************&*\
       EasyImmutable Additional Array Methods
    \*&**************************************&*/

    // like set and setIn from Immutable.js, takes
    // an index string/num or propPath string/array
    Object.defineProperty(immutable.array, 'set', {
        value: function (propPath, value) {
            return baseSet(immutable.array, propPath, value);
        }
    });

    // like get and getIn from Immutable.js, takes
    // an index string/num or propPath string/array
    Object.defineProperty(immutable.array, 'get', {
        value: function (propPath, value) {
            return baseGet(immutable.array, propPath, value);
        }
    });

    // like get and getIn from Immutable.js, takes
    // an index string/num or propPath string/array
    Object.defineProperty(immutable.array, 'update', {
        value: function (propPath, updater) {
            return baseUpdate(immutable.array, propPath, updater);
        }
    });

    // immutable extension of lodash pull, removes
    // all vals passed as args and returns new arr
    Object.defineProperty(immutable.array, 'pull', {
        value: function (...values) {
            const copy = cloneDeep(immutable.array);
            pull(copy, ...values);
            return Immutable(copy, true);
        }
    });

    // maps over array and returns and object, keys as
    // defined by the second argument/callback function
    // increments a-zA-Z chars & numbers, or Array.map cb
    Object.defineProperty(immutable.array, 'asObject', {
        value: function (keyOrKeyGenFunc) {
            return baseAsObject(immutable.array, keyOrKeyGenFunc);
        }
    });

    // returns non-frozen copy, with Immutable utils
    // is immutable again once another method called
    Object.defineProperty(immutable.array, 'asMutable', {
        value: function () {
            return baseAsMutable(immutable.array);
        }
    });

    // return plain-old JS, no utils, unfrozen
    Object.defineProperty(immutable.array, 'toJS', {
        value: function () {
            let pojo = [];
            for (const el of immutable.array) {
                pojo.push(el)
            }
            return pojo;
        }
    });

    if (!freeze)
        return immutable.array;
    return Object.freeze(immutable.array);
}

module.exports = ImmutableArray;
