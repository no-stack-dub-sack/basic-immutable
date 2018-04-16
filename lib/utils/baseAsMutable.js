const { cloneDeep } = require('lodash');

function baseAsMutable(objectOrArray) {
    const _Immutable = require('../../index');

    const copy = cloneDeep(objectOrArray);
    return _Immutable(copy, false);
}

module.exports = baseAsMutable;
