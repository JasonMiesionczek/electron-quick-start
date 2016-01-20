
export class Canvas {
    constructor(canvasElement) {
        this.canvas = canvasElement;
        this.ctx = canvasElement.getContext('2d');
        this.objects = [];
    }

    clear() {
        this.ctx.clearRect(0, 0, this.canvas.width, this.canvas.height);
    }

    removeAll() {
        this.objects = [];
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

export class Sequencer {
    constructor(canvas:Canvas) {
        this.objects = [];
        this.frameRate = 41;// number of milliseconds to sleep between updates
        this.canvas = canvas;
    }

    add(seq:Sequence) {
        this.objects.push(seq);
        this.buildSequence(seq);
    }

    buildSequence(seq:Sequence) {
        seq.steps = [];
        let numSteps = Math.round(seq.duration / this.frameRate);
        let valueDiff = seq.end - seq.start; // the amount we need to cover
        let valuePerStep = valueDiff / numSteps; // the amount it changes per step
        for (let i = 0; i < numSteps; i++) {
            seq.steps.push(valuePerStep);
        }
    }

    runSequence(seq:Sequence) {
        window.setTimeout(() => {
            seq.doStep(() => {
                this.canvas.render();
                this.runSequence(seq);
            });
        }, this.frameRate);
    }

    runAll() {
        this.objects.forEach((seq:Sequence) => {
           this.runSequence(seq);
        });
    }
}

export class Sequence {
    constructor(obj:Shape, prop, start, end, duration) {
        this.obj = obj;
        this.prop = prop;
        this.start = start;
        this.end = end;
        this.duration = duration;
        this.steps = [];
        this.currentStep = 0;
    }

    setPropValue(val) {
        this.obj[this.prop] = val;
    }

    doStep(renderCallback) {
        if (this.currentStep + 1 >= this.steps.length) {
            return;
        }
        this.setPropValue(this.steps[this.currentStep]);
        renderCallback();
        this.currentStep++;
    }
}

export class Shape {
    constructor(properties = {}) {
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

    set x(value) {
        this.left = value;
    }

    set y(value) {
        this.top = value;
    }
}

export class ShapeGroup extends Shape {
    constructor(properties = {}) {
        super(properties);
        this.shapes = [];
    }

    add(shape:Shape) {
        this.shapes.push(shape);
    }

    render(ctx) {
        this.shapes.forEach((shape:Shape) => {
            shape.render(ctx);
        });
    }

    set y(value) {
        this.shapes.forEach((shape:Shape) => {
            shape.top = value;
        });
    }

    set x(value) {
        this.shapes.forEach((shape:Shape) => {
            shape.left = value;
        });
    }

    set alpha(value) {
        this.shapes.forEach((shape:Shape) => {
           if (value == 0) {
               shape.strokeStyle = 'rgba(255,255,255,1)';
           } else if (value == 1) {
               shape.strokeStyle = '#F00';
           }
        });
    }
}

export class Circle extends Shape {
    constructor(properties = {}) {
        super(properties);
        this.radius = properties.radius || 0;
    }

    render(ctx) {
        ctx.beginPath();
        ctx.arc(this.left, this.top, this.radius, 0, 2 * Math.PI, false);
        ctx.lineWidth = this.lineWidth;
        ctx.strokeStyle = this.strokeStyle;
        ctx.stroke();
    }
}

export class Rectangle extends Shape {
    constructor(properties = {}) {
        super(properties);
    }

    render(ctx) {
        ctx.fillStyle = this.fillStyle;
        ctx.fillRect(this.left, this.top, this.width, this.height);
    }
}

export class SimpleLine extends Shape {
    constructor(properties = {}) {
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