let arrStudents = [
	{name: 'John', score1: '47', score2: '46'},
	{name: 'Bob', score1: '23', score2: '23'},
	{name: 'Nick', score1: '40', score2: '35'},
	{name: 'Alex', score1: '44', score2: '45'},
];

let limits = [91, 81, 71, 61, 51]
let degrees = ['A', 'B', 'C', 'D', 'E']

var limitsDegree ={};

for(let i=0; i< limits.length; i++) {
	limitsDegree[[limits[i]]] = degrees[i];
}

console.log(limitsDegree)

function score(score1, score2) {
	result = score1 + score2;
	return result;
}



for(let i=0; i<arrStudents.length; i++){
	let result = score(Number(arrStudents[i].score1), Number(arrStudents[i].score2));
	

	if(result > 48) {
		console.log(arrStudents[i].name + ' passed final exams with degree ' + result);
	} else {
		console.log(arrStudents[i].name +' got '
		+ result + ',has failed exams, try next year');
	}
}

































