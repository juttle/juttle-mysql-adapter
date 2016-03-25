'use strict';

let _ = require('underscore');
let SqlCommonRead = require('juttle-sql-adapter-common/lib/read');
let db = require('./db');

class Read extends SqlCommonRead {
    handleRawResponse(resp) {
        let firstItem = resp[0];
        return _.isArray(firstItem) ? firstItem : [ firstItem ];
    }

    addPointFormatting(points, targets) {
        if (this.aggregation_targets && this.aggregation_targets.length > 0) {
            _.each(points, (pt) => {
                _.each(this.aggregation_targets, (aggregation_field) => {
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

    getDbConnection(options) {
        return db.getDbConnection(options);
    }
}
module.exports = Read;
