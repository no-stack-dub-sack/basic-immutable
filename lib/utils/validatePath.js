const { has } = require('lodash');
const { errors } = require('./index');

function validatePath(propOrPropPath, method) {
    if (has(this, propOrPropPath)) {
        return true;
    }

    throw new Error(errors.PATH(propOrPropPath, method));
}

module.exports = validatePath;
