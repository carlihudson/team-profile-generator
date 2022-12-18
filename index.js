// module to create HTML file
// const generateHTML = require('./generateHTML');

// required node modules
const inquirer = require('inquirer');
const fs = require('fs');
const path = require('path')

// employee modules
const Employee = require('./lib/Employee');
const Engineer = require('./lib/Engineer');
const Intern = require('./lib/Intern');
const Manager = require('./lib/Manager');

// array where employee data entered will go
const employeeArray = [];

// function to begin employee questions
const startQuestions = () =>  {
    return inquirer.prompt (
        [
            {
                type: 'input',
                message: 'Who is the manager of this team?',
                name: 'name',
                validate: nameInput => {
                    if(nameInput) {
                        return true;
                    } else {
                        console.log('Please enter a name');
                        return false;
                    }
                }
            },
            {
                type: 'input',
                message: 'What is their ID number?',
                id: 'id',
                validate: idInput => {
                    if(isNaN(idInput)) {
                        console.log('Please enter a valid ID number');
                        return false;
                    } else {
                        return true;
                    }
                }

            },
            {
                type: 'input',
                message: "What is their email address?",
                email: 'email',
                validate: emailInput => {
                    valid = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/.test(emailInput)
                    if (valid) {
                        return true;
                    } else {
                        console.log ('Please enter an email address')
                        return false; 
                    }
                }
            },
            {
                type: 'input',
                message: "What is their office number?",
                officeNumber: 'officeNumber',
                validate: officeInput => {
                    if(isNaN(officeInput)) {
                        console.log('Please enter a valid office number');
                        return false;
                    } else {
                        return true;
                    }
                }
            },

        ]
    )
        .then(managerInfo => {
            const { name, id, email, officeNumber } = managerInfo
            const manager = new Manager (name, id, email, officeNumber);
            employeeArray.push(manager); 
            console.log(manager); 

            // writeToFile('./dist.index.html', 
            // generateHTML({...inquirerResponses}), (err) => err ? 
            // console.log(err) : console.log('success!'));
            
        });
}

   
 
   
    
//     // employee specific questions
//     {
//         type: 'input',
//         message: "What is your GitHub username?",
//         name: 'github',
//     },
   
//     {
//         type: 'input',
//         message: "What school do you go to?",
//         name: 'school',
//     }
// ]


// function writeToFile(fileName, data) {
//     return fs.writeFileSync(path.join(process.cwd(), fileName), data);
// }





// Function call to initialize app
startQuestions()