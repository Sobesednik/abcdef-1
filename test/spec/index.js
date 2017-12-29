const assert = require('assert')
const abcdef_1 = require('../../src/')

const abcdef_1TestSuite = {
    'should be a function': () => {
        assert.equal(typeof abcdef_1, 'function')
    },
    'should call package without error': () => {
        assert.doesNotThrow(() => {
            abcdef_1()
        })
    },
}

module.exports = abcdef_1TestSuite
