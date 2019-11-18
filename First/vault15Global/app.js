
function add(a) {
	return function (b) {
		result = a + b;
		return result;
	}
} 

console.log(add(5)(5));



function createBuffer() {
	let result = '';

	function add(word) {
		if(word === undefined) {
			return result;
		} else {
			return result += word;
		}
	}

	 add.clear = function(word) {
		word = '';
	}

	return add
}

let buffer = createBuffer();
buffer('Привет');
buffer('Nb')
console.log("text ",buffer());
console.log("nothing ",buffer().clear);
