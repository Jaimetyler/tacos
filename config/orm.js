var connection = require('../config/connection');


var orm = {
    selectAll: (tableInput, cb) => {
        connection.query('SELECT * FROM ' + tableInput + ';', (err, result) => {
            if (err) throw err;
            cb(result);
        })
    },
    insertOne: (table, cols, vals, cb) => {

        function printQuestionMarks(num) {
            var arr = [];

            for (var i = 0; i < num; i++) {
                arr.push("?");
            }

            return arr.toString();
        }
        var queryString = "INSERT INTO " + table;

        console.log("query string = ", queryString);

        queryString += " (";
        queryString += cols.toString();
        queryString += ") ";
        queryString += "VALUES (";
        queryString += printQuestionMarks(vals.length);
        queryString += ") ";

        console.log(queryString);

        connection.query(queryString, vals, function (err, result) {
            if (err) {
                throw err;
            }

            cb(result);
        });
    },
    updateOne: (tableInput, condition, cb) => {
        var queryString = "UPDATE " + tableInput +
            " SET devoured = true WHERE id = " + condition + ";";

        connection.query(queryString, function (err, result) {
            if (err) throw err;
            cb(result);
        })
    },
     delete: function(table, condition, cb) {
        var queryString = "DELETE FROM " + table;
        queryString += " WHERE ";
        queryString += condition;
    
        connection.query(queryString, function(err, result) {
          if (err) {
            throw err;
          }
    
          cb(result);
        });
      }
}

module.exports = orm;
