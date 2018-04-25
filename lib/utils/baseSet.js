function baseSet(objectOrArray, propPath, value) {
    const { cloneDeep, set } = require('lodash');
    const _Immutable = require('../../index');
    const { validatePath } = require('./index');

    validatePath(objectOrArray, propPath)
    const copy = cloneDeep(objectOrArray);
    const next = set(copy, propPath, value);
    return _Immutable(next, true);
}

module.exports = baseSet;
