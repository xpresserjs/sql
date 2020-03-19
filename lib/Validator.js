const {Abolish} = require("abolish");
const abolish = new Abolish();

// ovp.setEventHandler({
//     onEachError: (param, msg) => {
//         $.logError("Database: " + msg);
//     },
// });

// Set Validation Rules
abolish.addValidator({
    name: "checkDbConfig",
    validator: (connection) => {
        const {error} = abolish.validate(connection, {
            "*": {must: true},
            "password": {must: false},
        });
        return error === false;
    },
    error: "Check connection config."
});

module.exports = abolish;
