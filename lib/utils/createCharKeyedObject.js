const { errors } = require('./index');

function getCharCode(char) {
    let charCode = char.charCodeAt(0);
    if ((charCode > 90 && charCode < 97) || charCode < 65 || charCode > 122) {
        throw new Error(errors.INVALID_CHAR);
    }
    return charCode;
}

function incrementCharCode(charCode) {
    if (charCode === 122) return 97;
    if (charCode === 90) return 65;
    return charCode + 1;
}

function generateCharKey(charCode, obj) {
    let ogKey = String.fromCharCode(charCode);
    let key = String.fromCharCode(charCode);
    let isUndef = typeof obj[key] === 'undefined';
    let times = 2;
    while (!isUndef) {
       key = ogKey.repeat(times++);
       isUndef = !obj[key];
    }

    return key;
}

function createCharKeyedObject(array, char) {
    const obj = {};
    let charCode = getCharCode(char);

    for (const el of array) {
        const key = generateCharKey(charCode, obj);
        obj[key] = el;
        charCode = incrementCharCode(charCode);
    }

    return obj;
}

module.exports = createCharKeyedObject;
