module.exports = {
    COMPARISON: 'The comparison function must be either a function or undefined',
    INDEX_SCOPE: 'Index is out of scope. Please provide an index between -N+1 and N-1 where N is Array.length',
    AS_OBJECT: 'Invalid argument. Please provide undefined, a number, function (Array.map callback), or string (single char equivalent to /[a-zA-Z]/)',
    PATH: (offender, method) => `The provided path "${offender}" cannot be resolved on target object. Check your code${method === 'get' ? ', or you may provide a default value.' : '.'}`,
    MERGE: (offender) => `Source object cannot be merged with target, key "${offender}" is not allowed: The "merge" method only allows merging of objects with common own properties, use "mergeTollerant" instead.`,
}
