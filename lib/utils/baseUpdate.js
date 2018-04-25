function baseUpdate(objectOrArray, propPath, updater) {
    const { cloneDeep, update } = require('lodash');
    const _Immutable = require('../../index');
    const { validatePath } = require('./index');

    if (typeof updater !== 'function')
        throw new TypeError('The "updater" argument must be a function.');
    validatePath(objectOrArray, propPath);
    const copy = cloneDeep(objectOrArray);
    const next = update(copy, propPath, updater);
    return _Immutable(next, true);
}

module.exports = baseUpdate;
