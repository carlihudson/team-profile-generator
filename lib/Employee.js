// declaring Employee class
class Employee{
    constructor(name, id, email) {
        this.name = name;
        this.id = id;
        this.email = email
    }

    // functions to retrieve information entered in CL
    getName() {
        return this.name;
    }

    getId() {
        return this.id;
    }

    getEmail() {
        return this.email;
    }

    getRole() {
        return 'Employee';
    }
}

// Employee class export
module.exports = Employee;