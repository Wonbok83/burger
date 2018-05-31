var orm = require("../config/orm.js");


var burger = {
    selectAll: function(cb) {
        orm.selectAll("burgers", function(res){
            cb(res);
        });
    },
    
     insertOne: function(val, cb) {
        orm.insertOne("burgers", val,cb);
       },
    
     updateOne: function(id, cb) {
        orm.updateOne("burgers", id, cb);
    }
}

module.exports = burger; 