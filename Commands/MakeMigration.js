const Migrate = require('./Migrate');

module.exports = (args) => {
    return Migrate(['make', ...args])
};