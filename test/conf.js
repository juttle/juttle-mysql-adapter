var TestUtils = require('juttle-sql-adapter-common/test/utils');

TestUtils.getAdapterClass = function () {
    return require('../');
};
TestUtils.getAdapterConfig = function () {
    return [
        {
            id: 'default',
            user : 'root',
            host : 'localhost',
            db : 'test'
        },
        {
            id: 'fake',
            user : 'root',
            host : 'nonhost',
            db : 'should_not_work'
        }
    ];
};
module.exports = TestUtils;
