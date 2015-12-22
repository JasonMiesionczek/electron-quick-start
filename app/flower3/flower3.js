import {BaseFlower} from "../flower";

export class Flower3 extends BaseFlower {
	constructor() {
		super();
		this.headers = ['1', '2', '3', '4', '5', '6', '7', '8', '9', '10', '11', '12', '13', '14', '15'];
		this.data = [];
		this.row = 0;
	}
	
	activate() {
		this.generate();
	}
	
	generate() {
		for (var denom = 1; denom <= 20; denom++) {
			this.data[this.row] = [denom];
			for (var numer = 1; numer <= 15; numer++) {
				let ratio = numer / denom;
				let freq = 256 * ratio;
				this.data[this.row].push(Math.round(freq));
			}
			this.row++;
		}
		return this.data;
	}
}