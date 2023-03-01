class Employee {
    constructor(name, id, email, info, job = 'Employee') {
        this.name = name;
        this.id = id;
        this.email = email;
        this.info = info;
        this.job = job;
    }

    getName() {
        return this.name;
    }

    getId() {
        return this.id;
    }

    getEmail() {
        return this.email;
    }

    getInfo() {
        return this.info;
    }

    getJob() {
        return this.job;
    }
};

module.exports = Employee;