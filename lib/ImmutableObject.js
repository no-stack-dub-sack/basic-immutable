const merge = require('lodash/merge');
const utils = require('./utils/index');
const isEqual = require('lodash/isEqual');
const castPath = require('lodash/_castPath');
const cloneDeep = require('lodash/cloneDeep');

function ImmutableObject(immutable, freeze) {

    const Immutable = require('../index');

    // gets value at a given path, read only
    Object.defineProperty(immutable, 'get', {
        value: function (propPath, defaultValue) {
            return utils.baseGet(this, propPath, defaultValue);
        }
    });

    // sets value at path, like ImmutableJS setIn
    Object.defineProperty(immutable, 'set', {
        value: function (propPath, value) {
            return utils.baseSet(this, propPath, value);
        }
    });

    // like set but takes updater to produce value
    Object.defineProperty(immutable, 'update', {
        value: function (propPath, updater) {
            return utils.baseUpdate(this, propPath, updater);
        }
    });

    // uses ._ internals to delete element at path
    Object.defineProperty(immutable, 'delete', {
        value: function (_path) {
            const path = castPath(_path, this);
            const next = cloneDeep(this);
            return utils.baseDelete(path, next);
        }
    });

    // merges target with source, source must
    // conform to shape of the original obj
    Object.defineProperty(immutable, 'merge', {
        value: function (...sources) {
            utils.verifySources(this, sources);
            const copy = cloneDeep(this);
            const next = merge(copy, ...sources);
            return Immutable(next, true);
        }
    });

    // like merge, but allows merging in an object
    // whose shape does not conform to target's shape
    Object.defineProperty(immutable, 'mergeTolerant', {
        value: function (...sources) {
            const copy = cloneDeep(this);
            const next = merge(copy, ...sources);
            return Immutable(next, true);
        }
    });

    // extends lodash's isEqual to perform deep equal
    // check between this and passed argument object
    Object.defineProperty(immutable, 'equals', {
        value: function (compare) {
            const js = this.toJS();
            return isEqual(js, compare);
        }
    });

    // pulls object's values into array, if object
    // has nested objects, those will be preserved
    // returns a shiny new BasicImmutable array obj
    Object.defineProperty(immutable, 'toArray', {
        value: function () {
            const arr = [];
            for (const k in this) {
                arr.push(this[k]);
            }
            return Immutable(arr);
        }
    });

    // returns non-frozen copy, with Immutable utils
    // is immutable again once another method called
    Object.defineProperty(immutable, 'asMutable', {
        value: function () {
            return utils.baseAsMutable(this);
        }
    });

    // return plain-old JS, no utils, pass true to freeze
    Object.defineProperty(immutable, 'toJS', {
        value: function (frozen) {
            let pojo = {};
            for (const prop in this) {
                pojo[prop] = this[prop];
            }
            if (frozen === true) {
              return Object.freeze(pojo);
            }
            return pojo;
        }
    });

    if (!freeze)
        return immutable;
    return Object.freeze(immutable)
}

module.exports = ImmutableObject;
