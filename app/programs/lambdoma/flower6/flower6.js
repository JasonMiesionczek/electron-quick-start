import {BaseFlower} from "app/library/flower";

export class Flower6 extends BaseFlower {
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
				let angle = parseFloat(Math.atan(ratio) * 180 / this.pi).toFixed(1);
				let freq = Math.round(256 * ratio);
				let angleFreq = `${angle}<br/>${freq}`;
				this.data[this.row].push(angleFreq);
			}
			this.row++;
		}
		return this.data;
	}
}