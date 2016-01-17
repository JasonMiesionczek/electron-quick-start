import {BaseFlower} from "app/flower";

export class Flower16 extends BaseFlower {
	constructor() {
		super();
		this.length = 90;
		this.width = 45;
		this.testFreq = 50;
        this.freqA = 100;
        this.freqB = 200;
        this.freqC = 300;
        this.freqD = 400;
		this.rpd = 1.745329E-02;
        this.wla = 0;
        this.wlb = 0;
        this.wlc = 0;
        this.wld = 0;
		
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

        this.drawLines(10,170, [[310,170],[310,30],[10,30],[10,170]]);
        this.drawText('A', 10, 20);
        this.drawText('B', 300, 20);
        this.drawText('C', 300, 195);
        this.drawText('D', 10, 195);
    }
	
	submit() {
        let ratio = 300 / this.length;
		this.waveLength = 1130 / this.testFreq;
        let e = this.width * ratio;
        let ya = 190 - e;
        let yd = ya;
        let xc = this.length * ratio + 10;
        let xd = xc;
        this.wla = 1130 / this.freqA;
        this.wlb = 1130 / this.freqB;
        this.wlc = 1130 / this.freqC;
        this.wld = 1130 / this.freqD;
        
        let xa = 10;
        let xb = 10;
        let yb = 190;
        let yc = 190;
		
		var triangleWidth = xc - xb;
		var triangleHeight = yb - ya;
		
		var offsetX = (this.centerX - (triangleWidth / 2)) - xb;
		var offsetY = (this.centerY - (triangleHeight / 2)) - ya;
		
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
		
		for (var r1 = (this.wla * ratio); 
            r1 <= (1.5 * this.length * ratio); 
            r1 += (this.wla * ratio)) {
			this.drawCircleWithVertex(xmab, ymab, r1);
		}
        
        for (var r2 = (this.wlb * ratio); 
            r2 <= (1.5 * this.length * ratio); 
            r2 += (this.wlb * ratio)) {
			this.drawCircleWithVertex(xmbc, ymbc, r2);
		}
        
        for (var r3 = (this.wlc * ratio); 
            r3 <= (1.5 * this.length * ratio); 
            r3 += (this.wlc * ratio)) {
			this.drawCircleWithVertex(xmcd, ymcd, r3);
		}
        
        for (var r4 = (this.wld * ratio); 
            r4 <= (1.5 * this.length * ratio); 
            r4 += (this.wld * ratio)) {
            this.drawCircleWithVertex(xmda, ymda, r4);
		}
	}
}