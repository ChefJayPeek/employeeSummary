 // Link classes
const Manager = require("./lib/Manager");
const Engineer = require("./lib/Engineer");
const Intern = require("./lib/Intern");
const render = require("./lib/htmlRenderer");

// Link dependencies
const inquirer = require("inquirer");
const path = require("path");
const fs = require("fs");

// Output folder for finished HTML file
const OUTPUT_DIR = path.resolve(__dirname, "output");
const outputPath = path.join(OUTPUT_DIR, "team.html");


const teamMembers = [];
// Use inquirer to begin getting input from user

// createManager to gather manager data, with basic input validation and push to teamMembers array
function createManager() {
    inquirer.prompt([
        {
            type: "input",
            name: "name",
            message: "What is the manager's name?",
            validate(value) {
                const valid = isNaN(value);
                return valid || "Please enter a name.";
            },
        },
        {
            type: "input",
            name: "id",
            message: "What is the manager's ID?",
            validate(value) {
                const valid = !isNaN(parseFloat(value));
                return valid || "Please enter a number.";
            },
        },
        {
            type: "input",
            name: "email",
            message: "What is the manager's Email address?",
            validate(value) {
                const valid = isNaN(value);
                return valid || "Please enter a email.";
            },
        },
        {
            type: "input",
            name: "officeNumber",
            message: "What is the manager's office number?",
            validate(value) {
                const valid = !isNaN(parseFloat(value));
                return valid || "Please enter a number.";
            },
        }
    ]).then(function (answers) {
        const manager = new Manager(answers.name, answers.id, answers.email, answers.officeNumber,);
        teamMembers.push(manager);
        addMember();
    });
}
// Adding additional team members
function addMember() {
    inquirer.prompt([
        {
            type: "list",
            name: "type",
            message: "Which type of team member would you like to add?",
            choices: [
                "Engineer",
                "Intern",
                "No more team members"
            ]
        }
    ]).then(function(answer) {
        if(answer.type === "Engineer") {
            createEngineer();
        }
        else if (answer.type === "Intern") {
            createIntern();
        }
        else {
            // Make the HTML file from the teamMembers array and output it
            const file = path.join(__dirname, "output", "/team.html");
                fs.writeFileSync(file, render(teamMembers));
            
        };
    });
}
// createEngineer to gather engineer data, with basic input validation and push to teamMembers array

function createEngineer() {
    inquirer.prompt([
        {
            type: "input",
            name: "name",
            message: "What is the engineer's name?",
            validate(value) {
                const valid = isNaN(value);
                return valid || 'Please enter a name.';
            },
        },
        {
            type: "input",
            name: "id",
            message: "What is the engineer's ID?",
            validate(value) {
                const valid = !isNaN(parseFloat(value));
                return valid || 'Please enter a number.';
            },
        },
        {
            type: "input",
            name: "email",
            message: "What is the engineer's email?",
            validate(value) {
                const valid = isNaN(value);
                return valid || 'Please enter a email.';
            },
        },
        {
            type: "input",
            name: "github",
            message: "What is the engineer's github?",
            validate(value) {
                const valid = isNaN(value);
                return valid || 'Please enter a github name.';
            },
        }
    ]).then(function (answers) {
        const engineer = new Engineer(answers.name, answers.id, answers.email, answers.github);
        teamMembers.push(engineer);
        addMember();
    });
}
// createIntern to gather intern data, with basic input validation and push to teamMembers array
function createIntern() {
    inquirer.prompt([
        {
            type: "input",
            name: "name",
            message: "What is the intern's name?",
            validate(value) {
                const valid = isNaN(value);
                return valid || 'Please enter a name.';
            },
        },
        {
            type: "input",
            name: "id",
            message: "What is the intern's ID?",
            validate(value) {
                const valid = !isNaN(parseFloat(value));
                return valid || 'Please enter a number.';
            },
        },
        {
            type: "input",
            name: "email",
            message: "What is the intern's email?",
            validate(value) {
                const valid = isNaN(value);
                return valid || 'Please enter a email.';
            },
        },
        {
            type: "input",
            name: "school",
            message: "What is the intern's school?",
            validate(value) {
                const valid = isNaN(value);
                return valid || 'Please enter a shcool.';
            },
        }
    ]).then(function(answers) {
        const intern = new Intern(answers.name, answers.id, answers.email, answers.school);
        teamMembers.push(intern);
        addMember();
    });
};

module.exports = teamMembers
createManager();