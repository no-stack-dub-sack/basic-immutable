const { cloneDeep, set } = require('lodash');

function baseSet(objectOrArray, propPath, value) {
    const _Immutable = require('../../index');
    const { validatePath } = require('./index');

    validatePath.call(objectOrArray, propPath)
    const copy = cloneDeep(objectOrArray);
    const next = set(copy, propPath, value);
    return _Immutable(next, true);
}

module.exports = baseSet;
