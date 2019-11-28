

function FridgeMachine(power) {
	Machine.call(this, power);
	let self = this;
	let food = [];
	let product;
}

FridgeMachine.prototype = Object.create(Machine.prototype);

FridgeMachine.prototype.addFood = function(product) {
	if (this._enabled) {
		if(food.length > power/100 ) {
			return console.log("Error, Max limit");
		} else {
			return food.push(product);
		}
	} else {
		throw new Error(' fridge is disabled');
	}
};

FridgeMachine.prototype.takeFood = function(product) {
	if (this._enabled) {
		let indexFood = food.indexOf(product);
		if (food.includes(product)) {
			console.log('iamhere', indexFood);
			return food.splice(indexFood, 1);
		} else {
			throw new Error('product doesnt exist');
		}
	} else {
		throw new Error('fridge is disabled');
	}
};

FridgeMachine.prototype.getFoodList = function() {
	if (this._enabled) {
		return food.slice();
	} else {
		throw new Error(' fridge is disabled');
	}
};