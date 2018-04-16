function createCustomKeyedObject(array, func) {
    const obj = {};
    const keys = array.map(func);
    for (let i = 0; i < array.length; i++) {
        obj[keys[i]] = array[i];
    }
    return obj;
}

module.exports = createCustomKeyedObject;
