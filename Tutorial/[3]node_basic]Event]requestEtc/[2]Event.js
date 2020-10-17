// 개념 : 노드의 객체는 EventEmitter 상속받기 가능, 상속받은 후엔 on, emit() 메소드 사용가능하다. 물론 대부분 비동기 방식으로 처리
// 어떤 함수 실행 결과물 이벤트로 전달, 한쪽에서 다른쪽으로 알림보낸다고 이해하면 편하다.
// on() 메소드는 이벤트 전달될 객체에 이벤트 리스너 설정한다.
// emit() 메소드는 다른 쪽으로 전달하는 역할을 한다.

process.on('tick', function(count){	//  3. eventListener에 등록한 함수 실행
	
	console.log('tick event executed : %s', count);	// 4. 콜백함수로 전달받은 파라미터 삽입, 다시 emit으로 결과 토스
});

setTimeout(function(){	// 1. setTimeout부터 시작.
	console.log('2초 후에 tick 이벤트 전달 시도');	
	
	process.emit('tick', '2');	//2.  eventListener에 올려놓은 tick 함수 실행.
}, 2000);