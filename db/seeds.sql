INSERT INTO department (name)
VALUES ("HR"),
       ("Sales"),
       ("Engineering"),
       ("Design");

INSERT INTO role (title, salary, department)
VALUES ("Account Executive", 40000, 2),
       ("Recruiter", 50000, 1),
       ("Designer", 60000, 4),
       ("CEO", 100000, 2),
       ("Software Engineer", 80000, 3);
       
INSERT INTO employee (first_name, last_name, role_id, manager_id)
VALUES ("Bob", "Jones", 1, 4),
       ("Sally", "Newman", 2, 4),
       ("Sean", "Gray", 3, 4),
       ("Sarah", "Dawson", 4, NULL),
       ("Hank", "Conn", 5, 4);
    