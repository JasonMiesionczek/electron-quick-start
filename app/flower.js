export class BaseFlower {
	constructor() {
		this._pi = 3.141593;
		this._headers = [];
        this._lineWidth = 3;
        this._vertexSize = 1;
        this._circleColor = '#555';
        this._context;
        this._canvas;
	}
    
    initContext() {
        this._canvas = document.getElementById('theCanvas');
        this._context = this._canvas.getContext('2d');
    }
    
    resetContext() {
        this._context.setTransform(1, 0, 0, 1, 0, 0);
		this._context.clearRect(0, 0, this._canvas.width, this._canvas.height);
    }
    
    setOffset(x, y) {
        this._context.translate(x, y);
    }
    
    drawLines(initX, initY, points) {
        this._context.beginPath();
        this._context.moveTo(initX, initY);
        
        points.forEach(point => {
            this._context.lineTo(point[0], point[1]); 
        });
        
        this._context.lineWidth = this.lineWidth;
        this._context.strokeStyle = '#F00';
        this._context.stroke();
    }
    
    drawCircle(x, y, radius) {
        this._context.beginPath();
        this._context.arc(x, y, radius, 0, 2 * Math.PI, false);
        this._context.lineWidth = this.lineWidth;
        this._context.strokeStyle = this.circleColor;
        this._context.stroke();
    }

    drawCircleWithVertex(x, y, radius) {
        this.drawCircle(x, y, radius);
        this.drawCircle(x, y, this.vertexSize);
    }
    
    set context(ctx) {
        this._context = ctx;
    }
    
    get context() {
        return this._context;
    }
    
    get canvas() {
        return this._canvas;
    }
	
	get headers() {
		return this._headers;
	}
	
	set headers(headers) {
		this._headers = headers;
	}
	
	get pi() {
		return this._pi;
	}
    
    get lineWidth() {
        return this._lineWidth;
    }
    
    get vertexSize() {
        return this._vertexSize;
    }
    
    get circleColor() {
        return this._circleColor;
    }
}