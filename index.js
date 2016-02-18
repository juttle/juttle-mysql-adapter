/*
    Juttle MySQL Adapter
*/

var _ = require('underscore');
var util = require("util");
var SqlAdapterCommon = require('juttle-sql-adapter-common');
var Knex = require('knex');

var REQUIRED_CONFIG_PROPERTIES = ['user', 'db'];

function _assign_knex_getter() {
    var db = require('juttle-sql-adapter-common/lib/db');
    db.getKnex = function(singleDBConfig, options) {
        options = options || {};

        var conf = _.clone(singleDBConfig);
        if (options.db) {
            conf.db = options.db;
        }

        var conn = getConnectionProperty(conf);

        return Knex({
            "client": "mysql",
            "connection": conn
        });
    };
}

function getConnectionProperty(singleDBConfig) {
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

function MysqlAdapter(config) {
    var baseSql = SqlAdapterCommon.call(this, config);
    _assign_knex_getter();

    baseSql.name = 'mysql';

    _.extend(baseSql.read.prototype, {
        procName: 'read-mysql',
        handleRawResponse: function (resp) {
            return resp[0];
        },
        addPointFormatting: function (points, targets) {
            //postgres outputs aggregation targets as strings instead of numbers
            var self = this;
            if (this.aggregation_targets && this.aggregation_targets.length > 0) {
                _.each(points, function(pt) {
                    _.each(self.aggregation_targets, function(aggregation_field) {
                        if (pt.hasOwnProperty(aggregation_field)) {
                            pt[aggregation_field] = parseFloat(pt[aggregation_field]);
                            if (isNaN(pt[aggregation_field])) {
                                pt[aggregation_field] = null;
                            }
                        }
                    });
                });
            }
        }
    });

    _.extend(baseSql.write.prototype, {
        procName: 'write-mysql'
    });

    return baseSql;
}

util.inherits(MysqlAdapter, SqlAdapterCommon);
module.exports = MysqlAdapter;
