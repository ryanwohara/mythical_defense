var container = document.getElementById('container');
var canvas = document.getElementById('canvas');
var context = canvas.getContext('2d');
context.scale(1, -1);
context.translate(0, -500);

var levels = new Levels();
var level = 2;
var entities = levels.get(level);

var collision = new Collision();

container.innerHtml = canvas;

var proceed = true;

var restart = function() {
	level = 0;
	proceed = true;
	levels.reset();
	entities = levels.get(level);
	redraw();
}

var timeout = null;

var redraw = function() {
	if (timeout != null) {
		window.clearTimeout(timeout);
		timeout = null;
	}

	context.clearRect(0, 0, canvas.width, canvas.height);

	console.log(collision.detect(entities));

	for ( var n = 0 ; n < entities.length ; ++n ) {
		entities[n].draw();
	}

	if (proceed) {
		timeout = setTimeout(redraw, 15);
	}
}

new Buttons().add(container);

redraw();