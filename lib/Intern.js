// Importing Employee module/class
const Employee = require('./Employee')

// declaring Intern subclass as an extension of the Employee class
class Intern extends Employee {
    constructor(name, id, email, school) {
        super(name, id, email)
        this.school = school
    }

    // functions retrieving info entered in CL  
    getSchool() {
        return this.school;
    }

    getRole() {
        return 'Intern'
    }
    
}

// exporting Intern module/class
module.exports = Intern;