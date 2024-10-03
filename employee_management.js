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
    return this.employees.reduce((total) => total + this.employees.salary, 0);
} //will calculate the total department salary
}

console.log("TASK TWO"); //added for better console readability
const salesDepartment = new Department("Sales Department"); //for testing the methods and class
const employee1 = new Employee("Trey", 70000, "Sales Clerk", "Sales"); //for testing the methods and class // the output of the employees array now contains the employee details for Trey
salesDepartment.addEmployee(employee1); //for testing the methods and class

const totalSalary = salesDepartment.getDepartmentSalary(); //for testing the methods and class
console.log(`Total Department Salary for ${salesDepartment.name} $${totalSalary}`); //for testing the methods and class

