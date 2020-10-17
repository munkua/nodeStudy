var Calc = require('./[2-1]calculator-exports');

var calc = new Calc();

console.log(calc.add(1, 3));	// calc 객체의 add 프로토타입 함수에 1, 3 전달
calc.emit('stop');	// calc 객체의 이벤트 리스터인 stop 함수 호출.
console.log(Calc.title);	// Calc 모듈의 타이틀 출력