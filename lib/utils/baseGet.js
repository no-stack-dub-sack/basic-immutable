const { get } = require('lodash');

function baseGet(objectOrArray, propPath, defaultValue) {
    const { validatePath } = require('./index');

    if (typeof defaultValue === 'undefined')
        validatePath.call(objectOrArray, propPath, 'get');
    return get(objectOrArray, propPath, defaultValue);
}

module.exports = baseGet;
