export class BaseFlower {
	constructor() {
		this._pi = 3.141593;
		this._headers = [];
	}
	
	get headers() {
		return this._headers;
	}
	
	set headers(headers) {
		this._headers = headers;
	}
	
	get pi() {
		return this._pi;
	}
}