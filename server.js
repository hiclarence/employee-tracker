const express = require('express');
const inquirer = require('inquirer');
const mysql = require('mysql2');
const cTable = require('console.table');


const PORT = process.env.PORT || 3001;
const app = express();

// Express middleware
app.use(express.urlencoded({ extended: false }));
app.use(express.json());

// Connect to database
const db = mysql.createConnection(
  {
    host: 'localhost',
    user: 'root',
    password: 'aviation',
    database: 'company_db'
  },
  console.log(`Connected to the company_db database.`)
);

function init() {
  inquirer
  .prompt([
      {
        type: 'list',
        message: 'What would you like to do?',
        name: 'selection',
        choices: ['View all departments', 'View all roles', 'View all employees','Add a department', `Add a role`, `Add an employee`, `Update an employee role` ]
      }
  ]).then((data) => {
    switch(data.selection) {
      case `View all departments`:
        db.query('SELECT * FROM department', function (err, results) {
          console.table(results);
        });
        break;
      case `View all roles`:
        db.query('SELECT * FROM role', function (err, results) {
        console.table(results);
      });
      case `Add a department`:
        inquirer.prompt([
          {
            type: 'input',
            message: 'What department would you like to add?',
            name: 'newDept'
          }
        ]).then((choice) => {
          db.query(`INSERT INTO department (name) VALUES (?)`, choice.newDept, function (err, results) {
            if (err) {
              console.log(err);
            }
            console.log(`dept added!`);
        });
      });
      break;
      default:
        console.log(`choice selected!`)
    }  
    });
};

app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});

init()