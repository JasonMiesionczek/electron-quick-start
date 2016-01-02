import {BaseFlower} from "../flower";

export class Flower17 extends BaseFlower {
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
		
		let xb = 20;
		let yb = 180;
		let yc = 180;
        
        let xmab = (xa + xb) / 2;
        let ymab = (ya + yb) / 2;
        let xmbc = (xb + xc) / 2;
        let ymbc = (yb + yc) / 2;
        let xmca = (xc + xa) / 2;
        let ymca = (yc + ya) / 2;
		
		var triangleWidth = xc - xb;
		var triangleHeight = yb - ya;
		
		var offsetX = (this.centerX - (triangleWidth / 2)) - xb;
		var offsetY = (this.centerY - (triangleHeight / 2)) - ya;
		
		this.resetContext();
		this.setOffset(offsetX, offsetY);
		
		this.drawLines(xb, yb, [[xc, yc],[xa,ya],[xb,yb]]);
        
		for (var r1 = (this.wla * ratio); 
            r1 <= (1.2 * this.baseLine * ratio); 
            r1 += (this.wla * ratio)) {
			this.drawCircleWithVertex(xmab, ymab, r1);
		}
        
        for (var r2 = (this.wlb * ratio); 
            r2 <= (1.2 * this.baseLine * ratio); 
            r2 += (this.wlb * ratio)) {
            this.drawCircleWithVertex(xmbc, ymbc, r2);
		}
        
        for (var r3 = (this.wlc * ratio); 
            r3 <= (1.2 * this.baseLine * ratio); 
            r3 += (this.wlc * ratio)) {
            this.drawCircleWithVertex(xmca, ymca, r3);
		}
	}
}