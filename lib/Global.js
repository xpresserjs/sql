/**
 * If Database.startOnBoot,
 * Start Database on boot and set to $.db else set undefined
 */
if ($.$config.get('database.startOnBoot', false) && $.$config.has("database.config")) {
    const validator = require('./Validator');

    /**
     * Validate DB details
     */
    const database = $.config.database.config;

    const {error} = validator.validate(database, {
        client: {must: true},
        connection: {checkDbConfig: true},
    });

    if (error) {
        $.logErrorAndExit("Database: " + error.message);
    }

    /**
     * Import DB
     * @type {DB}
     */
    const DB = require("./DB");

    /**
     * Add to $
     * @type {DB}
     */
    $.db = new DB();

    /**
     * Set baseModel
     * @type {BaseModel}
     */
    $.baseModel = require("./BaseModel");

} else {
    $.db = undefined;
}