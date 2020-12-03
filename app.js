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


// delete the below lines when working
// const managerCard = require("./templates/managerhtml");
// const engineerCard = require("./templates/engineerhtml");
// const internCard = require("./templates/internhtml");
// // sanity check const mainHTML = require("./templates/mainHTML");

const teamMembers = [];
// Use inquirer to begin getting input from user

// Creating Manager
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
        // const managerCardHtml = managerCard(manager);
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
            //render(teamMembers);
            const file = path.join(__dirname, "output", "/team.html");
                fs.writeFileSync(file, render(teamMembers));
            
        };
    });
}
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
        // const engineerCardHtml = engineerCard(engineer);
        teamMembers.push(engineer);
        addMember();
    });
}

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
        //const internCardHtml = internCard(intern);
        teamMembers.push(intern);
        addMember();
    });
    
    // Create the team HTML document
    // function buildTeam() {
    //     const team = teamMembers.join("");
    //     fs.writeFileSync(outputPath, mainHTML(team), "utf-8");
    // }
};
// Create the team HTML document
// function buildTeam() {
//     const team = teamMembers.join("");
//     fs.writeFileSync(outputPath, mainHTML(team), "utf-8");
// }    
module.exports = teamMembers
createManager();