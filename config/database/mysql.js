var Sequelize = require('sequelize');
var db = new Sequelize("db_api_flutter", "root", "", {
  dialect: 'mysql',
  host: 'localhost'
});

module.exports = db;


// var mysql = require('mysql');

// var con = mysql.createConnection({
//   host: "localhost",
//   user: "root",
//   password: "",
//   database: "db_api_flutter"
// });

// con.connect(function (err){
//     if(err){
//       throw e;
//     }
// });

// module.exports = con;