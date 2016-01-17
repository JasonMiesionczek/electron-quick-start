import {BaseFlower} from "app/flower";

export class Flower28 extends BaseFlower {
    constructor() {
        super();
        this.rpd = 1.745329E-02;
        this.w2 = 5;
        let w = this.w2;
        this.e = 1.25;
        this.f = 60;
        this.zo = 6;
        this.d = 30;
        //          0   1  2  3   4   5  6  7   8   9 10 11 12 13  14  15 16 17  18  19 20 21  22
        this.cx = [-w, -w, w, w, -w, -w, w, w, -w, -w, w, w, w, w, -w, -w, w, w, -w, -w, w, w, -w];
        //         0   1   2  3  4  5  6   7   8  9 10 11  12  13  14  15  16 17  18 19  20 21 22
        this.cy = [w, -w, -w, w, w, w, w, -w, -w, w, w, w, -w, -w, -w, -w, -w, w, -w, w, -w, w, w];
        //          0   1   2   3   4  5  6  7  8  9 10  11  12 13 14  15 16  17  18 19 20  21 22
        this.cz = [-w, -w, -w, -w, -w, w, w, w, w, w, w, -w, -w, w, w, -w, w, -w, -w, w, w, -w, w];
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

        for (let i = 0; i <= 22; i++) {
            let x = this.cx[i];
            let y = this.cy[i];
            let z = this.cz[i];
            let x1 = ((x - (this.e * z / this.d)) * this.zo / (this.d + z)) * this.f;
            let x2 = ((x + (this.e * z / this.d)) * this.zo / (this.d + z)) * this.f;
            let y1 = (y * this.zo / (z + this.d)) / 2 * this.f;
            if (i == 0) {
                ox1 = x1;
                ox2 = x2;
                oy1 = y1;
            }
            this.drawLines(ox1+230, oy1+90, [[x1+230, y1+90]]);
            this.drawLines(ox2+410, oy1+90, [[x2+410, y1+90]]);
            ox1 = x1;
            ox2 = x2;
            oy1 = y1;
        }
    }
}