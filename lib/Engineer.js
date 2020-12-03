// TODO: Write code to define and export the Engineer class.  HINT: This class should inherit from Employee.
const Employee = require("./Employee");

// Class Engineer
class Engineer extends Employee{
    constructor(name, id, email, github, role) {
        super(name, id, email);
        this.github = github;
        this.role = role;
    };
    // add Engineer specific github info and role
    getGithub() {
        return this.github;
    };
    getRole() {
        return 'Engineer';
    };
}


module.exports = Engineer;

