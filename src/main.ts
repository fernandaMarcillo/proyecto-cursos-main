import { GradeBookSetup } from "./entities/gradeBookSeutp";
import { Activity } from "./entities/activity";
import { Student } from "./entities/student";
import { Teacher } from "./entities/teacher";
import { Summary } from "./entities/summary";

let students: Student[] = [];
let teachers: Teacher[] = [];
let gradesBookSetup: GradeBookSetup[] = [];
let activity: Activity[] = [];
let Summary: Summary[] = [];

enum Area {
    Desarrollo = "Desarrollo de Software",
    Marketing = "Marketing",
    Turismo = "Turismo",
    Diseño ="Diseño",
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
    initSelect();
}

function addTeacher(): void {
    let currentTeacher: Teacher = {
        fullName: readFormHtml("fullName-teacher"),
        identification: parseInt(readFormHtml("identification-teacher")),
        mail: readFormHtml("mail-teacher"),
        direction: readFormHtml("direction-teacher"),
        title: readFormHtml("title-teacher"),
        area: readFormHtml("area-teacher")
    }
    teachers.push(currentTeacher);
    //console.log(teachers);
    console.table(teachers);
    initSelect();
}

function addActivity(): void {
    let currentActivity: Activity = {
        name: readFormHtml("name-activity")
    }
    activity.push(currentActivity);
    console.table(activity);
    initSelect();
}

function addGradeBookSetup(): void {
    let currentGradeBookSetup: GradeBookSetup = {
        value: readFormHtml("value-gradebook"),
        course: readFormHtml("course-gradebook"),
        activity: readFormHtml("activity"),
        maximunGrade: parseInt(readFormHtml("maximungrade-gradebook")),
    }
    gradesBookSetup.push(currentGradeBookSetup);
    console.table(gradesBookSetup);
    initSelect();
}

function addSummary(): void {
    let currentSummary: Summary = {
        namestudent: readFormHtml("detail-student"),
        namecourse: readFormHtml("detail-course"),
        note: readFormHtml("detail-note"),
        nameteacher: readFormHtml("detail-teacher"),
        qualification: readFormHtml("detail-qualification")
    }
    Summary.push(currentSummary);
    console.table(Summary);
    initSelect();
}

function initSelect(): void {
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

    let activities = document.getElementById("activity") as HTMLSelectElement;
    document.querySelectorAll("#activity option").forEach(option => option.remove());
    activity.forEach(
        (value) => {
            let option = document.createElement("option");
            option.value = value.name;
            option.text = value.name;
            activities.add(option)
        }
    );

    let name_Student = document.getElementById("detail-student") as HTMLSelectElement;
    document.querySelectorAll("#detail-student option").forEach(option => option.remove());
    students.forEach(
        (value) => {
            let option = document.createElement("option");
            option.value = value.fullName;
            option.text = value.fullName,
            name_Student.add(option);
        }
    );

    let detail_Course = document.getElementById("detail-course") as HTMLSelectElement;
    document.querySelectorAll("#detail-course option").forEach(option => option.remove());
    gradesBookSetup.forEach(
        (value) => {
            let option = document.createElement("option");
            option.value = value.course;
            option.text = value.course,
            detail_Course.add(option);
        }
    );

    let name_Teacher = document.getElementById("detail-teacher") as HTMLSelectElement;
    document.querySelectorAll("#detail-teacher option").forEach(option => option.remove());
    teachers.forEach(
        (value) => {
            let option = document.createElement("option");
            option.value = value.fullName;
            option.text = value.fullName,
            name_Teacher.add(option);
        }
    );
    let qualification = document.getElementById("qualification") as HTMLSelectElement;
    document.querySelectorAll("#qualification option").forEach(option => option.remove());
    activity.forEach(
        (value) => {
            let option = document.createElement("option");
            option.value = value.name;
            option.text = value.name;
            activities.add(option)
        }
    );
}
initSelect();


function readFormHtml(id: string): string {
    return (<HTMLInputElement>document.getElementById(id))!.value;
}