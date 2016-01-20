import {BaseFlower} from "app/library/flower";

export class Flower1 extends BaseFlower {
	constructor() {
        super();
		this.constant = 1130;
		this.data = [];
		this.row = 0;
		this.headers = ['15', '20', '25', '30', '35', '40', '45', '50', '55', '60', '65', '70', '75', '80'];
	}
	
	activate() {
		this.generate();
	}
    
	generate() {
		for (var length = 0.5; length <= 10; length += 0.5) {
			this.data[this.row] = [length];
			for (var angle = 15; angle <= 80; angle += 5) {
				var radians = angle * this.pi / 180;
				var f = Math.tan(radians) * this.constant / length;
				this.data[this.row].push(Math.round(f));
			}
			this.row++;
		}
		return this.data;
	}
	
}