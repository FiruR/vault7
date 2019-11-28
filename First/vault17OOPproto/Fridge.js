

function FridgeMachine(power) {
	Machine.call(this, power);
	let self = this;
	this._power = power;
	this._food = [];
	let product;
}

FridgeMachine.prototype = Object.create(Machine.prototype);

FridgeMachine.prototype.addFood = function(product) {
	if (this._enabled) {
		if(this._food.length > this._power/100 ) {
			return console.log("Error, Max limit");
		} else {
			return this._food.push(product);
		}
	} else {
		throw new Error(' fridge is disabled');
	}
};

FridgeMachine.prototype.takeFood = function(product) {
	if (this._enabled) {
		let indexFood = this._food.indexOf(product);
		if (this._food.includes(product)) {
			console.log('iamhere', indexFood);
			return this._food.splice(indexFood, 1);
		} else {
			throw new Error('product doesnt exist');
		}
	} else {
		throw new Error('fridge is disabled');
	}
};

FridgeMachine.prototype.getFoodList = function() {
	if (this._enabled) {
		return this._food.slice();
	} else {
		throw new Error(' fridge is disabled');
	}
};