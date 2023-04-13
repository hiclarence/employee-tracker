const inquirer = require('inquirer');
const mysql = require('mysql2');

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

db.query('SELECT * FROM favorite_books', function (err, results) {
  console.log(results);
});

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
      console.log(`choice selected!`)
    });
};

app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});

init()