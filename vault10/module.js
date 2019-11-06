(function(){
	var a;
	var b;
	let summa = function(a,b) {
		let result = a+b;
		return result;
	}

	let minus = function(a,b){
		let result = a-b;
		return result;
	}

	window.summa = summa;
	window.minus = minus;

})();