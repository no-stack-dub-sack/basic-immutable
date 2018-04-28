function baseAsMutable(objectOrArray) {
    const _Immutable = require('../../index');
    const cloneDeep = require('lodash/cloneDeep');

    const copy = cloneDeep(objectOrArray);
    return _Immutable(copy, false);
}

module.exports = baseAsMutable;
