interface IStudent {
    name: string;
    grades: number[];
}
interface IStudentWithGrade extends IStudent {
    avgGrade: number;
}
let ann: IStudent = { name: "Ann", grades: [5, 6] };
console.log(ann);
let bob: IStudentWithGrade = { name: "Bob", grades: [6, 6, 5], avgGrade: 5.67 };
console.log(bob);