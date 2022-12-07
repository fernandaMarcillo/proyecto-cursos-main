"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
let students = [];
let teachers = [];
let activities = [];
let gradesBookSetup = [];
var Course;
(function (Course) {
    Course["Programacion"] = "Programacion Visual";
    Course["BaseDatos"] = "Base de Datos";
    Course["Metodologias"] = "Metodologias";
})(Course || (Course = {}));
var Area;
(function (Area) {
    Area["Desarrollo"] = "Desarrollo de Software";
    Area["Marketing"] = "Marketing";
    Area["Turismo"] = "Turismo";
    Area["Dise\u00F1o"] = "Dise\u00F1o de Modas";
})(Area || (Area = {}));
function addStudent() {
    let currentStudent = {
        fullName: readFormHtml("fullName"),
        identification: parseInt(readFormHtml("identification")),
        mail: readFormHtml("mail"),
        direction: readFormHtml("direction"),
        enrollment: parseInt(readFormHtml("enrollment")),
        level: readFormHtml("level"),
    };
    students.push(currentStudent);
    console.table(students);
}
function addTeacher() {
    let currentTeacher = {
        fullName: readFormHtml("fullName-teacher"),
        identification: parseInt(readFormHtml("identification-teacher")),
        mail: readFormHtml("mail-teacher"),
        direction: readFormHtml("direction-teacher"),
        title: readFormHtml("title-teacher"),
        area: readFormHtml("area-teacher")
    };
    teachers.push(currentTeacher);
    //console.log(teachers);
    console.table(teachers);
}
function addActivity() {
    let currentActivity = {
        name: readFormHtml("name-activity"),
    };
    activities.push(currentActivity);
    console.table(activities);
    initSelect();
}
function addGradeBookSetup() {
    let currentGradeBookSetup = {
        value: readFormHtml("value-gradebook"),
        course: readFormHtml("course-gradebook"),
        activity: readFormHtml("activity-gradebook"),
        maximunGrade: parseInt(readFormHtml("maximungrade-gradebook")),
    };
    gradesBookSetup.push(currentGradeBookSetup);
    console.table(gradesBookSetup);
}
function initSelect() {
    let area = document.getElementById("area-teacher");
    let areas = Object.values(Area);
    areas.forEach((value) => {
        let option = document.createElement("option");
        option.value = value;
        option.text = value,
            area.add(option);
    });
    let courseGradeBook = document.getElementById("course-gradebook");
    let courses = Object.values(Course);
    courses.forEach((value) => {
        let option = document.createElement("option");
        option.value = value;
        option.text = value,
            courseGradeBook.add(option);
    });
    let activityGradebook = document.getElementById("activity-gradebook");
    document.querySelectorAll("#activity-gradebook option").forEach(option => option.remove());
    activities.forEach((value) => {
        let option = document.createElement("option");
        option.value = value.name;
        option.text = value.name,
            activityGradebook.add(option);
    });
}
initSelect();
function readFormHtml(id) {
    return document.getElementById(id).value;
}
