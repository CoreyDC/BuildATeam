const Employee = require('./Employee');

class Intern extends Employee { 
    constructor(name, id, email, info, job) {
        super(name, id, email, info, job);
    }
    
    getJob() {
        return 'Intern';
    }
};

module.exports = Intern;