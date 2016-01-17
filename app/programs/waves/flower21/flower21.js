import {BaseFlower} from "app/flower";

export class Flower21 extends BaseFlower {
    constructor() {
        super();
        this.length = 90;
        this.width = 45;
        this.testFreq = 50;
        this.rpd = 1.745329E-02;

        this.waveLength = 0;
    }

    setInitialContent() {
        this.initContext();
        this.resetContext();

        this.centerX = this.canvasWidth / 2;
        this.centerY = this.canvasHeight / 2;

        this.offsetX = (this.centerX - (300 / 2));
        this.offsetY = (this.centerY - (140 / 2)) - (140/2);

        this.setOffset(this.offsetX, this.offsetY);

        this.drawLines(10,170, [[310,170],[310,30],[10,30],[10,170]]);
        this.drawText('A', 10, 20);
        this.drawText('B', 300, 20);
        this.drawText('C', 300, 195);
        this.drawText('D', 10, 195);
    }

    submit() {
        let ratio = 300 / this.length;
        if (this.width > this.length * 100 / 200) {
            ratio = ratio * 100 / 200;
        }

        let xa = 10;
        let xb = 10;
        let yb = 190;
        let yc = 190;

        this.waveLength = 1130 / this.testFreq;
        let wr = this.width * ratio;
        //let wrsq = wr * wr;
        let lr = this.length * ratio;
        //let lrsq = lr * lr;
        let ya = 190 - wr;
        let yd = ya;
        let xc = this.length * ratio + 10;
        let xd = xc;

        let xmab = 10;
        let ymab = (ya + yb) / 2;
        let xmbc = (xb + xc) / 2;
        let ymbc = 190;
        let xmcd = xc;
        let ymcd = ymab;
        let xmda = xmbc;
        let ymda = ya;

        let yaa = 190 + wr;
        let yac = 190 - 2  * wr;
        let wr2 = wr / 2;
        let lr2 = lr / 2;
        let yae = ymab - wr;
        let yaf = ymab + wr;
        let xac = xa - lr2;
        let xad = xc + lr2;
        let xaa = xc + lr;
        let xab = xa - lr;

        var triangleWidth = xc - xb;
        var triangleHeight = yb - ya;

        this.offsetX = (this.centerX - (triangleWidth / 2)) - xb;
        this.offsetY = (this.centerY - (triangleHeight / 2)) - ya;

        this.resetContext();
        this.setOffset(this.offsetX, this.offsetY);

        this.drawLines(xb, yb, [[xc,yc],[xd,yd],[xa,ya],[xb,yb]]);

        let wlr = this.waveLength * ratio;
        for (var r = wlr;
             r <= 2 * lr;
             r += wlr) {
            this.drawCircleWithVertex(xmab, ymab, r);
            this.drawCircleWithVertex(xmbc, ymbc, r);
            this.drawCircleWithVertex(xmcd, ymcd, r);
            this.drawCircleWithVertex(xmda, ymda, r);

            if (r > wr2) {
                this.drawCircleWithVertex(xa, yae, r);
                this.drawCircleWithVertex(xa, yaf, r);
                this.drawCircleWithVertex(xc, yae, r);
                this.drawCircleWithVertex(xc, yaf, r);
            }

            if (r > lr2) {
                this.drawCircleWithVertex(xac, ya, r);
                this.drawCircleWithVertex(xac, yb, r);
                this.drawCircleWithVertex(xad, ya, r);
                this.drawCircleWithVertex(xad, yb, r);
            }

            if (r > wr) {
                this.drawCircleWithVertex(xmbc, yaa, r);
                this.drawCircleWithVertex(xmbc, yac, r);
            }

            if (r > lr) {
                this.drawCircleWithVertex(xaa, ymab, r);
                this.drawCircleWithVertex(xab, ymab, r);
            }
        }
    }
}