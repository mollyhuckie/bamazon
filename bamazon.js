var mysql = require("mysql");
var inquirer = require('inquirer');
var questions = {
    message:"Select your option",
    type: "list",
    name: "options",
    choices: [
"A query which checks stock quanity"]};

var connection = mysql.createConnection({
    host: "localhost",
    port: 8889,
    user: "root",
    password: "root",
    database: "bamazon"
});

// console.log(selectAllProducts);

// connection.connect(function (err) {
//     if (err) {
//         console.log(err);
//         return;
//     }
//     console.log("connected as id " + connection.threadId);

// inquirer.prompt(questions).then(function (answers) {
//     console.log("How many units of" + JSON.stringify(answers));
//     if (answers.options == "A query which checks stock quanity") {
//         checkQuanity();
// });
// });

function selectAllProducts () {
        var sql = "SELECT * FROM bamazon";
        connection.query(sql, function (err, res) {
            if (err) {
                console.log(err);
                connection.end();
            }

            console.log(res);
            connection.end();
        })
    }