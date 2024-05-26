// Create an array of student objects
var students = [
    { name: "Hassan", grades: [80, 75, 90] },
    { name: "Imran", grades: [85, 90, 95] },
    { name: "Hamza", grades: [70, 65, 80] }
];
// Function to calculate average grade
function calculateAverageGrade(grades) {
    var total = grades.reduce(function (acc, grade) { return acc + grade; }, 0);
    return total / grades.length;
}
;
// Display each student's name and average grade
students.forEach(function (student) {
    var averageGrade = calculateAverageGrade(student.grades);
    console.log("".concat(student.name, "'s average grade is ").concat(averageGrade.toFixed(2)));
});
