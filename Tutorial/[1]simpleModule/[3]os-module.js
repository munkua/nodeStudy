var os = require('os');
var path = require('path');

console.log("host's system name : %s", os.hostname());	// 호스트 이름을 알려준다.
console.log("system's memory : %d %d", os.freemem(), os.totalmem());	// 총메모리, 유휴 메모리 알려준다.
console.log(os.cpus());	// cpu 이름 알려준다.

var directories = ["users", "mike", "docs"];
var docsDirectory = directories.join(path.sep);	// path.sep으로 배열 저장된 문자열들 불러온 후 각 위치에 맞게 path 형식 연결해준다.
console.log("문서 디렉터리 : %s", docsDirectory);

var curPath = path.join("/Users/mike", "notepad.exe");	// 이렇게 두 개의 문자열로도 연결이 가능하다.
console.log("파일 패스 : %s", curPath);

var filename = "C:/Users/mike/notepad.exe";
var dirname = path.dirname(filename);	// 디렉터리 경로 저장
var basename = path.basename(filename);	// 파일이름 저장
var extname = path.extname(filename);	// 확장자 저장

console.log("디렉터리 : %s, 파일이름 : %s, 확장자 : %s ", dirname, basename, extname);