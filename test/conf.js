var TestUtils = require('juttle-sql-adapter-common/test/utils');

TestUtils.getDBClass = function () {
    return require('../lib/db');
};
TestUtils.getAdapterName = function () {
    return 'mysql';
};
TestUtils.getAdapterConfig = function () {
    var conf = [
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

    conf.path = './';
    return conf;
};

module.exports = TestUtils;
