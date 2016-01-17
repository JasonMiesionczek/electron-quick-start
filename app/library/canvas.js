
export class Canvas {
    constructor(canvasElement) {
        this.canvas = canvasElement;
        this.ctx = canvasElement.getContext('2d');
        this.objects = [];
    }

    add(shape: Shape) {
        this.objects.push(shape);
    }

    render() {
        this.ctx.clearRect(0, 0, this.canvas.width, this.canvas.height);
        this.objects.forEach((obj) => {

        });
    }
}

export class Shape {
    constructor(properties) {
        this.top = properties.top || 0;
        this.left = properties.left || 0;
        this.width = properties.width || 0;
        this.height = properties.height || 0;
    }
}

export class Rectangle extends Shape {
    constructor(properties) {
        super(properties);
    }
}