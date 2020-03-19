const Migrate = require('./Migrate');

module.exports = () => {
    return Migrate(['rollback'])
};