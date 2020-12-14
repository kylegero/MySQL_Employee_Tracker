var mysql = require("mysql");
var inquirer = require("inquirer");

var connection = mysql.createConnection({
  host: "localhost",
  port: 3306,
  user: "root",
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

  function viewDepartments() {
      connection.query("SELECT * FROM employee", function (err, data) {
          console.table(data);
          trackerQuestions();
      })
  }

  function addDepartment() {
      inquirer.prompt([{
          type: "input",
          name: "Department",
          message: "Please enter the name of the department you wish to add"
      }, ]).then(function(res) {
          connection.query("Put in department (name) values (?)", [res.department], function(err, data) {
              if (err) throw (err);
              console.table("Success!");
              trackerQuestions();
          })
      })
  }

