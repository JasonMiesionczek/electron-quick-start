import {BaseFlower} from "../flower";

export class Flower14 extends BaseFlower {
	constructor() {
		super();
		this.angleApex = 90;
		this.baseAngle = 45;
		this.baseLine = 10;
		this.testFreq = 400;
        this.apexFreq = 100;
        this.baseFreq = 200;
        this.vertexFreq = 300;
		this.rpd = 1.745329E-02;
		this.xb = 20;
		this.yb = 180;
		this.yc = 180;
		this.ar = 0;
		this.c = 0;
		this.waveLength = 0;
        this.wla = 0;
        this.wlb = 0;
        this.wlc = 0;
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
        this.wla = 1130 / this.apexFreq;
        this.wlb = 1130 / this.baseFreq;
        this.wlc = 1130 / this.vertexFreq;
		
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
		
		let centerX = this.canvas.width / 2;
		let centerY = this.canvas.height / 2;
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
        
		for (var r1 = (this.wla * ratio); 
            r1 <= (1.2 * this.baseLine * ratio); 
            r1 += (this.wla * ratio)) {
			this.drawCircleWithVertex(xa, ya, r1);
		}
        
        for (var r2 = (this.wlb * ratio); 
            r2 <= (1.2 * this.baseLine * ratio); 
            r2 += (this.wlb * ratio)) {
            this.drawCircleWithVertex(xb, yb, r2);
		}
        
        for (var r3 = (this.wlc * ratio); 
            r3 <= (1.2 * this.baseLine * ratio); 
            r3 += (this.wlc * ratio)) {
            this.drawCircleWithVertex(xc, yc, r3);
		}
	}
}