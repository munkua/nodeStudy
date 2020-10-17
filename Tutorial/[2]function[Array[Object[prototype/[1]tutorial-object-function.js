var jo = {};
var user = [{name: "jo", age: 20}, {name: "kim", age: 20}, {name: "park", age: 20}];

jo["name"] = "jojaehyun";
jo["age"] = 22;
jo.mobile = "010-1234-1234";
jo.pc = 'i7';
// 객체에 속성을 넣는 두가지 방법
console.log(jo.name);

user.forEach(function(item, index){
	console.log("배열 요소 #" + index + " : %s", item.name);
});	// forEach문 을 사용한 배열 내 객체 출력

user.forEach((item, index) => {
	console.log("배열 요소 #" + index + " : %s", item.name);
});	// arrow function, forEach문 사용한 배열 내 객체 출력
// 그 외 배열 함수는 javascript와 동일.(성동일 아님 ㅋㅋ)