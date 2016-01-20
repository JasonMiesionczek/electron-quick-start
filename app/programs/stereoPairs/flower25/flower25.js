import {BaseFlower} from "app/library/flower";

export class Flower25 extends BaseFlower {
    constructor() {
        super();
        this.rpd = 1.745329E-02;
        this.r = 5;
        this.e = 1.25;
        this.f = 33;
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

        for (let deglat = -75; deglat <= 75; deglat += 15) {
            let radlat = deglat * this.rpd;
            let sinlat = Math.sin(radlat);
            let coslat = Math.cos(radlat);
            for (let deglon = 90; deglon <= 270; deglon += 15) {
                let radlon = deglon * this.rpd;
                let sinlon = Math.sin(radlon);
                let coslon = Math.cos(radlon);
                let x = 2.5 * this.r * sinlon * coslat;
                let y = this.r * sinlat;
                let z = this.r * coslon * coslat;
                let x1 = ((x - (this.e * z / this.d)) * this.zo / (this.d + z)) * this.f;
                let x2 = ((x + (this.e * z / this.d)) * this.zo / (this.d + z)) * this.f;
                let y1 = (y * this.zo / (z + this.d)) * this.f;
                if (deglon == 90) {
                    ox1 = x1;
                    ox2 = x2;
                    oy1 = y1;
                }
                this.drawLines(ox1+230, oy1+100, [[x1+230, y1+100]]);
                this.drawLines(ox2+410, oy1+100, [[x2+410, y1+100]]);
                ox1 = x1;
                ox2 = x2;
                oy1 = y1;
            }
        }

        for (let deglon = 90; deglon <= 270; deglon += 15) {
            let radlon = deglon * this.rpd;
            let sinlon = Math.sin(radlon);
            let coslon = Math.cos(radlon);
            for (let deglat = -90; deglat <= 90; deglat += 15) {
                let radlat = deglat * this.rpd;
                let sinlat = Math.sin(radlat);
                let coslat = Math.cos(radlat);
                let x = 2.5 * this.r * sinlon * coslat;
                let y = this.r * sinlat;
                let z = this.r * coslon * coslat;
                let x1 = ((x - (this.e * z / this.d)) * this.zo / (this.d + z)) * this.f;
                let x2 = ((x + (this.e * z / this.d)) * this.zo / (this.d + z)) * this.f;
                let y1 = (y * this.zo / (z + this.d)) * this.f;
                if (deglat == -90) {
                    ox1 = x1;
                    ox2 = x2;
                    oy1 = y1;
                }
                this.drawLines(ox1+230, oy1+100, [[x1+230, y1+100]]);
                this.drawLines(ox2+410, oy1+100, [[x2+410, y1+100]]);
                ox1 = x1;
                ox2 = x2;
                oy1 = y1;
            }
        }
    }
}