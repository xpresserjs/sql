const {Abolish} = require("abolish");
const abolish = new Abolish();

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
