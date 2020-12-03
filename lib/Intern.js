// TODO: Write code to define and export the Intern class.  HINT: This class should inherit from Employee.
const Employee = require("./Employee");

class Intern extends Employee {
    constructor(name, id, email, school) {
        super(name, id, email);
        this.school = school;
    };
        // add Intern specific school info and role

    getRole() {
        return "Intern";
    };
    getSchool() {
        return this.school;
    }
}

module.exports = Intern;