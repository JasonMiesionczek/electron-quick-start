import {BaseFlower} from "../flower";

export class Flower4 extends BaseFlower {
	constructor() {
		super();
		this.headers = ['256', '282', '308', '334', '360', '386', '412', '438', '464', '490', '516'];
		this.data = [];
		this.row = 0;
	}
	
	activate() {
		this.generate();
	}
	
	generate() {
		for (var angle = 5; angle <= 85; angle+=5) {
			this.data[this.row] = [angle];
			for (var base = 256; base <= 516; base+=26) {
				let ratio = Math.tan(angle * this.pi / 180);
				let freq = base * ratio;
				this.data[this.row].push(Math.round(freq));
			}
			this.row++;
		}
		return this.data;
	}
}