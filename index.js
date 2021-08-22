// TODO: Include packages needed for this application
const inquirer = require('inquirer');
const fs = require('fs');
const generateMarkdown = require('./utils/generateMarkdown.js');

// TODO: Create an array of questions for user input
const questions = [{
        type: 'input',
        name: 'github',
        message: 'What is your github?'
    },
    {
        type: 'input',
        name: 'email',
        message: 'What is your email?'
    },
    {
        type: 'input',
        name: 'title',
        message: 'What is your project title?'
    },
    {
        type: 'input',
        name: 'description',
        message: 'What is your project description?'
    },
    {
        type: 'input',
        name: 'installation',
        message: 'What are the steps required to install your project?'
    },
    {
        type: 'input',
        name: 'usage',
        message: 'Provide instructions and examples for use. Include screenshots as needed.'
    },
    {
        type: 'input',
        name: 'license',
        message: 'What licenses do you have for this project?'
    },
    {
        type: 'input',
        name: 'contributing',
        message: 'What other developers contributed to this project?'
    }, {
        type: 'input',
        name: 'tests',
        message: 'Do you have certain tests for this project?'
    },
];

// // TODO: Create a function to write README file
function writeToFile(fileName, data) {
        fs.writeFile("./dist/" + fileName,data, err => {
            if (err) throw err
            console.log("README succesfully created!");
        });
}

// // TODO: Create a function to initialize app
function init() {
inquirer.prompt(questions).then(ans => {
 const readmeTemplate = generateMarkdown(ans);
 const fileName = 'README.md';
 writeToFile(fileName,readmeTemplate);
});

}

// // Function call to initialize app
init();