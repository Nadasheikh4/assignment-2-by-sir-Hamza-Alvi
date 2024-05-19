//Part 2 Multi-Dimensional Arrays and Tuples - Student Grades
// Create an array of students
var students = [
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
function calculateAverageGrade(grades) {
    var sum = grades.reduce(function (acc, current) { return acc + current; }, 0);
    return sum / grades.length;
}
// Display each student's name and average grade
students.forEach(function (student) {
    var averageGrade = calculateAverageGrade(student.grades);
    console.log("Name: ".concat(student.name));
    console.log("Average Grade: ".concat(averageGrade));
    console.log('---');
});
