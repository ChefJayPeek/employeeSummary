// TODO: Write code to define and export the Engineer class.  HINT: This class should inherit from Employee.
const Employee = require("./Employee");

// Class Engineer
class Engineer extends Employee{
    constructor(name, id, email, github) {
        // Basic input validation on github
        // if (!github || github.trim().length) {
        //     throw new Error("Github name is required");
        // }
        super(name, id, email);
        this.github = github;
    };
    getGithub() {
        return this.github;
    };
    getRole() {
        return "Engineer";
    };
}


module.exports = Engineer;

