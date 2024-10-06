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
employee0.getDetails(); //for testing the class

//TASK TWO
const employees = []; //empty array for employees
class Department {
    constructor(name, _employees, salary){
        this.name = name;
        this.employees = [];
        this.salary = salary;

    }
addEmployee(employee){
    employees.push(employee); //will create new employees and push it into the employees array 
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
console.log(employees);
const totalSalary = salesDepartment.getDepartmentSalary(); //for testing the methods and class
console.log(`Total Department Salary for ${salesDepartment.name} $${totalSalary}`); //for testing the methods and class

//TASK THREE

class Manager extends Employee {
    constructor(name,salary,position,department,bonus){
        super(name,salary,position,department); //tells the new class what to adpot from the parent
        this.bonus = bonus; //new const. must be initialized
    
    }
    getDetails(){
        console.log(`${this.name} works as a ${this.position} for $${this.salary}`);
    }
}

console.log("TASK THREE") //added for better console readability
const employee3 = new Manager("Alex", 100000, "Sales Manager", "Sales"); //new manager
employee3.getDetails(); //output ALex works as a Sales Manager for 100,000
