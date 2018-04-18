const ImmutableArray = require('./lib/ImmutableArray');
const ImmutableObject = require('./lib/ImmutableObject');


/* TODO:
    * NEEDS MORE IN DEPTH TESTING OF toJS METHOD, CONVERTING DEEPLY NESTED OBJECTS WITH METHODS
    * Finish declaration file
    * Create docs
    * publish to NPM to test out declaration files
    *
    * SEAMLESS-IMMUTABLE PR! Needs default value type for this line:
    *   https://github.com/DefinitelyTyped/DefinitelyTyped/blob/
    *   b3c41ab6997d3b016d9567381e51a3fea8534e9e/types/seamless-immutable/index.d.ts#L46
*/


/*_________.                     .___                        __        ___.    __                  ____.
\_   _____/____    _________.__.|   | _____   _____  __ ___/  |______ \_ |__ |  |   ____          |    | ______
 |    __)_\__  \  /  ___<   |  ||   |/     \ /     \|  |  \   __\__  \ | __ \|  | _/ __ \         |    |/  ___/
 |        \/ __ \_\___ \ \___  ||   |  Y Y  \  Y Y  \  |  /|  |  / __ \| \_\ \  |_\  ___/     /\__|    |\___ \
/_______  (____  /____  >/ ____||___|__|_|  /__|_|  /____/ |__| (____  /___  /____/\___  > /\ \________/____  >
        \/     \/     \/ \/               \/      \/                 \/    \/          \/  \/               \*/

// util for creating immutable plain-old JavaScript objects w/ handy api, extending lodash functionlities for easy &
// succinct immutable operations. Intended for use with Redux reducers. Import from immutable.ts to use with typings.

function _Immutable(objectOrArray, freeze = true) {

    function Immutable() {
        if (Array.isArray(objectOrArray)) {
            this.array = objectOrArray;
        } else {
            for (const key in objectOrArray) {
                this[key] = objectOrArray[key];
            }
        }
    }

    const immutable = new Immutable(objectOrArray);

    if (immutable.array) {
        return ImmutableArray(immutable, freeze);
    } else {
        return ImmutableObject(immutable, freeze);
    }
}

module.exports = _Immutable;
