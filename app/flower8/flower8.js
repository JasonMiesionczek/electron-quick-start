import {BaseFlower} from "../flower";

export class Flower8 extends BaseFlower {
	constructor() {
		super('WAVES COR. TRIANGLE 1 FREQ');
		this.angleApex = 90;
		this.baseAngle = 45;
		this.baseLine = 10;
		this.testFreq = 400;
		this.rpd = 1.745329E-02;
		this.xb = 20;
		this.yb = 180;
		this.yc = 180;
		this.ar = 0;
		this.c = 0;
		this.waveLength = 0;
	}
	
	activate() {
	}
	
	submit() {
		let ar = this.angleApex * this.rpd;
		let br = this.baseAngle * this.rpd;
		this.c = 180 - (this.angleApex + this.baseAngle);
		let cr = this.c * this.rpd;
		let ratio = 280 / this.baseLine;
		this.waveLength = 1130 / this.testFreq;
		
		let e = this.baseLine * Math.cos(br);
		let d = this.baseLine * Math.sin(br);
		let f = d / Math.tan(ar);
		let ab = e + f;
		let h = ab * Math.sin(br) * ratio;
		let ya = 180 - h;
		let w = ab * Math.cos(br) * ratio;
		let xa = 20 + w;
		let xc = this.baseLine * ratio + 20;
		
		var canvas = document.getElementById('theCanvas');
		var context = canvas.getContext('2d');
		
		context.clearRect(0, 0, canvas.width, canvas.height);
		
		let centerX = canvas.width / 2;
		let centerY = canvas.height / 2;
		let xb = 20;
		let yb = 180;
		let yc = 180;
		
		var triangleWidth = xc - xb;
		var triangleHeight = yb - ya;
		
		var offsetX = (centerX - (triangleWidth / 2)) - xb;
		var offsetY = (centerY - (triangleHeight / 2)) - ya;
		
		context.setTransform(1, 0, 0, 1, 0, 0);
		context.clearRect(0, 0, canvas.width, canvas.height);
		context.translate(offsetX, offsetY);
		
		context.beginPath();
		context.moveTo(xb, yb);
		context.lineTo(xc, yc);
		context.lineTo(xa, ya);
		context.lineTo(xb, yb);
        context.strokeStyle = '#F00';
		context.stroke();
		
		for (var r = (this.waveLength * ratio); r <= (1.5 * this.baseLine * ratio); r += (this.waveLength * ratio)) {
			context.beginPath();
			context.arc(xa, ya, r, 0, 2 * Math.PI, false);
			context.lineWidth = 2;
			context.strokeStyle = '#888';
			context.stroke();
			
			context.beginPath();
			context.arc(xb, yb, r, 0, 2 * Math.PI, false);
			context.lineWidth = 2;
			context.strokeStyle = '#888';
			context.stroke();
			
			context.beginPath();
			context.arc(xc, yc, r, 0, 2 * Math.PI, false);
			context.lineWidth = 2;
			context.strokeStyle = '#888';
			context.stroke();
		}
	}
}