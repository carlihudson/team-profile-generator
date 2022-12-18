const Intern = require('../lib/Intern');

describe('Intern', () => { 
    describe('initialization', () => {
        it('should generate an Employee-Intern object containing a name, id, email, and school', () => { 
        const intern = new Intern('Carli', 1234, 'carlihudson@gmail.com', 'UCLA');
        expect(intern.school).toEqual('UCLA');
        }
        )
    })
    describe('getSchool', () => {
        it('should retrieve school intern goes to', () => {
        const intern = new Intern('Carli', 1234, 'carlihudson@gmail.com', 'UCLA');
        expect(intern.getSchool()).toEqual('UCLA'); 
        })
    })
    describe('getRole', () => {
        it('should return "Intern"', () => {
        const intern = new Intern('Carli', 1234, 'carlihudson@gmail.com', 'UCLA');
        expect(intern.getRole()).toEqual('Intern'); 
        })
    })
   
}
);
    