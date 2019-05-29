var connection = require ('../config/connection');


var orm = {
    selectAll: (tableInput, cb ) => {
        connection.query('SELECT * FROM ' + tableInput + ';', (err, result) => {
            if (err) throw err;
            cb(result);
    })
} 
    // insertOne: (table, cols, vals, cb) => {
    //     var queryString = "INSERT INTO " + table;

    //     console.log(queryString);

    //     queryString += " (";
    //     queryString += cols.toString();
    //     queryString += ") ";
    //     queryString += "VALUES (";
    //     queryString += printQuestionMarks(vals.length);
    //     queryString += ") ";
    
    //     console.log(queryString);
    
    //     connection.query(queryString, vals, function(err, result) {
    //       if (err) {
    //         throw err;
    //       }
    
    //       cb(result);
    //     });
    // },
    // updateOne: (whatToSelect, tableInput) => {
    //     var queryString = "SELECT * FROM ?? WHERE ?? = ?";

    //     console.log(queryString);

    //     connection.query(queryString, [whatToSelect, tableInput], (err, result) => {
    //         if (err) throw err;
    //         console.log(result);
    //     })
    // }
}
    
    module.exports = orm;
