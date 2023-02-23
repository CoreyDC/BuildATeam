// BRINGING IN PACKAGES FOR APP
const inquirer = require('inquirer');

// AN ARRAY OF QUESTIONS FOR USER INPUT
const userPrompts = [
    {
        type: 'input',
        maxlength: 3,
        name: 'characters',
        message: 'Type 3 letters for you logo: ',
    },
]

inquirer.prompt(userPrompts);



