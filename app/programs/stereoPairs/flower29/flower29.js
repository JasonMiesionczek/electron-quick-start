import {BaseFlower} from "app/library/flower";

export class Flower29 extends BaseFlower {
    constructor() {
        super();
        this.rpd = 1.745329E-02;
        this.w2 = 5;
        let w = this.w2;
        this.e = 1.25;
        this.f = 60;
        this.zo = 6;
        this.d = 30;
        /*
         CX(0)=-W2:
         CX(1)=-W2:
         CX(2)=W2:
         CX(3)=W2:
         CX(4)=-W2:
         CX(5)=-W2:
         CX(6)=W2:
         CX(7)=W2:
         CX(8)=-W2:
         CX(9)=-W2:
         CX(10)=W2:
         CX(11)=W2:
         CX(12)=W2:
         CX(13)=W2:
         CX(14)=-W2:
         CX(15)=-W2:
         CX(21)=-W2:
         CX(23)=W2:
         CX(26)=W2
         CX(28)=-W2
        */
        this.cx = new Array(29);
        this.cx[0] = -w;
        this.cx[1] = -w;
        this.cx[2] = w;
        this.cx[3] = w;
        this.cx[4] = -w;
        this.cx[5] = -w;
        this.cx[6] = w;
        this.cx[7] = w;
        this.cx[8] = -w;
        this.cx[9] = -w;
        this.cx[10] = w;
        this.cx[11] = w;
        this.cx[12] = w;
        this.cx[13] = w;
        this.cx[14] = -w;
        this.cx[15] = -w;
        this.cx[21] = -w;
        this.cx[23] = w;
        this.cx[26] = w;
        this.cx[28] = -w;
        /*
         CY(0)=W2:
         CY(1)=-W2:
         CY(2)=-W2:
         CY(3)=W2:
         CY(4)=W2:
         CY(5)=W2:
         CY(6)=W2:
         CY(7)=-W2:
         CY(8)=-W2:
         CY(9)=W2:
         CY(10)=W2:
         CY(11)=W2:
         CY(12)=-W2:
         CY(13)=-W2:
         CY(14)=-W2:
         CY(15)=-W2:
         CY(16)=W2:
         CY(18)=-W2:
         CY(20)=W2:
         CY(22)=-W2
         CY(24)=W2
         */
        this.cy = new Array(29);
        this.cy[0] = w;
        this.cy[1] = -w;
        this.cy[2] = -w;
        this.cy[3] = w;
        this.cy[4] = w;
        this.cy[5] = w;
        this.cy[6] = w;
        this.cy[7] = -w;
        this.cy[8] = -w;
        this.cy[9] = w;
        this.cy[10] = w;
        this.cy[11] = w;
        this.cy[12] = -w;
        this.cy[13] = -w;
        this.cy[14] = -w;
        this.cy[15] = -w;
        this.cy[16] = w;
        this.cy[18] = -w;
        this.cy[20] = w;
        this.cy[22] = -w;
        this.cy[24] = w;
        /*
         CZ(0)=-W2:
         CZ(1)=-W2:
         CZ(2)=-W2:
         CZ(3)=-W2:
         CZ(4)=-W2:
         CZ(5)=W2:
         CZ(6)=W2:
         CZ(7)=W2:
         CZ(8)=W2:
         CZ(9)=W2:
         CZ(10)=W2:
         CZ(11)=-W2:
         CZ(12)=-W2:
         CZ(13)=W2:
         CZ(14)=W2:
         CZ(15)=-W2:
         CZ(17)=-W2:
         CZ(19)=W2:
         CZ(25)=-W2:
         CZ(27)=W2
         CZ(29)=-W2
         */
        this.cz = new Array(29);
        this.cz[0] = -w;
        this.cz[1] = -w;
        this.cz[2] = -w;
        this.cz[3] = -w;
        this.cz[4] = -w;
        this.cz[5] = w;
        this.cz[6] = w;
        this.cz[7] = w;
        this.cz[8] = w;
        this.cz[9] = w;
        this.cz[10] = w;
        this.cz[11] = -w;
        this.cz[12] = -w;
        this.cz[13] = w;
        this.cz[14] = w;
        this.cz[15] = -w;
        this.cz[17] = -w;
        this.cz[19] = w;
        this.cz[25] = -w;
        this.cz[27] = w;
        this.cz[29] = -w;
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

        for (let i = 0; i <= 29; i++) {
            let x = this.cx[i] || 0;
            let y = this.cy[i] || 0;
            let z = this.cz[i] || 0;
            let x1 = ((x - (this.e * z / this.d)) * this.zo / (this.d + z)) * this.f;
            let x2 = ((x + (this.e * z / this.d)) * this.zo / (this.d + z)) * this.f;
            let y1 = (y * this.zo / (z + this.d)) / 2 * this.f;
            if (i == 0 || i == 16) {
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