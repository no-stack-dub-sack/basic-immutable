function createSelfKeyedObject(array) {
    const obj = {};
    for (const el of array) {
      if (obj[el]) {
        throw new Error('Repeat keys are not allowed. Consider passing a keyInitializer argument instead');
      }
      obj[el] = el;
    }
    return obj;
}

module.exports = createSelfKeyedObject;