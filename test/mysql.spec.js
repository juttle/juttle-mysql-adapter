var SharedSqlTests = require('juttle-sql-adapter-common/test/shared-sql.spec');
var TestUtils = require('juttle-sql-adapter-common/test/utils');
var mysql_backend = require('../');

var config = {
    "connection": {
        user : 'root',
        host     : 'localhost',
        database : 'test'
    }
};

TestUtils.init(config, mysql_backend);
SharedSqlTests();
