const express = require('express');
const inquirer = require('inquirer');
const cTable = require('console.table');
const db = require(`./db`);

function init () {
  loadQuestions();
}

function loadQuestions() {
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
        viewDept();
        break;
      case `View all roles`:
        viewRole();
        break;
      case `View all employees`:
        viewEmployees(); 
        break;
      case `Add a department`:
        addDepartment()
        break;
      // case `Add a role`:
      //   inquirer.prompt([
      //     {
      //       type: 'input',
      //       message: 'What is the title of the role?',
      //       title: 'title'
      //     },
      //     {
      //       type: 'input',
      //       message: 'What is their salary?',
      //       salary: 'salary'
      //     },
      //     {
      //       type: 'list',
      //       message: 'What is their department?',
      //       department: 'newDept'
      //     }
      //   ]).then((choice) => {
      //     db.query(`INSERT INTO employee (title, salary, department) VALUES (?)`, choice.newDept, function (err, results) {
      //       if (err) {
      //         console.log(err);
      //       }
      //       console.log(`dept added!`);
      //   });
      // });
      // break;
      
  
      // default:
        console.log(`choice selected!`)
    }  
    });
};


function viewDept() {
  db.viewAllDept()
    .then(([data])=> {
      console.log(`\n`);
      console.table(data);
  })
    .then(()=>loadQuestions())
};

function viewRole() {
  db.viewRoles()
  .then(([data])=> {
    console.log(`\n`);
    console.table(data);
})
  .then(()=>loadQuestions())
};

function viewEmployees() {
  db.viewEmployees()
    .then(([data])=> {
      console.log(`\n`);
      console.table(data);
  })
    .then(()=>loadQuestions())
};

function addDepartment() {
  inquirer.prompt([
    {
      type: 'input',
      message: 'What department would you like to add?',
      name: 'newDept'
    }
  ]).then((choice) => {
    db.addDept(choice.newDept)
    .then(([data])=> {
      console.log(`\n`);
      console.log(`${choice.newDept} added!`);
      console.table(data);
  })
  .then(()=>loadQuestions())
})}


init()

module.exports = db;