
function add(a) {
	return function (b) {
		result = a + b;
		return result;
	}
} 

console.log(add(5)(5));




// function buffer(word) {
// 	function clear(word){
// 		word = '';
// 	}
// 	return word;
// }

// console.log(buffer('Привет'));