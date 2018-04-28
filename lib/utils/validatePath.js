function validatePath(objectOrArray, propOrPropPath, method) {
    const has = require('lodash/has');
    const { errors } = require('./index');

    if (has(objectOrArray, propOrPropPath)) {
        return true;
    }

    if (method === 'delete') {
        return false;
    }

    throw new Error(errors.PATH(propOrPropPath, method));
}

module.exports = validatePath;
