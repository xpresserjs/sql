const {getInstance} = require("xpresser");
const $ = getInstance();

module.exports = {
    run(config) {
        /**
         * Add to globals
         */
        require('./lib/Global');

        /**
         * Set artisan factory settings
         */
        $.ifIsConsole(() => {
            $.config.set('artisan.factory.model', `${config.path}/Factory/model.hbs`);
        })
    }
};