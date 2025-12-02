interface StudentInfo {
  name: string;
  grades: number[];
}

interface GradeAnalysisReport {
  studentName: string;
  averageGrade: number;
  highestGrade: number;
  // lowestGrade: number;
  passed: boolean;
  summary: string;
}


function analyzeGrades(student: StudentInfo, minimumPassGrade: number)
  : GradeAnalysisReport {
  // Validate student info object exists
  if (!student) {
    throw new Error("Student info is missing!");
  }

  // Validate student name exists
  if (!student.name) {
    throw new Error("Student name is missing!");
  }

  // Validate grades array is not empty
  if (!student.grades || student.grades.length === 0) {
    throw new Error("Grades array cannot be empty!");
  }

  // Validate that all grades are within the valid range [2…6]
  for (const grade of student.grades) {
    if (grade < 2 || grade > 6) {
      throw new Error(`Invalid grade: ${grade}. Grades must be between 2 and 6.`);
    }
  }

  // Calculate the average grade (number)
  const sumGrades = student.grades.reduce((sum, grade) => sum + grade, 0);
  const averageGrade = sumGrades / student.grades.length;

  // Determine if the student has passed
  const passed = averageGrade >= minimumPassGrade;

  // Determine the highest grade
  const highestGrade = Math.max(...student.grades);

  let summary = passed ?
    `${student.name}'s average grade is ${averageGrade.toFixed(2)}. Excellent! The student passed with a highest grade of ${highestGrade}.` :
    `${student.name}'s average grade is ${averageGrade.toFixed(2)}. Unfortunately, the student did not meet the minimum grade of ${minimumPassGrade}.`;

  let result = {
    studentName: student.name,
    averageGrade: parseFloat(averageGrade.toFixed(2)),
    highestGrade: highestGrade,
    passed: passed,
    summary: summary
  };

  return result;
}

console.log(analyzeGrades({ name: "Alice", grades: [5, 5, 5, 6] }, 4));

console.log(analyzeGrades({ name: "Eve", grades: [2] }, 3));

try {
  console.log(analyzeGrades({ name: "Frank", grades: [5, 1, 5, 4] }, 4));
} catch (error: any) {
  console.log(error.message);
}
