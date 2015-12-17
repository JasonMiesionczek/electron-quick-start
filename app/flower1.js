export class Flower1 {
	constructor() {
		this.constant = 1130;
		this.pi = 3.141593;
		this.data = [];
		this.row = 0;
		
	}
	
	generate() {
		for (var length = 0.5; length < 10; length += 0.5) {
			//var row = length * 2 + 2;
			this.data[this.row] = [];
			for (var angle = 15; angle < 80; angle += 5) {
				var radians = angle * this.pi / 180;
				//var column = angle - 6;
				var f = Math.tan(radians) * this.constant / length;
				this.data[this.row].push(Math.round(f));
			}
			this.row++;
		}
		return this.data;
	}
	
}