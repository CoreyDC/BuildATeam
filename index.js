// BRINGING IN PACKAGES FOR APP
const inquirer = require('inquirer');
const fs = require('fs');

const Employee = require('./lib/Employee');
const Manager = require('./lib/Manager');
const Engineer = require('./lib/Engineer');
const Intern = require('./lib/Intern');


// GLOBAL VARIABLES
let team = [];


// CALL FUNCTION TO START PROGRAM AND INITIALIZE PROMPTS
addNewMember();


// FUNCTION TO PROMPT USER TO ADD A TEAM MEMBER
function addNewMember() {
    const userPrompts = [
        {
            type: 'list',
            name: 'member',
            message: 'Which team member would you like to add? ',
            choices: ['Manager', 'Engineer', 'Intern', 'Done'],
        },
    ]

inquirer.prompt(userPrompts)
    .then(res => {
        switch(res.member) {
            case 'Manager':
                managerFunc();
                break;

            case 'Engineer':
                engineerFunc();
                break;

            case 'Intern':
                internFunc();
                break;

            case 'Done':
                generateHtml();
                break;
        }
    }) 
};


// FUNCTION TO ADD MANAGER
const managerFunc = () => {
    const managerPrompts = [
        {
            type: 'input',
            name: 'name',
            message: 'What is managers name?',
        },
        {
            type: 'input',
            name: 'id',
            message: 'What is managers ID number?',
        },
        {
            type: 'input',
            name: 'email',
            message: 'What is managers email?',
        },
        {
            type: 'input',
            name: 'info',
            message: 'What is managers office number?',
        },
    ]

    inquirer.prompt(managerPrompts)
        .then(res => {
            const newManager = new Manager(res.name, res.id, res.email, res.info);
            team.push(newManager);
            addNewMember();
        })
};


// FUNCTION TO ADD ENGINEER
const engineerFunc = () => {
    const engineerPrompts = [
        {
            type: 'input',
            name: 'name',
            message: 'What is engineers name?',
        },
        {
            type: 'input',
            name: 'id',
            message: 'What is engineers ID number?',
        },
        {
            type: 'input',
            name: 'email',
            message: 'What is engineers email?',
        },
        {
            type: 'input',
            name: 'info',
            message: 'What is engineers github username?',
        },
    ]

    inquirer.prompt(engineerPrompts)
        .then(res => {
            const newEngineer = new Engineer(res.name, res.id, res.email, `https://github.com/${res.info}`);
            team.push(newEngineer);
            addNewMember();
        })
};


// FUNCTION TO ADD INTERN
const internFunc = () => {
    const internPrompts = [
        {
            type: 'input',
            name: 'name',
            message: 'What is interns name?',
        },
        {
            type: 'input',
            name: 'id',
            message: 'What is interns ID number?',
        },
        {
            type: 'input',
            name: 'email',
            message: 'What is interns email?',
        },
        {
            type: 'input',
            name: 'info',
            message: 'Where does intern go to school?',
        },
    ]

    inquirer.prompt(internPrompts)
        .then(res => {
            const newIntern = new Intern(res.name, res.id, res.email, res.info);
            team.push(newIntern);
            addNewMember();
        })
};


// GENERATE HTML
function generateHtml() {
    let html = `
<!DOCTYPE html>
    <html>
        <head>
            <meta charset="UTF-8">
            <meta name="viewport" content="width=device-width, initial-scale=1.0">
            <title>My Employees</title>
            <link rel="stylesheet" href="https://cdn.jsdelivr.net/npm/bootstrap@5.1.3/dist/css/bootstrap.min.css" />
            <link rel="stylesheet" href="./styles.css">
        </head>
            
        <body>
            
            <header>
                <h1>My Employees</h1>
            </header>

            <main>
                <div class="container row">

    `;

    for (let i = 0; i < team.length; i++) {
        html += `
                    <div class="col-md-2 card" style="width: 10rem;">
                        <h2><b>Name: </b>${team[i].name}</h2>
                        <h3>${team[i].getJob()}</h3>
                        <p><b>ID: </b>${team[i].id}</p>
                        <p><b>Email: </b>${team[i].email}</p>
                        <p>${team[i].info}</p>
                    </div>
      `;
    }

    html += `
                </div>
            </main>
        </body>
</html>
`;

fs.writeFile('./dist/index.html', html, (err) => {
    if (err) {
      console.error(err);
    } else {
      console.log('HTML file succesfully created!!');
    }
  });
} 