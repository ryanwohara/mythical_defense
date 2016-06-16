var container = document.getElementById('container');
var canvas = document.getElementById('canvas');
var context = canvas.getContext('2d');
context.scale(1, -1);
context.translate(0, -500);

container.innerHtml = canvas;

var entities = [
				new Sasquatch(-50, 0),
				// new Person(685, 0),
				new House(700, 0)
			];
var proceed = true;

var redraw = function() {
	context.clearRect(0, 0, canvas.width, canvas.height);

	for ( var n = 0 ; n < entities.length ; ++n ) {
		// entities[n].move(entities[n].x + 10, entities[n].y + 10);
		entities[n].draw();
	}

	++entities[0].x;

	if (proceed) {
		setTimeout(redraw, 15);
	}
}

new Buttons().add(container);

redraw();