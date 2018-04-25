
function baseToObject(array, keyOrKeyGen) {
    let object;
    const { errors } = require('./index');
    const Immutable = require('../../index');
    const createNumKeyedObject = require('./createNumKeyedObject'),
          createSelfKeyedObject = require('./createSelfKeyedObject'),
          createCharKeyedObject = require('./createCharKeyedObject'),
          createCustomKeyedObject = require('./createCustomKeyedObject');

    if (typeof keyOrKeyGen === 'undefined') {
        object = createSelfKeyedObject(array);
    } else if (typeof keyOrKeyGen === 'number') {
        object = createNumKeyedObject(array, keyOrKeyGen);
    } else if (typeof keyOrKeyGen === 'string') {
        object = createCharKeyedObject(array, keyOrKeyGen);
    } else if (typeof keyOrKeyGen === 'function') {
        object = createCustomKeyedObject(array, keyOrKeyGen);
    }

    if (object) return Immutable(object);
    throw new TypeError(errors.AS_OBJECT);
}

module.exports = baseToObject;
