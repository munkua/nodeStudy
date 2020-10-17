var module1 = require('./[ex]addModule');
var nconf = require('nconf');	// 외장모듈 nconf 설치해 불러옴. npm istall nconf 설치된 모듈은 node_modules에 저장된다.

console.log(module1.add(10, 20));
console.log('OS환경 변수의 값 : %s', nconf.get('OS'));