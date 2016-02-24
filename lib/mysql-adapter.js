/*
    Juttle MySQL Adapter
*/
'use strict';

let db = require('./db');

function MysqlAdapter(config) {
    db.init(config);

    return {
        name: 'mysql',
        read: require('./read'),
        write: require('./write'),
        optimizer: require('juttle-sql-adapter-common/lib/optimize')
    };
}

module.exports = MysqlAdapter;
