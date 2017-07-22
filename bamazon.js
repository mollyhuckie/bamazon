var mysql = require("mysql");
var inquirer = require('inquirer');
var questions = {
    message:"Select your option",
    type: "input",
    name: "options",
    choices: [
"What is the ID of the product you would like to buy?"]};

var connection = mysql.createConnection({
    host: "localhost",
    port: 8889,
    user: "root",
    password: "root",
    database: "bamazon"
});

function selectAllProducts () {
        var sql = "SELECT * FROM products";
        connection.query(sql, function (err, res) {
            if (err) {
                console.log(err);
                connection.end();
            }
for (var index = 0; index < res.length; index++) {
    var element = res[index];
            console.log(element.item_id, element.product_name, element.department_name, element.price);
}
            connection.end();
        })
    }

selectAllProducts();

inquirer.prompt(questions).then(function (answers) {
    console.log("How many units of" + JSON.stringify(answers));
//     if (answers.options == "A query which checks stock quanity") {
//         checkQuanity();
//     }
});
