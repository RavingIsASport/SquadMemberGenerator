const inquirer = require("inquirer");
const fs = require("fs");

const Employee = require("./lib/Employee");
const Manager = require("./lib/Manager");
const Engineer = require("./lib/Engineer");
const Intern = require("./lib/Intern");

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

</body>

</html>`;
    fs.writeFile('index.html', htmlPage, function (err) {
        if (err) {
            return reject(err);
        };
    })
}


const squadMember = [];

function getInfo() {
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
                        name: 'officeNumber',
                        message: `What is the manager's office number?`,
                    }])
                    .then(({name, role, id, email, officeNumber}) => {
                        newMember = new Manager(name, role, id, email, officeNumber);
                        squadMember.push(newMember);
                        mainHTMl(newMember)
                    });
            } else if (response.role === 'Engineer') {
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
                        name: 'gitHub',
                        message: `What is your Github username?`,
                    }])
                    .then(({name, role, id, email, gitHub}) => {
                        newMember = new Manager(name, role, id, email, gitHub);
                        squadMember.push(newMember);
                        mainHTMl(newMember)
                        console.log(newMember)
                    });

            } else if (response.role === 'Intern') {
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
                        name: 'school',
                        message: `What school did you attend?`,
                    }])
                    .then((answers) => {
                        newMember = new Manager(answers);
                        squadMember.push(newMember);
                    });;
            }
        })

};
function memberDiv(member) {
    return new Promise(function (resolve, reject) {
        let memberData = "";
        if (getInfo === "Manager") {
            const officeNumber = Manager.getOfficeNumber();
            memberData = `<div class="tile is-ancestor">
            <div class="tile is-parent is-vertical">
                <article class="tile is-child is-3 notification theTile">
                    <h1 class="title is-2">${Employee.getName}</p>
                        <h2 class="subtitle is-3">${Manager.getRole}</p>
                            <p class="subtitle is-4">ID:${Employee.getId}</p>
                            <p class="subtitle is-4">Email:${Employee.getEmail}</p>
                            <p class="subtitle is-4">Ofiice Number:${Manager.getOfficeNumber}</p>
                </article>
    
            </div>
        </div>`;
        } else if (getInfo === "Engineer") {
            const gitHub = Engineer.getGithub();
            memberData = `<div class="tile is-ancestor">
             <div class="tile is-parent is-vertical">
                 <article class="tile is-child is-3 notification theTile">
                     <h1 class="title is-2">${Employee.getName}</p>
                         <h2 class="subtitle is-3">${Engineer.getRole}</p>
                             <p class="subtitle is-4">ID:${Employee.getId}</p>
                             <p class="subtitle is-4">Email:${Employee.getEmail}</p>
                             <p class="subtitle is-4">Github:${Engineer.getGithub}</p>
                 </article>
     
             </div>
         </div>>`;
        } else if (getInfo === "Intern") {
            const school = Intern.getSchool();
            memberData = `<div class="tile is-ancestor">
            <div class="tile is-parent is-vertical">
                <article class="tile is-child is-3 notification theTile">
                    <h1 class="title is-2">${Employee.getName}</p>
                        <h2 class="subtitle is-3">${Intern.getRole}</p>
                            <p class="subtitle is-4">ID:${Employee.getId}</p>
                            <p class="subtitle is-4">Email:${Employee.getEmail}</p>
                            <p class="subtitle is-4">School:${Intern.getSchool}</p>
                </article>
    
            </div>
        </div>`
        }
        fs.appendFile(`index.html`, memberData, function (err) {
            if (err) {
                return reject(err);
            };
            return resolve();
        });
    });
}
function startApp() {
    getInfo();
    mainHTMl();
    memberDiv();
}
startApp();