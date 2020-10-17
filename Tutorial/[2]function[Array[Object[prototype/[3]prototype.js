function Person(name, age){
	this.name = name;
	this.age = age;
}
// Person이라는 이름을 가진 프로토타입 객체, 아마 함수로 찍어내는걸 프로토타입 객체라고 부르는듯함

Person.prototype.walk = function(speed){
	console.log(speed+'의 속도로 걸어갑니다.');
}
// 직접 Person 객체에 추가하지않고 prototype으로 합치는 이유는 인스턴트 객체 생성 시 메모리 관리에 용이하기 때문.

var person1 = new Person('jo', 20);
var person2 = new Person('park', 22);

console.log(person1.name);
person1.walk(20);