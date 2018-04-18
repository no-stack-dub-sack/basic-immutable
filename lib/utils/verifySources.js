const { errors } = require('./index');

function verifySources(sources) {
    for (const obj of sources) {
        for (const prop in obj) {
            if (!this.hasOwnProperty(prop))
                throw new errors(errors.MERGE(prop));
        }
    }
}

module.exports = verifySources;