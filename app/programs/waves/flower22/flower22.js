import {BaseFlower} from "app/library/flower";

export class Flower22 extends BaseFlower {
    constructor() {
        super();
        this.length = 90;
        this.width = 45;
        this.distanceT = 10;
        this.distanceS = 10;
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
        let xa = 10;
        let xb = 10;
        let yb = 190;
        let yc = 190;
        let ratio = 300 / this.length;
        if (this.width > this.length * 100 / 200) {
            ratio = ratio * 100 / 200;
        }

        this.waveLength = 1130 / this.testFreq;
        let wr = this.width * ratio;
        //let esq = wr * wr;
        let lr = this.length * ratio;
        //let fsq = lr * lr;
        let ya = 190 - wr;
        let yd = ya;
        let xc = lr + 10;
        let xd = xc;

        let xp = 10 + (this.length - this.distanceT) * ratio;
        let yp = 190 - (this.width - this.distanceS) * ratio;
        let yps = 190 - (this.width + this.distanceS) * ratio;
        let ypw = 190 + (this.width - this.distanceS) * ratio;
        let xpt = 10 + (this.length + this.distanceT) * ratio;
        let xpl = 10 - (this.length - this.distanceT) * ratio;

        var triangleWidth = xc - xb;
        var triangleHeight = yb - ya;

        this.offsetX = (this.centerX - (triangleWidth / 2)) - xb;
        this.offsetY = (this.centerY - (triangleHeight / 2)) - ya;

        this.resetContext();
        this.setOffset(this.offsetX, this.offsetY);

        this.drawLines(xb, yb, [[xc,yc],[xd,yd],[xa,ya],[xb,yb]]);

        let wlr = this.waveLength * ratio;
        let sr = this.distanceS * ratio;
        let tr = this.distanceT * ratio;
        let srsq = sr * sr;
        let trsq = tr * tr;
        let rtst = Math.sqrt(srsq + trsq);
        let wsr = (this.width - this.distanceS) * ratio;
        let ltr = (this.length - this.distanceT) * ratio;
        let wsrsq = wsr * wsr;
        let rtwst = Math.sqrt(wsrsq + trsq);
        let ltrsq = ltr * ltr;
        let rtltws = Math.sqrt(ltrsq + wsrsq);
        let rtlts = Math.sqrt(ltrsq + srsq);
        for (var r = wlr;
             r <= 2 * lr;
             r += wlr) {
            if (r > sr) {
                this.drawCircleWithVertex(xp, yps, r);
            }

            if (r > tr) {
                this.drawCircleWithVertex(xp, ypw, r);
            }

            if (r > wsr) {
                this.drawCircleWithVertex(xpt, yp, r);
            }

            if (r > ltr) {
                this.drawCircleWithVertex(xpl, yp, r);
            }

            if (r > rtst) {
                this.drawCircleWithVertex(xpt, yps, r);
            }

            if (r > rtwst) {
                this.drawCircleWithVertex(xpt, ypw, r);
            }

            if (r > rtltws) {
                this.drawCircleWithVertex(xpl, ypw, r);
            }

            if (r > rtlts) {
                this.drawCircleWithVertex(xpl, yps, r);
            }
        }
    }
}