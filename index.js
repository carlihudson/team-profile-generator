// module to create HTML file
const generateHTML = require('./generateHTML');

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
                name: 'id',
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
                name: 'email',
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
                name: 'officeNumber',
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
            console.log('Manager added successfully!');
            
        });
}

// function asking if user would like to add another, and if so what type
const addlEmployees = () => {
        return inquirer.prompt (
            [
                {
                    type: 'confirm',
                    name: 'role',
                    message: 'Would you like to add another employee?',
                    default: true
                },
                {
                    type: 'list',
                    name: 'roleType',
                    message: 'What kind of employee would you like to add?',
                    choices: ['Engineer', 'Intern'],
                    when: (confirm) => confirm.role === true
                    
                },
            ])
                .then((answers) => {
                    if(answers.role === true) {
                        if(answers.roleType === 'Engineer') {
                            addEngineer()
                        } else if(answers.roleType === 'Intern') {
                            addIntern()
                        }
                    } else {
                        generateFile()
                    }
                });
            };

// function called if user selects to add an engineer
const addEngineer = () => {
    return inquirer.prompt (
        [
            {
                type: 'input',
                message: 'Please enter the name of the Engineer.',
                name: 'engName',
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
                name: 'engId',
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
                name: 'engEmail',
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
                message: "What is their github username?",
                name: 'github',
                validate: githubInput => {
                    if(githubInput) {
                        return true;
                    } else {
                        console.log('Please enter a username');
                        return false;
                    }
                }
            },

        ]
    )
        .then(engineerInfo => {
            const { engName, engId, engEmail, github } = engineerInfo
            const engineer = new Engineer (engName, engId, engEmail, github);
            console.log('Engineer added successfully!');
            employeeArray.push(engineer); 
            console.log(engineer); 
            console.log(employeeArray);
            addlEmployees();
            
        });
}

// function called if user selects to add an intern
const addIntern = () => {
    return inquirer.prompt (
        [
            {
                type: 'input',
                message: 'Please enter the name of the Intern.',
                name: 'intName',
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
                name: 'intId',
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
                name: 'intEmail',
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
                message: "What school do they attend?",
                name: 'school',
                validate: schoolInput => {
                    if(schoolInput) {
                        return true;
                    } else {
                        console.log('Please enter a school');
                        return false;
                    }
                }
            },

        ]
    )
        .then(internInfo => {
            const { intName, intId, intEmail, school } = internInfo
            const intern = new Intern (intName, intId, intEmail, school);
            console.log('Intern added successfully!')
            employeeArray.push(intern); 
            console.log(intern); 
            console.log(employeeArray);
            addlEmployees();
            
        });
}

// write to file function that I still need to figure out
const writeToFile = (fileName, data) => {
    return fs.writeFileSync(path.join(process.cwd(), fileName), data);
}

const generateFile = (inquirerResponses => {
    writeToFile('./dist/index.html',
    generateHTML({...inquirerResponses}), (err) => err ?
    console.log(err) : console.log('Success! Creating your team profile'))
})
    
// Function call to initialize app
startQuestions()
    .then(addlEmployees)