//Part 2 Multi-Dimensional Arrays and Tuples - Student Grades

// Define the Student type alias
type Student = {
    name: string;
    grades: number[];
  };
  
  // Create an array of students
  const students: Student[] = [
    {
      name: 'Student 1',
      grades: [80, 90, 70],
    },
    {
      name: 'Student 2',
      grades: [95, 85, 92],
    },
    {
      name: 'Student 3',
      grades: [78, 88, 91],
    },
  ];
  
  // Implement the calculateAverageGrade function
  function calculateAverageGrade(grades: number[]): number {
    const sum = grades.reduce((acc, current) => acc + current, 0);
    return sum / grades.length;
  }
  
  // Display each student's name and average grade
  students.forEach((student) => {
    const averageGrade = calculateAverageGrade(student.grades);
    console.log(`Name: ${student.name}`);
    console.log(`Average Grade: ${averageGrade}`);
    console.log('---');
  });
  