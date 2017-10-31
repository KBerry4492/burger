var connection = require("./connection.js");

// Object Relational Mapper (ORM)

var orm = {
  selectAll: function(table) {
    var queryString = "SELECT * FROM ??";
    connection.query(queryString, [table], function(err, result) {
      console.log(result);
    });
  },
  insertOne: function(table, val_one, val_two) {
    var queryString = "INSERT INTO ?? VALUES (?, ?)";
    console.log(queryString);
    connection.query(queryString, [table, name, status], function(err, result) {
      console.log(result);
    });
  },
  updateOne: function(table, col_one, col_val, col_two, val_two, id) {
    var queryString = "UPDATE ?? SET ?? = ?, ?? = ? WHERE id = ?";

    connection.query(queryString, [table, col_one, col_val, col_two, val_two, id], function(err, result) {
      console.log(result);
    });
  }
};

module.exports = orm;
