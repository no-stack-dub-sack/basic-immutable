function baseSet(objectOrArray, propPath, value) {
    const set = require('lodash/set');
    const _Immutable = require('../../index');
    const { validatePath } = require('./index');
    const cloneDeep = require('lodash/cloneDeep');

    validatePath(objectOrArray, propPath)
    const copy = cloneDeep(objectOrArray);
    const next = set(copy, propPath, value);
    return _Immutable(next, true);
}

module.exports = baseSet;
