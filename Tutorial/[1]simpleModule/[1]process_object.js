console.log('argv 속성의 파라미터 수' + process.argv.length);
console.dir(process.argv);

process.exit();

console.log('heelo');	// exit()로 인해 실행되지 않음.