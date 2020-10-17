// 앞에서 배운 eventEmitter의 문제점
// 항상 process객체를 사용해야 하므로, 같은 이름의 이벤트를 사용하면 충돌 발생할 수 있다.
// 따라서 외부에 모듈을 만들어놓고 해당 모듈에서 이벤트 처리를 하면 오류를 줄이는 코드를 만들 수 있다.

var util = require('util'); // 계산기 객체에 eventEmitter 함수, 속성을 전달하기 위해서 선언
var EventEmitter = require('events').EventEmitter; // calc 객체에 이벤트 처리 인터페이스를 상속하기 위해 선언.

var Calc = function(){
	var self = this;
	
	this.on('stop', function(){
		console.log('calc에 stop 이벤트 전달');
	});
};

util.inherits(Calc, EventEmitter);	// EventEmitter을 Calc 객체에 상속.

Calc.prototype.add = function(a, b){
	return a + b;
}

module.exports = Calc;
module.exports.title = 'calculator';