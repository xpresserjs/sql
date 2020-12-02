const {getInstance} = require("xpresser");
const $ = getInstance();
const knex = require("knex");


class DB {
    knex = knex;

    constructor() {
        try {
            this.knex = knex($.config.get('database.config'));
        } catch (e) {
            $.logAndExit(e);
        }
    }

    sql(arg) {
        if (arg == null) {
            return this.knex.queryBuilder();
        }
        return this.knex(arg);
    }
}

module.exports = DB;
