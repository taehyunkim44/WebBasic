let classmates = ["철수", "영희", "훈이"];
// undefined
classmates;
// (3) ['철수', '영희', '훈이']
classmates[0];
// '철수'
classmates[1];
// '영희'
classmates[2];
// '훈이'
classmates.includes("훈이");
// true
classmates.includes("맹구");
// false
classmates.length;
// 3
classmates.push("맹구");
// 4
classmates.includes("맹구");
// true
classmates;
// (4) ['철수', '영희', '훈이', '맹구']
classmates.length;
// 4
classmates.pop();
// '맹구'
classmates.length;
// 3
classmates;
// (3) ['철수', '영희', '훈이']

// 퀴즈1
// developer라는 변수에 개발자 키워드 5개 배열 할당 뒤 index를 이용하여 콘솔에 표시

let developer;
// undefined
developer = ["javascript", "NestJS", "노력", "꾸준함", "복습"];
// (5) ['javascript', 'NestJS', '노력', '꾸준함', '복습']
developer[3];
// '꾸준함'

// 퀴즈2
// dream 이라는 변수에 ["커리어점프","성공","할수있다"] 배열을 할당한 뒤
// developer 배열과 하나로 합쳐 보세요

let dream = ["커리어점프", "성공", "할수있다", "복습"];
// undefined
dream;
// (4) ['커리어점프', '성공', '할수있다', '복습']
developer.concat(dream);
// (9) ['javascript', 'NestJS', '노력', '꾸준함', '복습', '커리어점프', '성공', '할수있다', '복습']
let result = developer.concat(dream);
// undefined
result;
// (9) ['javascript', 'NestJS', '노력', '꾸준함', '복습', '커리어점프', '성공', '할수있다', '복습']
