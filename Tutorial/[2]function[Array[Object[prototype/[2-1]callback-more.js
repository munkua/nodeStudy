var calculate = function(a, b, callback){
	let result = a + b;
	callback(result);
	
	var count = 0;
	var history = function(){
		count++;
		return count;
	}
	
	return history;
}

var add_calculate = calculate(10, 20, function(result){
	console.log('함수를 진행합니다.')
	console.log("calulate의 결과값 : " + result);
});

console.log(add_calculate());
console.log(add_calculate());
console.log(add_calculate());
// 함수 내에서 사용한 변수는 더이상 사용 불가능하지만 함수내에서 함수 반환시는 예외적 허용, 이를 closure라고 한다.