function createNumKeyedObject(array, num) {
    const obj = {};
    for (const el of array) {
        obj[num++] = el;
    }
    return obj;
}

module.exports = createNumKeyedObject;
