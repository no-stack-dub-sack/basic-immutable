function verifySources(target, sources) {
    const { errors } = require('./index');
    for (const obj of sources) {
        for (const prop in obj) {
            if (!target.hasOwnProperty(prop))
                throw new Error(errors.MERGE(prop));
        }
    }
}

module.exports = verifySources;
