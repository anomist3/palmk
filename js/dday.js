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
var esGraduationDday = Math.floor(esGraduationTime/(1000 * 60 * 60 * 24));

var testDate = new Date("2022-1-1");
var toTestDate = testDate.getTime();
var testDateTime = toTestDate - toNow;
var testDate = Math.round(testDateTime / (1000 * 60 * 60 * 24)); 

var testDate22 = new Date("2020-12-25");
var toTestDate2 = testDate22.getTime();
var testDateTime2 = toTestDate2 - toNow;
var testDate2 = Math.round(testDateTime2 / (1000 * 60 * 60 * 24)); 

var testDate33 = new Date("2021-1-1");
var toTestDate3 = testDate33.getTime();
var testDateTime3 = toTestDate3 - toNow;
var testDate3 = +(testDateTime3 / (1000 * 60 * 60 * 24).toFixed()); 

document.querySelector("#school-festival").innerText = schoolFestivalDday + "일";
document.querySelector("#winter-vacation").innerText = passedDay + "일";
document.querySelector("#es-graduation").innerText = esGraduationDday + "일";
document.querySelector("#test").innerText = testDate + "일";
document.querySelector("#test2").innerText = testDate2 + "일";
