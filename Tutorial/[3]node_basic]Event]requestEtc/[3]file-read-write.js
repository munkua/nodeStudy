// 노드의 파일 시스템은 파일 다루는 기능, 디렉터리 다루는 기능 존재. 동기, 비동기식 IO 기능 제공
// 동기식은 파일 작업이 끝날 때까지 대기, 비동기식은 파일 작업 요청만 한 뒤 그 다음작업 수행. 이후 파일작업 종료 시 그 상태는 이벤트로 받아 처리.
// 동기식, 비동기식 구분 위해서 동기식의 메소드엔 Sync 라는 단어가 붙는다.

// 1. 동기식으로 파일 불러오는 방식, 파라미터 형식은 filename / [encoding] 이다. 참고로 파일을 불러올때는 최상위 폴더부터 찾기 때문에 경로설정을 잘 해줘야한다.
var fs = require('fs');

var dataSync = fs.readFileSync('./file.txt', 'utf8');

console.log(dataSync);

// 2. 비동기식으로 파일을 불러오는 방식, 파라미터 형식은 filename / [encoding] / [callback] 이다.
var data = fs.readFile('./file.txt', 'utf8', function(err, data){
	console.log(data);
});	

// 3. 밑의 코드가 먼저 실행되고 호출됐던 함수는 그 후에 실행된다.
console.log('프로젝트 안의 package.json 파일을 불러왔습니다.');

// 4. 다음은 파일을 쓰는 메소드이다.
fs.writeFile('./output.txt', 'hello, world', function(err){
	if(err){
		conosole.log('Error : ' + err);
	}
	
	console.log('output.txt 파일에 데이터 쓰기 완료.')
});