let orm = require('../config/orm');

let taco = {
    selectAll: (cb) => {
        orm.selectAll('tacos', (res) => {
            console.log("hi, from tacos.js");
            cb(res);
        })
    },
    insertOne: (name, cb) => {
        orm.create('tacos', ["taco_name", "devoured"], [name, false], cb);
    },
    updateOne: function(id, taco_data, cb) {
        var condition = "id=" + id
        orm.update('burgers',condition, taco_data, cb);
    }
}

module.exports = taco;