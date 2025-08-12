// 오늘 날짜
let today = new Date();

let year = today.getFullYear();
let month = today.getMonth() + 1;
let date = today.getDate();
let day = today.getDay();

const WEEKDAY = ['일', '월', '화', '수', '목', '금', '토']

document.getElementById("day").textContent = `${year}년 ${month}월 ${date}일(${WEEKDAY[day]})`;