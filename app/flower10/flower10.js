import {BaseFlower} from "../flower";

export class Flower9 extends BaseFlower {
	constructor() {
		super('WAVES COR. N-SIDE, 1 FREQ.');
		this.numSides = 6;
		this.sideLength = 10;
		this.testFreq = 50;
		this.rpd = 1.745329E-02;
		
		this.waveLength = 0;
	}
	
	activate() {
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
        
		var canvas = document.getElementById('theCanvas');
		var context = canvas.getContext('2d');
		
		context.clearRect(0, 0, canvas.width, canvas.height);
		
		let centerX = canvas.width / 2;
		let centerY = canvas.height / 2;
		
		var triangleWidth = startX - scale;
		var triangleHeight = startY - scale;
		
		var offsetX = (centerX - (triangleWidth / 2));
		var offsetY = (centerY - (triangleHeight / 2)) - startY/2;
		
		context.setTransform(1, 0, 0, 1, 0, 0);
		context.clearRect(0, 0, canvas.width, canvas.height);
		context.translate(offsetX, offsetY);
        
        // compute vertex locations
        let xy = [];
        for (let v = 0; v < this.numSides; v++) {
            let val1 = 90 * Math.cos(ar * v) + 160;
            let val2 = 100 - 90 * Math.sin(ar * v);
            xy.push([val1, val2]);
        }
		
		context.beginPath();
		context.moveTo(startX, startY);
        for (let p = 0; p < this.numSides; p++) {
            context.lineTo(xy[p][0], xy[p][1]);
        }
        context.lineTo(startX, startY);
		
        context.strokeStyle = '#F00';
		context.stroke();
		
		for (var r = (this.waveLength * scale); r <= ((this.numSides / 2) * this.sideLength * scale); r += (this.waveLength * scale)) {
			for (var j = 0; j < this.numSides; j++) {
                context.beginPath();
                context.arc(xy[j][0], xy[j][1], r, 0, 2 * Math.PI, false);
                context.lineWidth = 2;
                context.strokeStyle = '#888';
                context.stroke();
            }
            
		}
	}
}