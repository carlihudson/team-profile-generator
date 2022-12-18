// Importing Employee module/class
const Employee = require('./Employee')

// declaring Manager subclass as an extension of the Employee class
class Manager extends Employee {
    constructor(name, id, email, officeNumber) {
        super(name, id, email)
        this.officeNumber = officeNumber
        }

         // functions retrieving info entered in CL 
        getOfficeNumber() {
            return this.officeNumber;
        }

        getRole() {
            return 'Manager'
        }
    
}

// exporting Manager module/class
module.exports = Manager;