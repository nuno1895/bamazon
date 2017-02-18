///////////Connection///////////////
var mysql = require('mysql');
var inquirer = require('inquirer');
var colors = require('colors');

/////////////////Variables//////////////
var order = [];


//////////Connection/////////////////////
var connection = mysql.createConnection({
  host     : 'localhost',
  user     : 'root',
  password : 'root',
  database : 'bamazon_db',
});

connection.connect();

function startOrder() {

connection.query('SELECT id, product_name, price, stock_quantity FROM products', function (error, results, fields)
{
  for (var i = 0; i < results.length; i++) {
  console.log("ID: ".bold.red + results[i].id, "PRODUCT: ".bold.red + results[i].product_name, "PRICE: $".bold.red + results[i].price);
  }

////////////questions//////////////////////
  inquirer.prompt([{
    type: "input",
      name: "product_id",
      message: "What is the ID of the product you would like to buy?".blue,
      validate: function(value) {
        if (isNaN(value) === false && value > 0 && value < results.length + 1) {
        return true;
        }
        return false;
        }
      
    }, {
   
    type: "input",
    name: "quantity",
    message: "How many would you like to purchase?".blue,
    validate: function(value) {
        if (isNaN(value) === false && value > 0) {
        return true;
        }
        return false;
        }
      }]).then(function(data) {
        var item = {};
        var id = data.product_id;
        var quant = data.quantity;
        var item_name = results[id - 1].product_name;
        var item_price = results[id - 1].price;
        if (results[id - 1].stock_quantity - quant < 0 ) {
          console.log("Sorry, we don't have that much in stock.".red);
      } else {
        connection.query("UPDATE products SET stock_quantity = (stock_quantity - " + quant + ") WHERE id = " + id, function (error, results) {
          if (error) {
            return console.log("There was an error updating the products table.".cyan);
          }
        });
        connection.query("INSERT INTO sales (product_id, quantity_purchased) VALUES (" + id + ", " + quant + ")", function (error, results) {
          if (error) {
            return console.log("There was an error updating the products table.".cyan);
          }
        });
        item["item"] = item_name;
        item["price"] = item_price;
        item["quantity"] = quant;

        order.push(item);

        shopMore();
      };
    });
  });
} 

function shopMore() {
  inquirer.prompt([{
    type: "confirm",
      name: "shopMore",
      message: "Do you want to shop more?".rainbow
      }]).then(function(data) {
        if(!data.shopMore){
          checkOut();
        } else {
          startOrder();
        };
      });
};

//take order and loop through that object
//do math and give total price


function checkOut(){
  var total = 0;
  console.log("Your Purchase:".bold.green);
  for (var i = 0; i < order.length; i++){
    console.log("Product: ".bold.green + order[i].item + " Quantity: ".bold.green + order[i].quantity + " Price: $".bold.green + order[i].price);
    total += order[i].price * order[i].quantity;
  };
  console.log("Total: ".bold.green + total);
  console.log("Thank You and Come Again!!".rainbow);
  connection.end();
}


startOrder();
