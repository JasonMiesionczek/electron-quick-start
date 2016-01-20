import {BaseFlower} from "app/library/flower";

export class Flower24 extends BaseFlower {
    constructor() {
        super();
        this.a = 4;
        this.b = 2;
        this.c = 8;
        this.q = 3;
        this.r = 2;
        this.s = 3;
        this.t = 3;
        this.e = 1.25;
        this.f = 70;
        this.zo = 6;
        this.d = 30;
    }

    setInitialContent() {
        this.submit();
    }

    submit() {
        this.initContext();
        this.resetContext();

        let ox1 = 0;
        let ox2 = 0;
        let oy1 = 0;

        for (let w = 1; w <= 3.1; w += 0.01) {
            let x = this.a * Math.sin(this.q * w * this.t);
            let y = this.b * Math.sin(this.r * w * this.t);
            let z = this.c * Math.sin(this.s * w * this.t);
            let x1 = ((x - (this.e * z / this.d)) * this.zo / (this.d + z)) * this.f;
            let x2 = ((x + (this.e * z / this.d)) * this.zo / (this.d + z)) * this.f;
            let y1 = (y * this.zo / (z + this.d)) * this.f;
            if (w == 1) {
                ox1 = x1;
                ox2 = x2;
                oy1 = y1;
            }
            this.drawLines(ox1 + 230, oy1 + 100, [[x1 + 230,y1 + 100]]);
            this.drawLines(ox2 + 410, oy1 + 100, [[x2 + 410,y1 + 100]]);
            ox1 = x1;
            ox2 = x2;
            oy1 = y1;
        }
    }
}