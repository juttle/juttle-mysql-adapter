var TestUtils = require('juttle-sql-adapter-common/test/utils');

TestUtils.getAdapterClass = function () {
    return require('../');
};
TestUtils.getAdapterConfig = function (useFake) {
    return useFake ? {
        "connection": {
            user : 'root',
            host : 'fakehost',
            database : 'test'
        }
    } : {
        "connection": {
            user : 'root',
            host : 'localhost',
            database : 'test'
        }
    };
};
module.exports = TestUtils;
