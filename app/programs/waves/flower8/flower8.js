import {BaseFlower} from "app/flower";

export class Flower8 extends BaseFlower {
	constructor() {
		super();
		this.angleApex = 90;
		this.baseAngle = 45;
		this.baseLine = 10;
		this.testFreq = 400;
		this.rpd = 1.745329E-02;
		this.xb = 20;
		this.yb = 180;
		this.yc = 180;
		//this.ar = 0;
		this.c = 0;
		this.waveLength = 0;
	}

	setInitialContent() {
		this.initContext();
		this.resetContext();

		this.centerX = this.canvasWidth / 2;
		this.centerY = this.canvasHeight / 2;

		this.offsetX = (this.centerX - (300 / 2));
		this.offsetY = (this.centerY - (140 / 2)) - (140/2);

		this.setOffset(this.offsetX, this.offsetY);

		this.drawLines(10,170, [[310,170],[160,35],[10,170]]);
		this.drawText('Apex', 9*14, 19);
		this.drawText('Base', 10, 22*9);
		this.drawText('C', 25*12, 22*9);
		this.drawText('Base Line', 10*12, 17*9);
	}
	
	submit() {
		let ar = this.angleApex * this.rpd;
		let br = this.baseAngle * this.rpd;
		this.c = 180 - (this.angleApex + this.baseAngle);
		//let cr = this.c * this.rpd;
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
		
		this.initContext();
        this.resetContext();
		
		let centerX = this.canvasWidth / 2;
		let centerY = this.canvasHeight / 2;
		let xb = 20;
		let yb = 180;
		let yc = 180;
		
		var triangleWidth = xc - xb;
		var triangleHeight = yb - ya;
		
		var offsetX = (centerX - (triangleWidth / 2)) - xb;
		var offsetY = (centerY - (triangleHeight / 2)) - ya;
		
		this.resetContext();
		this.setOffset(offsetX, offsetY);
		
		this.drawLines(xb, yb, [[xc, yc],[xa,ya],[xb,yb]]);
        
		for (var r = (this.waveLength * ratio); 
            r <= (1.5 * this.baseLine * ratio); 
            r += (this.waveLength * ratio)) {
			this.drawCircleWithVertex(xa, ya, r);

            this.drawCircleWithVertex(xb, yb, r);

            this.drawCircleWithVertex(xc, yc, r);
		}
	}
}