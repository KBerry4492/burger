var orm = require("./config/orm.js");

orm.selectAll("burgers");

orm.insertOne("burgers", burger_name, eaten);

orm.updateOne("burgers", "burger_name", col_val, "eaten", val_two, "id");
