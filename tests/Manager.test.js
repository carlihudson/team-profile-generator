const Manager = require('../lib/Manager');

describe('Manager', () => { 
    describe('initialization', () => {
        it('should generate an Employee-Manager object containing a name, id, email, and office number', () => { 
        const manager = new Manager('Carli', 1234, 'carlihudson@gmail.com', 123-456-7890);
        expect(manager.officeNumber).toEqual(123-456-7890);
        }
        )
    })
    describe('getOfficeNumber', () => {
        it("should retrieve manager's office number", () => {
        const manager = new Manager('Carli', 1234, 'carlihudson@gmail.com', 123-456-7890);
        expect(manager.getOfficeNumber()).toEqual(123-456-7890); 
        })
    })
    describe('getRole', () => {
        it('should return "Manager"', () => {
        const manager = new Manager('Carli', 1234, 'carlihudson@gmail.com', 123-456-7890);
        expect(manager.getRole()).toEqual('Manager'); 
        })
    })
   
}
);