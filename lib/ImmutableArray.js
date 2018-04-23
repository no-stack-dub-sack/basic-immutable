const utils = require('./utils/index');
const castPath = require('lodash/_castPath');
const { cloneDeep, flatten, flattenDeep, isEqual, pull } = require('lodash');

function ImmutableArray(immutable, freeze) {

    const Immutable = require('../index');

    // ------------------------------------- //
    // override native Array mutator methods //
    // with their EasyImmutable counterparts //
    // ------------------------------------- //

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
                throw new TypeError(utils.errors.COMPARISON);
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

    // -------------------------------------- //
    // EasyImmutable Additional Array Methods //
    // -------------------------------------- //

    // like get and getIn from Immutable.js, takes
    // an index string/num or propPath string/array
    Object.defineProperty(immutable.array, 'get', {
        value: function (propPath, value) {
            return utils.baseGet(immutable.array, propPath, value);
        }
    });

    // like set and setIn from Immutable.js, takes
    // an index string/num or propPath string/array
    Object.defineProperty(immutable.array, 'set', {
        value: function (propPath, value) {
            return utils.baseSet(immutable.array, propPath, value);
        }
    });

    // like get and getIn from Immutable.js, takes
    // an index string/num or propPath string/array
    Object.defineProperty(immutable.array, 'update', {
        value: function (propPath, updater) {
            return utils.baseUpdate(immutable.array, propPath, updater);
        }
    });

    // deletes element at a given path, string or array
    Object.defineProperty(immutable.array, 'delete', {
        value: function (_path) {
            const path = castPath(_path, immutable.array);
            const next = cloneDeep(immutable.array);
            return utils.baseDelete(path, next);
        }
    });

    // immutable extension of lodash pull, removes
    // all vals passed as args and returns new arr
    Object.defineProperty(immutable.array, 'pull', {
        value: function (deep, ...values) {
            const copy = cloneDeep(immutable.array);
            (function _pull(arr){
                deep === true &&
                    arr.forEach(el =>
                        Array.isArray(el)
                            && _pull(el));
                pull(arr, ...values)
            })(copy);
            return Immutable(copy, true);
        }
    });

    // immutable extension of lodash flatten/flattenDeep
    Object.defineProperty(immutable.array, 'flatten', {
        value: function (deep) {
            let copy = deep === true
                ? flattenDeep(immutable.array)
                : flatten(immutable.array);
            return Immutable(copy, true);
        }
    });

    // extends lodash's isEqual to perform deep equality
    // check between this and passed argument object
    Object.defineProperty(immutable.array, 'equals', {
        value: function (compare) {
            return isEqual(immutable.array, compare);
        }
    });

    // maps over array and returns and object, keys as
    // defined by the second argument/callback function
    // increments a-zA-Z chars & numbers, or Array.map cb
    Object.defineProperty(immutable.array, 'toObject', {
        value: function (keyOrKeyGenFunc) {
            return utils.baseToObject(immutable.array, keyOrKeyGenFunc);
        }
    });

    // returns non-frozen copy, with Immutable utils
    // is immutable again once another method called
    Object.defineProperty(immutable.array, 'asMutable', {
        value: function () {
            return utils.baseAsMutable(immutable.array);
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
