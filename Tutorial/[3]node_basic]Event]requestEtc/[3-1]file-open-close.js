// 바로 write, read 하지 않고 open -> write -> close를 사용하는 이유
// 실제로 데이터 운용 시 조금씩 읽거나 쓰는 방식 주로 사용.

var fs = require('fs');

// open(path, flags, [mode], [callback]) 경로 / 플래그 / 파일생성여부 / 콜백
// 플래그엔 r, w, w+, a+ 가 존재함.
fs.open('./output.txt', 'w', function(err, fd){
	if(err) throw err;
	
	var buf = new Buffer('hello!!\n');
	
	// write(fd, buffer, offset, length, position, [callback]) 경로 / 내용 / 시작지점 / 종료지점 / 옵션 / 콜백 -> 파일 지정한 부분에 데이터 쓴다.
	// read도 동일하며 지정한 부분의 파일 내용을 읽어들인다.
	fs.write(fd, buf, 0, buf.length, null, function(err, written, buffer){
		if(err) throw err;
		
		console.log(err, written, buffer);
		
		// fd, callback
		fs.close(fd, function(){
		console.log('file open, file close, data write, complete...');		
		});
	});
});