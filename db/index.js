const connection = require(`./connection`);

class DB {
    constructor(connection) {
        this.connection = connection;
    }

    viewAllDept() {
        return this.connection.promise().query('SELECT * FROM department');
    }

    viewRoles() {
        return this.connection.promise().query(`SELECT role.id, role.title, role.salary, department.name
        FROM role
        JOIN department ON role.department = department.id`);
    }
    
    viewEmployees() {
        return this.connection.promise().query(`SELECT employee.id, employee.first_name, employee.last_name, role.title, department.name AS department, role.salary
        FROM company_db.employee
        JOIN role ON role.id = employee.role_id
        JOIN department ON role.department = department.id`);
    }

    addDept(name) {
        this.connection.promise().query(`INSERT INTO department (name) VALUES (?)`, name);
        viewAllDept();
    }

}

module.exports = new DB(connection);