
export class Canvas {
    constructor(canvasElement) {
        this.canvas = canvasElement;
        this.ctx = canvasElement.getContext('2d');
        this.objects = [];
    }

    clear() {
        this.ctx.clearRect(0, 0, this.canvas.width, this.canvas.height);
    }

    add(shape: Shape) {
        this.objects.push(shape);
    }

    render() {
        this.clear();
        this.objects.forEach((obj:Shape) => {
            this.ctx.setTransform(1, 0, 0, 1, 0, 0);
            obj.render(this.ctx);
        });
    }
}

export class Shape {
    constructor(properties) {
        this.top = properties.top || 0;
        this.left = properties.left || 0;
        this.width = properties.width || 0;
        this.height = properties.height || 0;
        this.strokeStyle = properties.strokeStyle || '#F00';
        this.fillStyle = properties.fillStyle || '#FFF';
        this.lineWidth = properties.lineWidth || 3;
    }

    render(ctx) {

    }
}

export class Rectangle extends Shape {
    constructor(properties) {
        super(properties);
    }

    render(ctx) {
        ctx.fillStyle = this.fillStyle;
        ctx.fillRect(this.left, this.top, this.width, this.height);
    }
}

export class SimpleLine extends Shape {
    constructor(properties) {
        super(properties);
        this.endX = properties.endX;
        this.endY = properties.endY;
    }

    render(ctx) {
        ctx.strokeStyle = this.strokeStyle;
        ctx.lineWidth = this.lineWidth;
        ctx.beginPath();
        ctx.moveTo(this.left, this.top);
        ctx.lineTo(this.endX, this.endY);
        ctx.stroke();
    }
}