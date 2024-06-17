const students = [
  { name: "Alice", scores: [85, 92, 78] },
  { name: "Bob", scores: [59, 63, 70] },
  { name: "Charlie", scores: [100, 95, 98] },
  { name: "David", scores: [45, 52, 60] },
  { name: "Eve", scores: [75, 80, 82] },
];

calculateGrades = (students) => {
  const results = [];
  students.forEach((student) => {
    let sum = 0;

    sum = student.scores.reduce((total, score) => total + score);
    let avgScore = 0;
    avgScore = sum / student.scores.length;

    if (avgScore >= 90) {
      grade = "A";
    } else if (avgScore >= 80) {
      grade = "B";
    } else if (avgScore >= 70) {
      grade = "C";
    } else if (avgScore >= 60) {
      grade = "D";
    } else {
      grade = "F";
    }

    results.push({ name: student.name, grade: grade });
  });
  return results;
};

console.log(calculateGrades(students));
