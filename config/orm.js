//var connection = require("connection.js") 
var connection = require("../config/connection.js");

var orm = {

    selectAll: function (tableName, cb) {
        // var queryString = "SELECT * FROM ?? ";
        // connection.query(queryString, [tableName], function (err, result) {
        //     if (err) throw err;
        //     console.log("result:  ",result);
        //     cb(result);
       // });
       var queryString = "SELECT * FROM " + tableName + ";";
    connection.query(queryString, function(err, result) {
      if (err) {
        throw err;
      }
      console.log("result:  ", result);
      cb(result);
    });
    },

    insertOne: function (tableName, val, cb) {
        var queryString = "INSERT INTO " + tableName;

        queryString += " (burger_name) ";
        queryString += "VALUES ('" + val + "'); ";


        console.log(queryString);

        connection.query(queryString, function (err, result) {
            if (err) {          
                throw err;
            }

            cb(result);
        });
    },

    updateOne: function (tableName,  cond, cb) {
        var queryString = "UPDATE " + tableName;

        queryString += "SET devoured = true";
        queryString += "WHERE " + cond;

        connection.query(queryString, function (err, result){
            if (err) {
                throw err;
              }
        
              cb(result);
        });
    }

};



module.exports = orm;