console.log('gave');
let age = 23;
let height = 166;

function calorieCounter() {
	let weight = prompt('your weight?');
	let weightNew = prompt('your wanted weight?');
	let calorie = (9.99*weight)+(6.25*height)-(4.92*age)- 161;

	if(weightNew < weight ) {
	alert(`Чтобы похудеть употребляйте ${calorie} калорий`); 	
	} else {
	alert(`Чтобы набрать массу употребляйте ${calorie} калорий`);		
	}
}

calorieCounter();

