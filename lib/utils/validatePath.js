const { has } = require('lodash');
const { errors } = require('./index');

function validatePath(propOrPropPath, method) {
    if (has(this, propOrPropPath)) {
        return true;
    }

    if (method === 'delete') {
        return false;
    }

    throw new Error(errors.PATH(propOrPropPath, method));
}

module.exports = validatePath;
