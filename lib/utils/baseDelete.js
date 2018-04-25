function baseDelete(path, next) {
    const toKey = require('lodash/_toKey');
    const validatePath = require('./validatePath');
    const Immutable = require('../../index');

    if (!validatePath(next, path, 'delete')) {
        throw new Error('Invalid path. Cannot delete element from unresolvable path');
    }

    let ref = next, index = 0;
    const length = path.length-1;
    const target = path[length];

    while (ref != null && index < length) {
        ref = ref[toKey(path[index++])];
    }

    Array.isArray(ref)
       ? ref.splice(toKey(target), 1)
       : delete ref[toKey(target)];

    return Immutable(next, true);
}

module.exports = baseDelete;
