const {exec} = require("shelljs");
const PathHelper = require("xpresser/dist/src/Helpers/Path");


module.exports = (args) => {
    const $config = $.config.get("database.config", {});
    const env = $.config.get("env", "development");

    if (!Object.keys($config).length) {
        return $.logErrorAndExit("Database config not found.");
    }

    if ($config.migrations && !$config.migrations.stub) {
        $config.migrations.stub = $.path.engine("Factory/migration.js");
    }

    const data = JSON.stringify({
        [env]: $config,
    }, null, 2);

    const fileContent = `module.exports = ${data};`;
    const filePath = $.path.base("knexfile.js");
    const migrations = $.path.base("migrations");

    PathHelper.makeDirIfNotExist(migrations);

    $.file.fs().writeFileSync(filePath, fileContent);

    if (args.length) {
        exec(`knex migrate:${args.join(" ")} --knexfile=${filePath}`);
    } else {
        exec(`knex migrate:latest --knexfile=${filePath}`);
    }

    $.file.delete(filePath);
    return $.exit();
};