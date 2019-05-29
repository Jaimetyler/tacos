let orm = require('../config/orm');

let taco = {
    selectAll: (cb) => {
        orm.selectAll('tacos', (res) => {
            console.log("hi, from tacos.js");
            cb(res);
        })
    }
}

module.exports = taco;