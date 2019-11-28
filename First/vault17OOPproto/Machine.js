function Machine(power) {
	this._power = power;
	this._enabled = false;
}


Machine.prototype.enable = function() {
	this._enabled = true;
}

Machine.prototype.disable = function() {
	this._enabled = false;
}
