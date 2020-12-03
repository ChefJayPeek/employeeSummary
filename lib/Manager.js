// TODO: Write code to define and export the Manager class. HINT: This class should inherit from Employee.
const Employee = require("./Employee");

class Manager extends Employee {
    constructor(name, id, email, officeNumber) {
        // if (typeof officeNumber !== "number" || isNaN(officeNumber) || officeNumber < 0) {
        //     throw new Error("Office number is required");
        //     }
        super(name, id, email);
        this.officeNumber = officeNumber;
    };
    getOfficeNumber() {
        return this.officeNumber;
    };
    getEmail() {
        return this.email;
    };
    getRole() {
        return "Manager";
    };
}
module.exports = Manager;