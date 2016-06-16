function Person (x, y) {
	var canvas = document.getElementById('canvas');
	this.context = canvas.getContext('2d');
	this.x = x;
	this.y = y;
	this.width = 10;
	this.height = 25;
	this.headRadius = 4.5;
	this.hp = 35;
};

Person.prototype.move = function(x, y) {
	this.x = x;
	this.y = y;
};

Person.prototype.draw = function() {
	this.context.beginPath();

	this.context.arc(this.x, this.y + this.height, 4.5, 0, 360, 0);
	this.context.fill();
	this.context.stroke();

	this.context.moveTo(this.x, this.y + this.height);
	this.context.lineTo(this.x, this.y + this.height - 15);
	this.context.stroke();

	this.context.lineTo(this.x + 5, this.y + this.height - 25);
	this.context.stroke();

	this.context.moveTo(this.x, this.y + this.height - 15);
	this.context.lineTo(this.x - 5, this.y + this.height - 25);
	this.context.stroke();

	this.context.moveTo(this.x, this.y + this.height - 8);
	this.context.lineTo(this.x + 7, this.y + this.height - 18);
	this.context.stroke();

	this.context.moveTo(this.x, this.y + this.height - 8);
	this.context.lineTo(this.x - 7, this.y + this.height - 18);
	this.context.stroke();

	this.context.closePath();
};