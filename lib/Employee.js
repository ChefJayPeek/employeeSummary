// TODO: Write code to define and export the Employee class
class Employee {
    constructor(name, id, email) {
        // Basic input validation on name, id and email
        if (!name || !name.trim().length) {
            throw new Error("Must enter an employee name");
        }
        if (typeof id !== "number" || isNaN(id) || id <0) {
            throw new Error("Must enter an employee ID number");
        }
        if (!email || !email.trim().length) {
            throw new Error("Must enter an employee email");
        }
        this.name = name;
        this.id = id;
        this.email = email;
        }
    }

    module.exports = Employee;