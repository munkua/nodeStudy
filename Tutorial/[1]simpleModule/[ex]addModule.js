var calc = {};			// 계산기 역할 맡을 calc 객체 생성

calc.add = function(a, b){
	return a + b;
}	// calc 객체에 add 함수 속성으로 할당

calc.multi = function(a, b){
	return a * b;
}	// multi 함수 속성으로 할당

module.exports = calc;	// module.exports 속성에 calc 할당