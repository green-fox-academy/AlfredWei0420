function Person(name, age){
    this.name = name;
    this.age = age;
}

function Employee(name, age, salary, department="unknown", hiredAt=new Date().toLocaleDateString(), leftAt=null, status="active", maxSalaryMultipler=1){
    Person.call(this, name, age);
    this.salary = salary;
    this.department = department;
    this.hiredAt = hiredAt;
    this.leftAt = leftAt;
    this.status = status;
    this.maxSalaryMultipler = maxSalaryMultipler;
}

Employee.prototype = Object.create(Person.prototype);
Employee.prototype.constructor = Employee;

Employee.prototype.getInfo = function(){
    if(this.leftAt !== null){
        return (`This person left at ${this.leftAt}`);
    }else {
        return (`${this.name} works at ${department} for ${salary} USD from ${hiredAt}`);
    }
};
//why isFired
Employee.prototype.quit = function(isFired){
    try{
        if(this.status === 'active'){
            this.leftAt = new Date().toLocaleDateString();
            this.status = isFired;
        }else{
            throw new Error('This guy left');
        }
    }
    catch(error){
        console.log(error);
    }
}

Employee.prototype.increaseSalaryBy = function(newSalary){
    try {
        if(newSalary > this.salary * this.maxSalaryMultipler){
            throw new Error('Reject!')
        }else {
            this.salary = newSalary;
        }
    } catch (error) {
        
    }
}

Employee.prototype.setDepartment = function(newDepartment){
    this.department = newDepartment;
}

function Developer(name, age, salary, department="unknown", hiredAt=new Date().toLocaleDateString(), leftAt=null, status="active", maxSalaryMultipler=1.05, level){
    Employee.call(this,salary, department, hiredAt, leftAt, status, maxSalaryMultipler);
    this.level =level;
}

Developer.prototype = Object.create(Employee.prototype);
Developer.prototype.constructor = Developer;

Developer.changeLevel = function(newLevel){
    this.level = newLevel;
}

function Director(name, age, salary, department = 'unknown', hiredAt = new Date().toLocaleDateString(), leftAt = null, status = 'active', maxSalaryMultiplier = 1.1) {
    Developer.call(this, salary, department, hiredAt, leftAt, status, maxSalaryMultipler);
  }

Director.prototype = Object.create(Employee.prototype);
Director.prototype.constructor = Director;

Employee.prototype.fireEmployee = function(employeeToFire){
    try {
        if(employeeToFire instanceof Employee){
            employeToFire.quit(true)
        }else {
            throw new Error(`${employeeToFire} is not an employee`)
        }
    } catch (error) {
        console.log(err);
    }
}

Director.prototype.promoteDeveloper = function(developerToPromote, newLevel) {
    try {
        if(developerToPromote instanceof Developer){
            developerToPromote.level = newLevel;
        }else {
            throw new Error(`${developerToPromote} is not an developer`);
        }
    } catch (error) {
        console.log(err);
    }
  }