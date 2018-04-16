const { cloneDeep, merge } = require('lodash');
const { baseAsMutable, baseGet, baseSet, baseUpdate, errors } = require('./utils/index');

function ImmutableObject(immutable, freeze) {

    const Immutable = require('../index');

    // like set and setIn from Immutable.js
    // takes string or propPath string/array
    Object.defineProperty(immutable, 'set', {
        value: function (propPath, value) {
            return baseSet(this, propPath, value);
        }
    });

    // merges target with source, source must
    // conform to shape of the original obj
    Object.defineProperty(immutable, 'merge', {
        value: function (obj) {
            for (let prop in obj) {
                if (!this.hasOwnProperty(prop))
                    throw new errors(errors.MERGE(prop));
            }
            const copy = cloneDeep(this);
            const next = merge(copy, obj);
            return Immutable(next, true);
        }
    });

    // like merge, but allows merging in an object
    // whose shape does not conform to orignal state
    Object.defineProperty(immutable, 'mergeTolerant', {
        value: function (obj) {
            const copy = cloneDeep(this);
            const next = merge(copy, obj);
            return Immutable(next, true);
        }
    });

    // gets value at path, prop string / propPath
    // currys value into updater and performs op
    Object.defineProperty(immutable, 'update', {
        value: function (propPath, updater) {
            return baseUpdate(this, propPath, updater);
        }
    });

    // gets value at path, propName string
    // or propPath string/array, read only
    Object.defineProperty(immutable, 'get', {
        value: function (propPath, defaultValue) {
            return baseGet(this, propPath, defaultValue);
        }
    });

    // returns non-frozen copy, with Immutable utils
    // is immutable again once another method called
    Object.defineProperty(immutable, 'asMutable', {
        value: function () {
            return baseAsMutable(this);
        }
    });

    // return plain-old JS, no utils, unfrozen
    Object.defineProperty(immutable, 'toJS', {
        value: function () {
            let pojo = {};
            for (const prop in this) {
                pojo[prop] = this[prop];
            }
            return pojo;
        }
    });

    if (!freeze)
        return immutable;
    return Object.freeze(immutable)
}

module.exports = ImmutableObject;