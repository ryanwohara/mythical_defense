function Collision() {};

Collision.prototype.detect = function(entities) {
	for (var obj1 = 0 ; obj1 < entities.length ; ++obj1 ) {
		for (var obj2 = obj1 + 1 ; obj2 < entities.length ; ++obj2 ) {
			if (entities[obj1].x < entities[obj2].x + entities[obj2].width &&
			   entities[obj1].x + entities[obj1].width > entities[obj2].x &&
			   entities[obj1].y < entities[obj2].y + entities[obj2].height &&
			   entities[obj1].height + entities[obj1].y > entities[obj2].y) {
			    return true;
			}
		}
	}
	return false;
};