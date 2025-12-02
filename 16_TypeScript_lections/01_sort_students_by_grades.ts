interface Student {
  name: string;
  grades: number[];
  avgGrade?: number;
}

function sortStudents(...students: Student[]): Student[] {
  const withAvg = students.map((student, index) => ({
    ...student,
    avgGrade: student.grades.reduce((sum, grade) => sum + grade, 0) /
      student.grades.length,
    _index: index,
  }));

  withAvg.sort((a, b) => {
    if (b.avgGrade! !== a.avgGrade!) {
      return b.avgGrade! - a.avgGrade!;
    }
    return b._index - a._index;
  });

  return withAvg.map((item) => ({
    name: item.name,
    grades: item.grades,
    avgGrade: item.avgGrade,
  }));
}

console.log(
  sortStudents(
    { name: "Peter", grades: [5, 6, 6, 6, 5.6] },
    { name: "Steve", grades: [5, 4, 4.5, 5, 5.3] },
    { name: "Maria", grades: [6, 6, 5, 6] },
    { name: "Clara", grades: [6, 6, 6, 5] }
  )
);
