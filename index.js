const inquirer = require("inquirer");
const fs = require("fs");

const Employee = require("./lib/Employee");
const Manager = require("./lib/Manager");
const Engineer = require("./lib/Engineer");
const Intern = require("./lib/Intern");

function memberInfo() {
    inquirer
        .prompt([
            {
                type: "list",
                name: "role",
                choices: ["Manager", "Engineer", "Intern",],
                message: "What is your role on the team?",
            },
            {
                type: "input",
                name: "name",
                message: "What is your name?",
            },
            {
                type: "input",
                name: "id",
                message: "What is your ID?",
            },
            {
                type: "input",
                name: "email",
                message: "What is your email?",
            },
        ])
        .then((response) => {
            if (response.role === "Manager") {
                inquirer
                    .prompt([{
                        type: 'input',
                        name: 'officeNumber',
                        message: `What is the manager's office number?`,
                    }])
            }
        })

}
memberInfo();