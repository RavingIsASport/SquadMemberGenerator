const inquirer = require("inquirer");
const fs = require("fs");

const Employee = require("./lib/Employee");
const Manager = require("./lib/Manager");
const Engineer = require("./lib/Engineer");
const Intern = require("./lib/Intern");
const { resolve } = require("path");

function mainHTMl() {
    const htmlPage = `<!DOCTYPE html>
<html lang="en">

<head>
    <meta charset="UTF-8">
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <link rel="stylesheet" href="https://cdn.jsdelivr.net/npm/bulma@0.9.3/css/bulma.min.css">
    <link rel="stylesheet" href="style.css">
    <title>Squad Member Generator
    </title>
</head>

<body>
    <section class="hero is-primary">
        <div class="hero-body banner">
            <p class="title has-text-centered">
                My Squad
            </p>
        </div>
    </section>
    <br>
        `;
    fs.writeFile('index.html', htmlPage, function (err) {
        if (err) {
            return reject(err);
        };
    })
}


function getInfo() {
    const squadMember = [];
    inquirer
        .prompt([
            {
                type: "list",
                name: "role",
                choices: ["Manager", "Engineer", "Intern",],
                message: "What is your role on the team?",
            },
        ])
        .then((response) => {
            if (response.role === "Manager") {
                newMember = new Manager(response);
                squadMember.push(newMember);
                inquirer
                    .prompt([{
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
                    {
                        type: 'input',
                        name: 'office',
                        message: `What is the manager's office number?`,
                    }])
                    .then((response) => {
                        let memberData = `<div class="tile is-ancestor">
                            <div class="tile is-parent is-vertical">
                                <article class="tile is-child is-3 notification theTile">
                                    <h1 class="title is-2">${response.name}</p>
                                        <h2 class="subtitle is-3">Manager</p>
                                            <p class="subtitle is-4">ID:${response.id}</p>
                                            <p class="subtitle is-4">Email:${response.email}</p>
                                            <p class="subtitle is-4">Ofiice Number:${response.office}</p>
                                </article>
                    
                            </div>
                        </div>`
                        console.log(memberData);
                        fs.appendFile("index.html", memberData, (err) => {
                            if (err) {
                                console.log('Error')
                            } else {
                                console.log('Success')
                            }

                        });
                    })
            } else if (response.role === 'Engineer') {
                newMember = new Engineer(response);
                squadMember.push(newMember);
                inquirer
                    .prompt([
                        {
                            type: 'input',
                            name: 'gitHub',
                            message: `What is your Github username?`,
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
                    .then((answers) => {
                        let memberData = `<div class="tile is-ancestor">
                            <div class="tile is-parent is-vertical">
                                <article class="tile is-child is-3 notification theTile">
                                    <h1 class="title is-2">${answers.name}</p>
                                        <h2 class="subtitle is-3">Engineer</p>
                                            <p class="subtitle is-4">ID:${answers.id}</p>
                                            <p class="subtitle is-4">Email:${answers.email}</p>
                                            <p class="subtitle is-4">Github:${answers.gitHub}</p>
                                </article>
                    
                            </div>
                        </div>`
                        console.log(memberData);
                        fs.appendFile("index.html", memberData, (err) => {
                            if (err) {
                                console.log('Error')
                            } else {
                                console.log('Success')
                            }

                        })

                    });

            } else if (response.role === 'Intern') {
                inquirer
                    .prompt([
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
                        {
                            type: 'input',
                            name: 'school',
                            message: `What school did you attend?`,
                        }])
                    .then((answers) => {
                        newMember = new Intern(answers);
                        squadMember.push(newMember);
                        let memberData = `<div class="tile is-ancestor">
                            <div class="tile is-parent is-vertical">
                                <article class="tile is-child is-3 notification theTile">
                                    <h1 class="title is-2">${answers.name}</p>
                                        <h2 class="subtitle is-3">Intern</p>
                                            <p class="subtitle is-4">ID:${answers.id}</p>
                                            <p class="subtitle is-4">Email:${answers.email}</p>
                                            <p class="subtitle is-4">School:${answers.school}</p>
                                </article>
                    
                            </div>
                        </div>`
                        console.log(memberData);
                        fs.appendFile("index.html", memberData, (err) => {
                            if (err) {
                                console.log('Error')
                            } else {
                                console.log('Success')
                            }

                        })

                    });
            }
        });
};
async function endHTML() {
    const endHtmlPage = `</body>

    </html>`;
    fs.appendFile("index.html", endHtmlPage, (err) => {
        if (err) {
            console.log('Error')
        } else {
            console.log('Success')
        }

    });
}
function startApp() {
    mainHTMl();
    getInfo();
    endHTML()
}
startApp();