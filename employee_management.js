//Basic Setup

//TASK ONE

class Employee {
    constructor(name, salary, position, department){
        this.name = name;
        this.salary = salary;
        this.position = position;
        this.department = department; 
    } //initalization 
  getDetails(){
    console.log(`${this.name} works as a ${this.position} for $${this.salary}`);
  }  //method which returns a string of employee details
}
console.log("TASK ONE"); //addded for better console readability

const employee0 = new Employee("Jonas", 70000, "Sales Clerk", "Sales");
console.log(employee0.getDetails()); //for testing the class

//TASK TWO

class Department {
    constructor(name){
        this.name = name;
        this.employees =[];
    }
addEmployee(employee){
    this.employees.push(employee); //will create new employees and push it into the employees array 
}
getDepartmentSalary(){
    return this.employees.reduce((total,employee) =>{
        return total + (employee.salary || 0);
    },0);
} //will calculate the total department salary
}

console.log("TASK TWO"); //added for better console readability
const salesDepartment = new Department("Sales Department"); //for testing the methods and class
const employee1 = new Employee("Trey", 70000, "Sales Clerk", "Sales"); //for testing the methods and class // the output of the employees array now contains the employee details for Trey
salesDepartment.addEmployee(employee1); //for testing the methods and class
console.log(salesDepartment.employees);
const totalSalary = salesDepartment.getDepartmentSalary(); //for testing the methods and class
console.log(`Total Department Salary for ${salesDepartment.name} $${totalSalary}`); //for testing the methods and class outputs total department salary 70,000

//TASK THREE

class Manager extends Employee {
    constructor(name,salary,position,department,bonus){
        super(name,salary,position,department); //tells the new class what to adpot from the parent
        this.bonus = bonus; //new const. must be initialized
    
    }
    getDetails(){
        console.log(`${this.name} works as a ${this.position} for $${this.salary} with a bonus of $${this.bonus}`);
    }
}

console.log("TASK THREE"); //added for better console readability
const employee3 = new Manager("Alex", 100000, "Sales Manager", "Sales", 9000); //new manager
console.log(employee3.getDetails()); //output ALex works as a Sales Manager for 100,000


//TASK FOUR

class DepartmentBonus extends Department {
    constructor(name){
        super(name); //adopts from parent class department
    }
    calculateTotalSalaryWithBonus(){
        return this.employees.reduce((total,employee) => {
            return total + employee.salary + (employee instanceof Manager ? employee.bonus : 0); //checks if they meet the manager requirement before calculating bonus
        }, 0);
    }
}

console.log("TASK FOUR");
const salesDepartmentBonus = new DepartmentBonus("Sales Department Bonus"); //for testing
salesDepartmentBonus.addEmployee(employee1); //adding employee to employees array and sales
salesDepartmentBonus.addEmployee(employee3);//adding employee to employees array and sales
const totalSalaryBonus = salesDepartmentBonus.calculateTotalSalaryWithBonus();
console.log(`Total Department Salary plus Bonus for ${salesDepartmentBonus.name}: $${totalSalaryBonus}`); // output total depaerment salary plus bonus for sales department is 179000