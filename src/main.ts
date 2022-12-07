import { Activity } from "./entities/activity";
import { GradeBookSetup } from "./entities/gradeBookSeutp";
import { Student } from "./entities/student";
import { Teacher } from "./entities/teacher";

let students: Student[] = [];
let teachers: Teacher[] = [];
let activities:Activity[] = [];
let gradesBookSetup: GradeBookSetup[] = [];


enum Course{
    Programacion = "Programacion Visual",
    BaseDatos = "Base de Datos",
    Metodologias = "Metodologias",
}
enum Area{
    Desarrollo = "Desarrollo de Software",
    Marketing = "Marketing",
    Turismo = "Turismo",
}

function addStudent(): void {
    let currentStudent: Student = {
        fullName: readFormHtml("fullName"),
        identification: parseInt(readFormHtml("identification")),
        mail: readFormHtml("mail"),
        direction: readFormHtml("direction"),
        enrollment: parseInt(readFormHtml("enrollment")),
        level: readFormHtml("level"),
    }
    students.push(currentStudent);
    console.table(students);
}

function addTeacher(): void {
    let currentTeacher: Teacher = {
        fullName: readFormHtml("fullName-teacher"),
        identification: parseInt(readFormHtml("identification-teacher")),
        mail: readFormHtml("mail-teacher"),
        direction: readFormHtml("direction-teacher"),
        title : readFormHtml("title-teacher"),
        area : readFormHtml("area-teacher")
    }
    teachers.push(currentTeacher);
    //console.log(teachers);
    console.table(teachers);
}
function addActivity(): void {
    let currentActivity: Activity = {
        name: readFormHtml("name-activity"),
    }
    activities.push(currentActivity);
    console.table(activities);
    initCourse();
}

function addGradeBookSetup(): void {
    let currentGradeBookSetup: GradeBookSetup = {
        value: readFormHtml("value-gradebook"),
        course: readFormHtml("course-gradebook"),
        activity: readFormHtml("activity-gradebook"),
        maximunGrade: parseInt(readFormHtml("maximungrade-gradebook")),
    }
    gradesBookSetup.push(currentGradeBookSetup);
    console.table(gradesBookSetup);
}

function initCourse():void{
    let courseGradeBook = document.getElementById("course-gradebook") as HTMLSelectElement;
    let courses = Object.values(Course);
courses.forEach(
    (value) => {
     let option = document.createElement("option"); 
       option.value = value;
       option.text = value,
       courseGradeBook.add(option);
    }
);
}
initCourse();
function initArea():void{
    let area = document.getElementById("area-teacher") as HTMLSelectElement;
    let areas = Object.values(Area);
areas.forEach(
    (value) => {
     let option = document.createElement("option"); 
       option.value = value;
       option.text = value,
       area.add(option);
    }
);
}
initArea();









function readFormHtml(id: string): string {
    return (<HTMLInputElement>document.getElementById(id))!.value;
}