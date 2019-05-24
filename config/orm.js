var connection = require ('connection.js');


var orm = {
    select: (whatToSelect, tableInput) => {
        var queryString = "SELECT * FROM ?? WHERE ?? = ?";

        console.log(queryString);

        connection.query(queryString, [whatToSelect, tableInput], (err, result) => {
            if (err) throw err;
            console.log(result);
        })
    },
    
    
    
}