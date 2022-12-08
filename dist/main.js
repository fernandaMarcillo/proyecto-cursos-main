"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
let students = [];
let teachers = [];
let gradesBookSetup = [];
let activity = [];
let Summary = [];
var Area;
(function (Area) {
    Area["Desarrollo"] = "Desarrollo de Software";
    Area["Marketing"] = "Marketing";
    Area["Turismo"] = "Turismo";
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
    initSelect();
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
    initSelect();
}
function addActivity() {
    let currentActivity = {
        name: readFormHtml("name-activity")
    };
    activity.push(currentActivity);
    console.table(activity);
    initSelect();
}
function addGradeBookSetup() {
    let currentGradeBookSetup = {
        value: readFormHtml("value-gradebook"),
        course: readFormHtml("course-gradebook"),
        activity: readFormHtml("activity"),
        maximunGrade: parseInt(readFormHtml("maximungrade-gradebook")),
    };
    gradesBookSetup.push(currentGradeBookSetup);
    console.table(gradesBookSetup);
    initSelect();
}
function addSummary() {
    let currentSummary = {
        namestudent: readFormHtml("detail-student"),
        namecourse: readFormHtml("detail-course"),
        note: readFormHtml("detail-note"),
        nameteacher: readFormHtml("detail-teacher"),
    };
    Summary.push(currentSummary);
    console.table(Summary);
    initSelect();
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
    let activities = document.getElementById("activity");
    document.querySelectorAll("#activity option").forEach(option => option.remove());
    activity.forEach((value) => {
        let option = document.createElement("option");
        option.value = value.name;
        option.text = value.name;
        activities.add(option);
    });
    let name_Student = document.getElementById("detail-student");
    document.querySelectorAll("#detail-student option").forEach(option => option.remove());
    students.forEach((value) => {
        let option = document.createElement("option");
        option.value = value.fullName;
        option.text = value.fullName,
            name_Student.add(option);
    });
    let detail_Course = document.getElementById("detail-course");
    document.querySelectorAll("#detail-course option").forEach(option => option.remove());
    gradesBookSetup.forEach((value) => {
        let option = document.createElement("option");
        option.value = value.course;
        option.text = value.course,
            detail_Course.add(option);
    });
    let name_Teacher = document.getElementById("detail-teacher");
    document.querySelectorAll("#detail-teacher option").forEach(option => option.remove());
    teachers.forEach((value) => {
        let option = document.createElement("option");
        option.value = value.fullName;
        option.text = value.fullName,
            name_Teacher.add(option);
    });
}
initSelect();
function readFormHtml(id) {
    return document.getElementById(id).value;
}
