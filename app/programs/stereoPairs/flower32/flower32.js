import {BaseFlower} from "app/flower";
import {Canvas, SimpleLine} from "app/library/canvas";

export class Flower32 extends BaseFlower {
    constructor() {
        super();
        this.rpd = 1.745329E-02;
        let w = 10;
        let w2 = w / 2;
        this.e = 1.25;
        this.f = 40;
        this.zo = 6;
        this.d = 30;
        this.delay = 25;
        this.leftOffset = 0;

        this.cx = new Array(55);
        this.cx[16] = -0.809 * w;
        this.cx[30] = -0.809 * w;
        this.cx[31] = -0.809 * w;
        this.cx[38] = -0.809 * w;
        this.cx[0] = -w2;
        this.cx[1] = -w2;
        this.cx[4] = -w2;
        this.cx[5] = -w2;
        this.cx[8] = -w2;
        this.cx[9] = -w2;
        this.cx[14] = -w2;
        this.cx[15] = -w2;
        this.cx[17] = -w2;
        this.cx[20] = -w2;
        this.cx[29] = -w2;
        this.cx[32] = -w2;
        this.cx[37] = -w2;
        this.cx[39] = -w2;
        this.cx[49] = -w2;
        this.cx[21] = -0.618 * w2;
        this.cx[28] = -0.618 * w2;
        this.cx[33] = -0.618 * w2;
        this.cx[40] = -0.618 * w2;
        this.cx[22] = 0.618 * w2;
        this.cx[27] = 0.618 * w2;
        this.cx[34] = 0.618 * w2;
        this.cx[41] = 0.618 * w2;
        this.cx[2] = w2;
        this.cx[3] = w2;
        this.cx[6] = w2;
        this.cx[7] = w2;
        this.cx[10] = w2;
        this.cx[11] = w2;
        this.cx[12] = w2;
        this.cx[13] = w2;
        this.cx[23] = w2;
        this.cx[26] = w2;
        this.cx[35] = w2;
        this.cx[42] = w2;
        this.cx[44] = w2;
        this.cx[47] = w2;
        this.cx[50] = w2;
        this.cx[53] = w2;
        this.cx[55] = w2;
        this.cx[43] = 0.809 * w;
        this.cx[51] = 0.809 * w;
        this.cx[52] = 0.809 * w;
        this.cx[54] = 0.809 * w;


        this.cy = new Array(55);
        this.cy[21] = -0.809 * w;
        this.cy[22] = -0.809 * w;
        this.cy[40] = -0.809 * w;
        this.cy[41] = -0.809 * w;
        this.cy[0] = w2;
        this.cy[3] = w2;
        this.cy[4] = w2;
        this.cy[5] = w2;
        this.cy[6] = w2;
        this.cy[9] = w2;
        this.cy[10] = w2;
        this.cy[11] = w2;
        this.cy[17] = w2;
        this.cy[26] = w2;
        this.cy[29] = w2;
        this.cy[32] = w2;
        this.cy[35] = w2;
        this.cy[37] = w2;
        this.cy[44] = w2;
        this.cy[55] = w2;
        this.cy[18] = 0.618 * w2;
        this.cy[25] = 0.618 * w2;
        this.cy[36] = 0.618 * w2;
        this.cy[45] = 0.618 * w2;
        this.cy[19] = -0.618 * w2;
        this.cy[24] = -0.618 * w2;
        this.cy[46] = -0.618 * w2;
        this.cy[48] = -0.618 * w2;
        this.cy[1] = -w2;
        this.cy[2] = -w2;
        this.cy[7] = -w2;
        this.cy[8] = -w2;
        this.cy[12] = -w2;
        this.cy[13] = -w2;
        this.cy[14] = -w2;
        this.cy[15] = -w2;
        this.cy[20] = -w2;
        this.cy[23] = -w2;
        this.cy[39] = -w2;
        this.cy[42] = -w2;
        this.cy[47] = -w2;
        this.cy[49] = -w2;
        this.cy[50] = -w2;
        this.cy[53] = -w2;
        this.cy[27] = 0.809 * w;
        this.cy[28] = 0.809 * w;
        this.cy[33] = 0.809 * w;
        this.cy[34] = 0.809 * w;

        this.cz = new Array(55);
        this.cz[18] = -0.809 * w;
        this.cz[19] = -0.809 * w;
        this.cz[24] = -0.809 * w;
        this.cz[25] = -0.809 * w;
        this.cz[0] = -w2;
        this.cz[1] = -w2;
        this.cz[2] = -w2;
        this.cz[3] = -w2;
        this.cz[4] = -w2;
        this.cz[11] = -w2;
        this.cz[12] = -w2;
        this.cz[15] = -w2;
        this.cz[17] = -w2;
        this.cz[20] = -w2;
        this.cz[23] = -w2;
        this.cz[26] = -w2;
        this.cz[29] = -w2;
        this.cz[53] = -w2;
        this.cz[55] = -w2;
        this.cz[16] = -0.618 * w2;
        this.cz[30] = -0.618 * w2;
        this.cz[52] = -0.618 * w2;
        this.cz[54] = -0.618 * w2;
        this.cz[31] = 0.618 * w2;
        this.cz[38] = 0.618 * w2;
        this.cz[43] = 0.618 * w2;
        this.cz[51] = 0.618 * w2;
        this.cz[5] = w2;
        this.cz[6] = w2;
        this.cz[7] = w2;
        this.cz[8] = w2;
        this.cz[9] = w2;
        this.cz[10] = w2;
        this.cz[13] = w2;
        this.cz[14] = w2;
        this.cz[32] = w2;
        this.cz[35] = w2;
        this.cz[37] = w2;
        this.cz[39] = w2;
        this.cz[42] = w2;
        this.cz[44] = w2;
        this.cz[47] = w2;
        this.cz[49] = w2;
        this.cz[50] = w2;
        this.cz[36] = 0.809 * w;
        this.cz[45] = 0.809 * w;
        this.cz[46] = 0.809 * w;
        this.cz[48] = 0.809 * w;


    }

