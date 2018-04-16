module.exports = {
    UPDATER: 'The "updater" argument must be a function.',
    INVALID_CHAR: 'Please provide a character equivalent to /[a-zA-Z]/',
    COMPARISON: 'The comparison function must be either a function or undefined',
    AS_OBJECT: 'Invalid argument. Please provide a number, function (Array.map callback), or string (single char equivalent to /[a-zA-Z]/)',
    PATH: (offender, method) => `The provided path "${offender}" cannot be resolved on target object. Check your code${method === 'get' ? ', or you may provide a default value.' : '.'}`,
    MERGE: (offender) => `Source object cannot be merged with target, key "${offender}" is not allowed: The "merge" method only allows merging of objects with common own properties, use "mergeTollerant" instead.`,
}
