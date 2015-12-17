import {BaseFlower} from "./flower";

export class Flower2 extends BaseFlower {
	constructor() {
		super('LAM. ANGLES REL. RATIOS');
		this.headers = ['1', '2', '3', '4', '5', '6', '7', '8', '9', '10', '11', '12', '13', '14', '15'];
		this._rowLabel = [];
		this.data = [];
		this.row = 0;
	}
	
	get rowLabels() {
		return this._rowLabel;
	}
	
	generate() {
		for (var denom = 1; denom <= 20; denom++) {
			this.data[this.row] = [];
			for (var numer = 1; numer <= 15; numer++) {
				let ratio = numer / denom;
				let angle = Math.atan(ratio) * 180 / this.pi;
				this.data[this.row].push(parseFloat(angle).toFixed(1));
				this._rowLabel[this.row] = denom;
			}
			this.row++;
		}
		return this.data;
	}
}