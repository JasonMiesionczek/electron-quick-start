import {BaseFlower} from "app/library/flower";

export class Flower20 extends BaseFlower {
    constructor() {
        super();
        this.rpd = 1.745329E-02;
    }

    setInitialContent() {
        this.submit();
    }

    submit() {
        this.initContext();
        this.resetContext();

        let centerX = this.canvasWidth / 2;
        let centerY = this.canvasHeight / 2;

        this.drawCircle(centerX, centerY, 5);

        let a = 360 / 7;
        let m = 0;
        let oxm = 319;
        let oym = 100;

        this.setOffset(centerX - (oxm / 2), centerY - (oym));

        for (let d = 0; d <= 360; d += 4) {
            let dr = d * this.rpd;
            let xe = 160 + 150 * Math.cos(dr);
            let ye = 100 - 50 * Math.sin(dr);
            this.drawCircle(xe, ye, 2);
            let ar = m * a * this.rpd;
            let xm = xe + 10 * Math.cos(ar);
            let ym = ye + 4 * Math.sin(ar);
            this.drawLines(oxm, oym, [[xm, ym]]);
            oxm = xm;
            oym = ym;
            m = m + 1;
            if (m == 29) {
                m = 0;
            }
        }
    }
}