const { cloneDeep, update } = require('lodash');
const { errors } = require('./index');

function baseUpdate(objectOrArray, propPath, updater) {
    const _Immutable = require('../../index');
    const { validatePath } = require('./index');

    if (typeof updater !== 'function')
        throw new TypeError(errors.UPDATER);
    validatePath.call(objectOrArray, propPath);
    const copy = cloneDeep(objectOrArray);
    const next = update(copy, propPath, updater);
    return _Immutable(next, true);
}

module.exports = baseUpdate;
