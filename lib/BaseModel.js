// @ts-check
const _ = require("lodash");
const moment = require("moment");
const {Model} = require("objection");
const QueryBuilder = require("./QueryBuilder");
const startDatabaseOnBoot = $.config.get("database.startOnBoot", false);

// Start Database on boot
if (startDatabaseOnBoot && $.db) Model.knex($.db.knex);

const databaseTimestampFormat = $.config.get('database.timestampFormat');

// @ts-ignore
class BaseModel extends Model {
    static get QueryBuilder() {
        return QueryBuilder;
    }

    $formatJson(json) {
        return _.omit(json, this.$hidden);
    }

    $beforeInsert() {
        let shouldUpdate = true;
        if (typeof this.$timestamps === "boolean") {
            shouldUpdate = this.$timestamps;
        }
        if (shouldUpdate) {
            const timestamp = moment(new Date().toISOString()).format(databaseTimestampFormat);
            this.created_at = timestamp;
            this.updated_at = timestamp;
        }
    }

    $beforeUpdate() {
        let shouldUpdate = true;
        if (typeof this.$timestamps === "boolean") {
            shouldUpdate = this.$timestamps;
        }
        if (shouldUpdate) {
            this.updated_at = moment(new Date().toISOString()).format(databaseTimestampFormat);
        }
    }
}

module.exports = BaseModel;