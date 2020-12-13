var mysql = require("mysql");
var inquirer = require("inquirer");

var connection = mysql.createConnection({
  host: "localhost",

  // Your port; if not 3306
  port: 3306,

  // Your username
  user: "root",

  // Your password
  password: "",
  database: "employees_db"
});

connection.connect(function(err) {
    if (err) throw err;
    console.log("connected as id " + connection.threadId);
    trackerQuestions();
  });

  function trackerQuestions(){
    inquirer.prompt({
        message: "Please select an action",
        type: "list",
        choices: [
            "View Departments",
            "Add Department",
            "View Employees",
            "Add Employee",
            "Update Employee Role",
            "Add Role",
            "Exit"
        ],
        name: "choice"
    }).then(answers => {
        console.log(answers.choice + "it is!");
        switch (answers.choice) {
            case "View Departments":
                viewDepartments()
                break;
            case "Add Department":
                addDepartment()
                break;
            case "View Employees":
                viewEmployees()
                break;
            case "Add Employee":
                addEmployee()
                break;
            case "Update Employee Role":
                updateEmployeeRole()
                 break;
            case "Add Role":
                addRole()
                break;

        }
    })
  }
