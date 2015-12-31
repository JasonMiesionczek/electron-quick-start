import {BaseFlower} from "../flower";

export class Flower15 extends BaseFlower {
	constructor() {
		super();
		this.length = 90;
		this.width = 45;
		this.testFreq = 50;
		this.rpd = 1.745329E-02;
		
		this.waveLength = 0;
        this.freqA = 100;
        this.freqB = 200;
        this.freqC = 300;
        this.freqD = 400;
	}
	
	activate() {
	}
	
	submit() {
        let ratio = 300 / this.length;
		this.waveLength = 1130 / this.testFreq;
        this.wla = 1130 / this.freqA;
        this.wlb = 1130 / this.freqB;
        this.wlc = 1130 / this.freqC;
        this.wld = 1130 / this.freqD;
        let e = this.width * ratio;
        let ya = 190 - e;
        let yd = ya;
        let xc = this.length * ratio + 10
        let xd = xc;
        
		this.initContext();
        this.resetContext();
		
		let centerX = this.canvas.width / 2;
		let centerY = this.canvas.height / 2;
		
        let xa = 10;
        let xb = 10;
        let yb = 190;
        let yc = 190;
		
		var triangleWidth = xc - xb;
		var triangleHeight = yb - ya;
		
		var offsetX = (centerX - (triangleWidth / 2)) - xb;
		var offsetY = (centerY - (triangleHeight / 2)) - ya;
		
		this.resetContext();
        this.setOffset(offsetX, offsetY);
		
		this.drawLines(xb, yb, [[xc,yc],[xd,yd],[xa,ya],[xb,yb]]);
		
		for (var r1 = (this.wla * ratio); 
            r1 <= (1.5 * this.length * ratio); 
            r1 += (this.wla * ratio)) {
			this.drawCircleWithVertex(xa, ya, r1);
		}
        
        for (var r2 = (this.wlb * ratio); 
            r2 <= (1.5 * this.length * ratio); 
            r2 += (this.wlb * ratio)) {
			this.drawCircleWithVertex(xb, yb, r2);
		}
        
        for (var r3 = (this.wlc * ratio); 
            r3 <= (1.5 * this.length * ratio); 
            r3 += (this.wlc * ratio)) {
			this.drawCircleWithVertex(xc, yc, r3);
		}
        
        for (var r4 = (this.wld * ratio); 
            r4 <= (1.5 * this.length * ratio); 
            r4 += (this.wld * ratio)) {
            this.drawCircleWithVertex(xd, yd, r4);
		}
	}
}