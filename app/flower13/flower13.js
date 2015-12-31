import {BaseFlower} from "../flower";

export class Flower13 extends BaseFlower {
	constructor() {
		super();
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
        
        let xmab = 10;
        let ymab = (ya + yb) / 2;
        let xmbc = (xb + xc) / 2;
        let ymbc = 190;
        let xmcd = xc;
        let ymcd = ymab;
        let xmda = xmbc;
        let ymda = ya;
		
		this.drawLines(xb, yb, [[xc,yc],[xd,yd],[xa,ya],[xb,yb]]);
		
		for (var r = (this.waveLength * ratio); 
            r <= (1.5 * this.length * ratio); 
            r += (this.waveLength * ratio)) {
			this.drawCircleWithVertex(xmab, ymab, r);
			this.drawCircleWithVertex(xmbc, ymbc, r);
			this.drawCircleWithVertex(xmcd, ymcd, r);
            this.drawCircleWithVertex(xmda, ymda, r);
		}
	}
}