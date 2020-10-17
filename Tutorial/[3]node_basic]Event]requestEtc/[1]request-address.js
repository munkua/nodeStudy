var url = require('url');	// url 모듈 사용한다고 선언
var querystring = require('querystring');	//  querystring 모듈 사용한다고 선언

// URL 주소를 객체로 변환한다.
var curURL = url.parse('https://www.google.com/search?q=doge&oq=doge&aqs=chrome..69i57j69i60l3.928j0j9&client=ubuntu&sourceid=chrome&ie=UTF-8');

// 객체를 다시 문자열로 변환한다.
var curStr = url.format(curURL);

// URL 객체 중 querystring 모듈을 사용해서 요청한 파라미터를 분리해 객체로 받아온다.
var param = querystring.parse(curURL.query);

// 받아온 파라미터 객체를 문자열로 변환한다.
var paramStr = querystring.stringify(param);

console.log('주소 문자열 : %s', curStr);
console.dir(curURL);	// 객체 형식으로 존재하는것들 출력한다.
console.log(curURL.search);	// 객체 내 속성 중 search 속성을 출력한다.

console.dir(param);	// 객체로 변환한 파라미터 출력
console.log("파라미터 문자열로 변환 : " + paramStr);	// 문자열로 변환한 파라미터 출력