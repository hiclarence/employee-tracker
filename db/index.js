const connection = require(`./connection`);

class DB {
    constructor(connection) {
        this.connection = connection;
    }

    viewAllDept() {
        return this.connection.promise().query('SELECT * FROM department');
    }

    viewRoles() {
        return this.connection.promise().query(`SELECT role.id AS role_id, role.title AS job_title, role.salary, department.name AS department_name
        FROM role
        JOIN department ON role.department = department.id`);
    }
    
    viewEmployees() {
        return this.connection.promise().query(`SELECT employee.id, employee.first_name, employee.last_name, role.title, department.name AS department, role.salary, employee.manager_id
        FROM company_db.employee
        JOIN role ON role.id = employee.role_id
        JOIN department ON role.department = department.id`);
    }

    addDept(name) {
        this.connection.promise().query(`INSERT INTO department (name) VALUES (?)`, name);
        return this.connection.promise().query('SELECT * FROM department');
    }

    addRole(title, salary, department) {
        return this.connection.promise().query(`INSERT INTO role (title, salary, department) VALUES ("${title}", ${salary}, ${department})`);        
        // return this.connection.promise().query('SELECT * FROM role');

    }

    addEmployee(firstName, lastName, roleID, managerID) {
        this.connection.promise().query(`INSERT INTO employee (first_name, last_name, role_id, manager_id) VALUES ("${firstName}", "${lastName}", ${roleID}, ${managerID})`);
        return this.connection.promise().query('SELECT * FROM employee');
    }

}

module.exports = new DB(connection);