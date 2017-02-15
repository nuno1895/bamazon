var mysql = require('mysql');
var colors = require('colors')
var inquirer = require('inquirer');
var connection = mysql.createConnection({
  host     : 'localhost',
  user     : 'root',
  password : 'root',
  database : 'bamazon_db',
});
  
connection.connect();
 
function selectTable(table){
    connection.query('SELECT id, product_name, price from ' + table, function (error, results, fields) {
      if (error) throw error;

      for (var i = 0; i < results.length; i++) {
      
      console.log('ID: '.red.bold, results[i].id + " Product: ".red.bold + results[i].product_name + " Price: $".red.bold + results[i].price);
      };
    });
};

selectTable("products");




// function insertIntoTable(name, type, abv, table){
//   connection.query("INSERT INTO " + table + " SET ?", {
//       name: name,
//       type: type,
//       abv: abv
//     }, function(err, res) { console.log('completed!')});
// };


connection.end();


// //write update function
// //write delete function

// insertIntoTable('beer', 'i dont know beer', 100, 'beer');
// selectTable('beer');


// function deleteFromTable(id, table) {
//   connection.query("DELETE from " + table + " where id = " + id , {
// }, function(err, res) { console.log('deleted!')});

// };

//   deleteFromTable(6, 'beer');

// //write update function
// function updateTable(id, table){
//     connection.query("UPDATE " + table + " SET ? WHERE ?", [{
//         name : 'bruno beer'
//       }, {
//           id : id
//       }], function(err, res) { 
//           if (err) return console.log(err);
//           console.log('update completed!')
//       });
// }

// updateTable(1, 'beer');
 
