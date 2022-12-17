// modules required for index
const inquirer = require('inquirer');
const fs = require('fs');
const path = require('path')
// const generateHTML = require('./generateHTML');

// array of questions for user input
const questions = [
    {
        type: 'input',
        message: 'Please enter your name',
        name: 'name',
    },
    {
        type: 'input',
        message: 'What is your employee ID?',
        name: 'id',
    },
    {
        type: 'input',
        message: "What is your email address?",
        name: 'email',
    },
    
    // employee specific questions
    {
        type: 'input',
        message: "What is your GitHub username?",
        name: 'github',
    },
    {
        type: 'input',
        message: "What is your office number?",
        name: 'officeNumber',
    },
    {
        type: 'input',
        message: "What school do you go to?",
        name: 'school',
    }
]


function writeToFile(fileName, data) {
    return fs.writeFileSync(path.join(process.cwd(), fileName), data);
}

function init() {
    inquirer
        .prompt(questions)
        .then(inquirerResponses => {
            writeToFile('./dist.index.html', 
            generateHTML({...inquirerResponses}), (err) => err ? 
            console.log(err) : console.log('success!'));
            
        });
}



// Function call to initialize app
init()