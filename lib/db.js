'use strict';

let _ = require('underscore');
let Knex = require('knex');

let SqlCommonDB = require('juttle-sql-adapter-common/lib/db');

let REQUIRED_CONFIG_PROPERTIES = ['user', 'db'];

class DB extends SqlCommonDB {

    static getKnex(singleDBConfig, options) {
        options = options || {};

        let conf = _.clone(singleDBConfig);
        if (options.db) {
            conf.db = options.db;
        }

        let conn = this._getConnectionProperty(conf);

        return Knex({
            "client": "mysql",
            "connection": conn
        });
    }

    static _getConnectionProperty(singleDBConfig) {
        _.each(REQUIRED_CONFIG_PROPERTIES, function(prop) {
            if (!singleDBConfig.hasOwnProperty(prop)) {
                throw new Error('Each configuration must contain a field: ' + prop);
            }
        });

        return {
            user: singleDBConfig.user,
            password: singleDBConfig.password,
            host: singleDBConfig.host,
            port: singleDBConfig.port,
            database: singleDBConfig.db
        };
    }
}
module.exports = DB;
