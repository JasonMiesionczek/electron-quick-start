export class BaseFlower {
	constructor(title) {
		this._title = title;
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
	
	get title() {
		return this._title;
	}
}