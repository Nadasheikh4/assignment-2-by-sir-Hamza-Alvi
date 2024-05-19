//PartPart 3 Array with Types and Indexing - Employee Salaries 3 Array with Types and Indexing - Employee Salaries
// Define the Student type alias


  // Define the Employee type alias
type Employee = {
    name: string;
    hoursWorked: number;
    hourlyRate: number;
    salary: number;
  };
  
  // Create an array of employees
  const employees: Employee[] = [
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
  function calculateSalary(employee: Employee): number {
    const baseSalary = employee.salary;
    const hoursBonus = employee.hoursWorked >= 20 ? 0.1 : 0;
    const bonus = baseSalary * hoursBonus;
    const totalSalary = baseSalary + (employee.hoursWorked * employee.hourlyRate) + bonus;
    return totalSalary;
  }
  
  // Calculate and display each employee's total salary
  employees.forEach((employee) => {
    const totalSalary = calculateSalary(employee);
    console.log(`Name: ${employee.name}`);
    console.log(`Total Salary: ${totalSalary}`);
    console.log('---');
  });
  
  