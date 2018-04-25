function baseGet(objectOrArray, propPath, defaultValue) {
    const { get } = require('lodash');
    const { validatePath } = require('./index');

    if (typeof defaultValue === 'undefined')
        validatePath(objectOrArray, propPath, 'get');
    return get(objectOrArray, propPath, defaultValue);
}

module.exports = baseGet;
