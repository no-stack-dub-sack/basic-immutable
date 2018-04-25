function baseAsMutable(objectOrArray) {
    const { cloneDeep } = require('lodash');
    const _Immutable = require('../../index');

    const copy = cloneDeep(objectOrArray);
    return _Immutable(copy, false);
}

module.exports = baseAsMutable;
