import {BaseFlower} from "app/library/flower";
import {Canvas, SimpleLine, ShapeGroup, Shape, Sequence, Sequencer} from "app/library/canvas";

export class Flower32 extends BaseFlower {
    constructor() {
        super();
        let w = 10;
        let w2 = w / 2;
        this.dpi = 3.141593;
        this.dpi8 = this.dpi / 8;
        this.de = 1.25;
        this.df = 40;
        this.dzo = 6;
        this.d = 30;

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
        this.initContext();
        this.cnvs = new Canvas(this.canvas);
        this.group = new ShapeGroup();
        this.frames = [
            new ShapeGroup(),
            new ShapeGroup(),
            new ShapeGroup(),
            new ShapeGroup(),
            new ShapeGroup(),
            new ShapeGroup(),
            new ShapeGroup(),
            new ShapeGroup()
        ];

        this.generateShapes();
        this.currentFrame = 0;
        this.submit();
    }

    submit() {
        this.currentFrame = 0;
        this.cnvs.removeAll();
        this.cnvs.add(this.frames[this.currentFrame]);
        this.cnvs.render();
        window.setTimeout(() => {
            this.switchFrame();
        }, 300);
    }

    switchFrame() {
        if (this.currentFrame + 1 == this.frames.length) {
            return;
        }
        this.cnvs.removeAll();
        this.currentFrame++;
        this.cnvs.add(this.frames[this.currentFrame]);
        this.cnvs.render();
        window.setTimeout(() => {
            this.switchFrame();
        }, 300);
    }

    generateShapes() {
        this.resetContext();
        let dx3 = 0;
        let dx4 = 0;
        let dy1 = 0;

        for (let dr = 0; dr <= 7; dr++) {
            for (let di = 0; di <= 55; di++) {
                let x = this.cx[di] || 0;
                let y = this.cy[di] || 0;
                let z = this.cz[di] || 0;
                let ds = Math.sqrt(x * x + z * z);
                if (x == 0) {
                    x = 0.00001;
                }
                if (z == 0) {
                    z = 0.0001;
                }
                let da = Math.atan(z / x);
                if (Math.sign(x) == -1) {
                    da = 3.141593 + da;
                }
                let x2 = ds * Math.cos(da + this.dpi8 * dr);
                let z2 = ds * Math.sin(da + this.dpi8 * dr);
                let x3 = ((x2 - (this.de * z2 / this.d)) * this.dzo / (this.d + z2)) * this.df;
                let x4 = ((x2 + (this.de * z2 / this.d)) * this.dzo / (this.d + z2)) * this.df;
                let y1 = (y * this.dzo / (z2 + this.d)) / 2 * this.df;
                if (di == 0) {
                    dx3 = x3;
                    dx4 = x4;
                    dy1 = y1;
                }

                let line1 = new SimpleLine({
                    left: dx3 + 230,
                    top: dy1 + 90,
                    endX: x3 + 230,
                    endY: y1 + 90
                });

                let line2 = new SimpleLine({
                    left: dx4 + 410,
                    top: dy1+90,
                    endX: x4+410,
                    endY: y1+90
                });

                this.frames[dr].add(line1);
                this.frames[dr].add(line2);
                dx3 = x3;
                dx4 = x4;
                dy1 = y1;
            }
        }
    }
}