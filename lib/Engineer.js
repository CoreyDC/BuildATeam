const Employee = require('./Employee');

class Engineer extends Employee { 
    constructor(name, id, email, info, job) {
        super(name, id, email, info, job);
    }
    
    getJob() {
        return 'Engineer';
    }
};

module.exports = Engineer;