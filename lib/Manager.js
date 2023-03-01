const Employee = require('./Employee');

class Manager extends Employee { 
    constructor(name, id, email, info, job) {
        super(name, id, email, info, job);
    }   

    getJob() {
        return 'Manager';
    }
};

module.exports = Manager;