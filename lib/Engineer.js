// importing Employee module/class
const Employee = require('./Employee')

// declaring Engineer subclass as an extension of the Employee class
class Engineer extends Employee {
    constructor(name, id, email, github) {
        super(name, id, email)
        this.github = github
    }

    // function to retrieve info entered in CL
    getGithub() {
        return this.github;
    }

    getRole() {
        return 'Engineer'
    }

}

// exporting Engineer module/class
module.exports = Engineer;