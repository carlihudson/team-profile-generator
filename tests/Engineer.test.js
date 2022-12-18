const Engineer = require('../lib/Engineer');

describe('Engineer', () => { 
    describe('initialization', () => {
        it('should generate an Employee-Engineer object containing a name, id, email, and github username', () => { 
        const engineer = new Engineer('Carli', 1234, 'carlihudson@gmail.com', 'carlihudson');
        expect(engineer.github).toEqual('carlihudson');
        }
        )
    })
    describe('getGithub', () => {
        it('should retrieve employee github username', () => {
        const engineer = new Engineer('Carli', 1234, 'carlihudson@gmail.com', 'carlihudson');
        expect(engineer.getGithub()).toEqual('carlihudson'); 
        })
    })
    describe('getRole', () => {
        it('should return "Engineer"', () => {
        const engineer = new Engineer('Carli', 1234, 'carlihudson@gmail.com', 'carlihudson');
        expect(engineer.getRole()).toEqual('Engineer'); 
        })
    })
   
}
);
    