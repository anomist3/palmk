var now = new Date();
var winterVacation = new Date("2020-12-30");
var toNow = now.getTime();
var toWinterVacation = winterVacation.getTime();
var passedTime = toWinterVacation - toNow;
var passedDay = Math.round(passedTime/(1000 * 60 * 60 * 24));

var schoolFestival = new Date("2020-11-27");
var toSchoolFestival = schoolFestival.getTime();
var schoolFestivalTime = toSchoolFestival - toNow;
var schoolFestivalDday = Math.round(schoolFestivalTime/(1000 * 60 * 60 * 24)); 

var esGraduation = new Date("2021-2-19");
var toEsGraduation = esGraduation.getTime();
var esGraduationTime = toEsGraduation - toNow;
var esGraduationDday = Math.round(esGraduationTime/(1000 * 60 * 60 * 24));

document.querySelector("#school-festival").innerText = schoolFestivalDday + "일";
document.querySelector("#winter-vacation").innerText = passedDay + "일";
document.querySelector("#es-graduation").innerText = esGraduationDday + "일";
