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
VALUES ("Sarah", "Dawson", 1, NULL),
        ("Bob", "Jones", 2, 1),
       ("Sally", "Newman", 3, 1),
       ("Sean", "Gray", 4, 1),
       ("Hank", "Conn", 5, 1);
    