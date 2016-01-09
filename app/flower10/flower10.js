import {BaseFlower} from "../flower";

export class Flower10 extends BaseFlower {
	constructor() {
		super();
		this.numSides = 6;
		this.sideLength = 10;
		this.testFreq = 50;
		this.rpd = 1.745329E-02;
		
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

        this.drawLines(160,10, [[230,45],[247,120],[199,181],[121,181],[73,120],[90,45],[160,10]]);
    }
	
	submit() {
        if (this.numSides < 3) {
            alert("Number of sides must be greater than 2");
            return;
        }
        if (this.numSides > 26) {
            alert("Number of sides must be <= 26");
            return;
        }
        let a = 360 / this.numSides;
        let ar = a * this.rpd;
        let scale = 180 * Math.sin(ar / 2) / this.sideLength;
		this.waveLength = 1130 / this.testFreq;
        let startX = 250;
        let startY = 100;
        
		this.initContext();
        this.resetContext();
		
		let centerX = this.canvas.width / 2;
		let centerY = this.canvas.height / 2;
		
		var triangleWidth = startX - scale;
		var triangleHeight = startY - scale;
		
		var offsetX = (centerX - (triangleWidth / 2));
		var offsetY = (centerY - (triangleHeight / 2)) - startY/2;
		
        this.resetContext();
        this.setOffset(offsetX, offsetY);
        
        // compute vertex locations
        let xy = [];
        for (let v = 0; v < this.numSides; v++) {
            let val1 = 90 * Math.cos(ar * v) + 160;
            let val2 = 100 - 90 * Math.sin(ar * v);
            xy.push([val1, val2]);
        }
		
        let points = [];
        for (let p = 0; p < this.numSides; p++) {
            points.push([xy[p][0], xy[p][1]]);
        }
        points.push([startX, startY]);
        this.drawLines(startX, startY, points);
		
		for (var r = (this.waveLength * scale); 
            r <= ((this.numSides / 2) * this.sideLength * scale); 
            r += (this.waveLength * scale)) {
			for (var j = 0; j < this.numSides; j++) {
                this.drawCircleWithVertex(xy[j][0], xy[j][1], r);
            }
		}
	}
}