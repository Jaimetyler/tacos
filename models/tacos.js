let orm = require('../config/orm');

let taco = {
    selectAll: function(cb) {
        orm.selectAll('tacos', (res) => {
            console.log("hi, from tacos.js");
            cb(res);
        })
    },
    insertOne: function(name, cb) {
        orm.insertOne('tacos', ["taco_name", "devoured"], [name, false], cb);
    },
    updateOne: function(id, taco_data, cb) {
        var condition = "id=" + id
        orm.update('burgers',condition, taco_data, cb);
    }
}

module.exports = taco;