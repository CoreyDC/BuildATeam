// BRINGING IN PACKAGES FOR APP
const inquirer = require('inquirer');
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
        }
    }) 
}

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
            name: 'office',
            message: 'What is managers office number?',
        },
    ]

    inquirer.prompt(managerPrompts)
        .then(res => {
            const newManager = new Manager(res.name, res.id, res.email, res.office);
            console.log(newManager);
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
            name: 'github',
            message: 'What is engineers office number?',
        },
    ]

    inquirer.prompt(engineerPrompts);
};

// FUNCTION TO ADD ENGINEER
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
            name: 'school',
            message: 'Where does intern go to school?',
        },
    ]

    inquirer.prompt(internPrompts);
};