    setInitialContent() {
        this.cnvs = new Canvas(document.getElementById('theCanvas'));
        this.drawShapes();
        this.count = 0;
        window.setTimeout(() => { this.coverLeft(); }, 1000);
    }

    drawShapes(leftOffset = 0) {
        this.initContext();
        this.resetContext();

        let ox1 = 0;
        let ox2 = 0;
        let oy1 = 0;

        for (let i = 0; i <= 55; i++) {
            let x = this.cx[i] || 0;
            let y = this.cy[i] || 0;
            let z = this.cz[i] || 0;
            let x1 = ((x - (this.e * z / this.d)) * this.zo / (this.d + z)) * this.f;
            let x2 = ((x + (this.e * z / this.d)) * this.zo / (this.d + z)) * this.f;
            let y1 = (y * this.zo / (z + this.d)) / 2 * this.f;
            if (i == 0) {
                ox1 = x1;
                ox2 = x2;
                oy1 = y1;
            }
            //if (leftOffset < 180) {
            //    this.drawLines(ox1+230+leftOffset, oy1+90, [[x1+230+leftOffset, y1+90]]);
            //}
            //this.drawLines(ox2+410, oy1+90, [[x2+410, y1+90]]);
            let line1 = new SimpleLine({
               left: ox1+230,
                top: oy1+90,
                endX: x1+230,
                endY: y1+90
            });

            let line2 = new SimpleLine({
                left: ox2+410,
                top: oy1+90,
                endX: x2+410,
                endY: y1+90
            });

            this.cnvs.add(line1);
            this.cnvs.add(line2);
            ox1 = x1;
            ox2 = x2;
            oy1 = y1;
        }

        this.cnvs.render();
    }

    redrawShapes() {
        this.drawShapes();
        window.setTimeout(() => { this.coverLeft(); }, this.delay);
    }

    moveLeft() {
        if (this.leftOffset <= 180) {
            this.leftOffset += 5;
            this.drawRect(150+this.leftOffset, 50, 175, 100);
            this.drawShapes(this.leftOffset);
            window.setTimeout(() => { this.moveLeft(); }, 10);
        }
    }

    coverLeft() {
        if (this.count == 5) {
            window.setTimeout(() => { this.moveLeft(); }, this.delay);
            return;
        }
        this.drawRect(150, 50, 175, 100);
        window.setTimeout(() => { this.redrawShapes(); }, this.delay);
        this.count++;
    }
}