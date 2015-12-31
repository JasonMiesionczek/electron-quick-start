import {BaseFlower} from "../flower";

export class Flower18 extends BaseFlower {
    constructor() {
        super();
        this.length = 90;
        this.width = 45;
        this.testFreq = 50;
        this.rpd = 1.745329E-02;

        this.waveLength = 0;
    }

    activate() {
    }

    submit() {
        let ratio = 300 / this.length;
        this.waveLength = 1130 / this.testFreq;
        let e = this.width * ratio;
        let esq = e * e;
        let f = this.length * ratio;
        let fsq = f * f;
        let ya = 190 - e;
        let yd = ya;
        let xc = this.length * ratio + 10
        let xd = xc;

        this.initContext();
        this.resetContext();

        let centerX = this.canvas.width / 2;
        let centerY = this.canvas.height / 2;

        let xa = 10;
        let xb = 10;
        let yb = 190;
        let yc = 190;

        var triangleWidth = xc - xb;
        var triangleHeight = yb - ya;

        var offsetX = (centerX - (triangleWidth / 2)) - xb;
        var offsetY = (centerY - (triangleHeight / 2)) - ya;

        this.resetContext();
        this.setOffset(offsetX, offsetY);

        this.drawLines(xb, yb, [[xc,yc],[xd,yd],[xa,ya],[xb,yb]]);

        let wlr = this.waveLength * ratio;
        for (var r = wlr;
             r <= 2 * f;
             r += wlr) {
            this.drawCircleWithVertex(xa, ya, r);

            if (r > e) {
                var yaa = 190 + e;
                this.drawCircleWithVertex(xa, yaa, r);
            }

            if (r > 2 * e) {
                let yab = 190 - 3 * e;
                this.drawCircleWithVertex(xa, yab, r);
            }

            if (r > f) {
                let xaa = 2 * f + 10;
                this.drawCircleWithVertex(xaa, ya, r);
            }

            if (r > Math.sqrt(esq+fsq)) {
                let xaa = 2 * this.length * ratio + 10;
                this.drawCircleWithVertex(xaa, yaa, r);
            }
        }
    }
}