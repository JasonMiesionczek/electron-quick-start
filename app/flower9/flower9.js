import {BaseFlower} from "../flower";

export class Flower9 extends BaseFlower {
	constructor() {
		super('WAVES COR. RECT. 1 FREQ.');
		this.length = 90;
		this.width = 45;
		this.testFreq = 50;
		this.rpd = 1.745329E-02;
		
		this.waveLength = 0;
	}
	
	activate() {
	}
	
	submit() {
        let ratio = 300 / this.length;
		this.waveLength = 1130 / this.testFreq;
        let e = this.width * ratio;
        let ya = 190 - e;
        let yd = ya;
        let xc = this.length * ratio + 10
        let xd = xc;
        
		var canvas = document.getElementById('theCanvas');
		var context = canvas.getContext('2d');
		
		context.clearRect(0, 0, canvas.width, canvas.height);
		
		let centerX = canvas.width / 2;
		let centerY = canvas.height / 2;
		// let xb = 20;
		// let yb = 180;
		// let yc = 180;
        let xa = 10;
        let xb = 10;
        let yb = 190;
        let yc = 190;
		
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
        context.lineTo(xd, yd);
		context.lineTo(xa, ya);
		context.lineTo(xb, yb);
        context.strokeStyle = '#F00';
		context.stroke();
		
		for (var r = (this.waveLength * ratio); r <= (1.5 * this.length * ratio); r += (this.waveLength * ratio)) {
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
            
            context.beginPath();
			context.arc(xd, yd, r, 0, 2 * Math.PI, false);
			context.lineWidth = 2;
			context.strokeStyle = '#888';
			context.stroke();
		}
	}
}