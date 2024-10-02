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
  }  //method which returnsa string of employee details
}
console.log("TASK ONE"); //addded for better console readability

const employee1 = new Employee("Jonas", 70000, "Sales Clerk", "Sales");
employee1.getDetails(); //for testing the class