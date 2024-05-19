//PartPart 3 Array with Types and Indexing - Employee Salaries 3 Array with Types and Indexing - Employee Salaries
// Define the Student type alias
// Create an array of employees
var employees = [
    {
        name: 'Employee 1',
        hoursWorked: 15,
        hourlyRate: 20,
        salary: 30000,
    },
    {
        name: 'Employee 2',
        hoursWorked: 25,
        hourlyRate: 25,
        salary: 40000,
    },
    {
        name: 'Employee 3',
        hoursWorked: 10,
        hourlyRate: 15,
        salary: 20000,
    },
];
// Implement the calculateSalary function
function calculateSalary(employee) {
    var baseSalary = employee.salary;
    var hoursBonus = employee.hoursWorked >= 20 ? 0.1 : 0;
    var bonus = baseSalary * hoursBonus;
    var totalSalary = baseSalary + (employee.hoursWorked * employee.hourlyRate) + bonus;
    return totalSalary;
}
// Calculate and display each employee's total salary
employees.forEach(function (employee) {
    var totalSalary = calculateSalary(employee);
    console.log("Name: ".concat(employee.name));
    console.log("Total Salary: ".concat(totalSalary));
    console.log('---');
});
// Output:
// Name: Employee 1
// Total Salary: 31500
// ---
// Name: Employee 2
// Total Salary: 52500
// ---
// Name: Employee 3
// Total Salary: 22000
// ---
