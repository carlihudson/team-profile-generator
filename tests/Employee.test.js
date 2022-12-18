const Employee = require('../lib/Employee');

describe('Employee', () => { 
    describe('initialization', () => {
        it('should generate an Employee object containing a name, id, and email', () => { 
        const employee = new Employee('Carli', 1234, 'carlihudson@gmail.com');
        expect(employee.name).toEqual('Carli');
        expect(employee.id).toEqual(1234);
        expect(employee.email).toEqual('carlihudson@gmail.com');
        }
        )
    })
    describe('getName', () => {
        it('should retrieve employee name', () => {
        const employee = new Employee('Carli', 1234, 'carlihudson@gmail.com');
        expect(employee.getName()).toEqual('Carli'); 
        })
    })
    describe('getId', () => {
        it('should retrieve employee Id', () => {
        const employee = new Employee('Carli', 1234, 'carlihudson@gmail.com');
        expect(employee.getId()).toEqual(1234); 
        })
    })
    describe('getEmail', () => {
        it('should retrieve employee email address', () => {
        const employee = new Employee('Carli', 1234, 'carlihudson@gmail.com');
        expect(employee.getEmail()).toEqual('carlihudson@gmail.com'); 
        })
    })
    describe('getRole', () => {
        it('should return "Employee"', () => {
        const employee = new Employee('Carli', 1234, 'carlihudson@gmail.com');
        expect(employee.getRole()).toEqual('Employee'); 
        })
    })

}
);
    
   


