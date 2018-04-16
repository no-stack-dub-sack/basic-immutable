const { errors } = require('./index');
const createNumKeyedObject = require('./createNumKeyedObject');
const createCharKeyedObject = require('./createCharKeyedObject');
const createCustomKeyedObject = require('./createCustomKeyedObject');

function baseAsObject(array, keyOrKeyGen) {
    let object;
    const Immutable = require('../../index');

    if (typeof keyOrKeyGen === 'number') {
        object = createNumKeyedObject(array, keyOrKeyGen);
    } else if (typeof keyOrKeyGen === 'string') {
        object = createCharKeyedObject(array, keyOrKeyGen);
    } else if (typeof keyOrKeyGen === 'function') {
        object = createCustomKeyedObject(array, keyOrKeyGen);
    }

    if (object) return Immutable(object);
    throw new TypeError(errors.AS_OBJECT);
}

module.exports = baseAsObject;
