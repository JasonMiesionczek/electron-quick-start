
export class Flower33 {
    constructor() {
        this.currentStep = 1;
        this.sub = 0;
        this.mot = 0;
        this.motf = 1;
        this.conf = 3;
        this.con = 0;
        this.perf = 9;
        this.per = 0;
        this.strf = 2;
        this.str = 0;
        this.quaf = 4;
        this.qua = 0;
        this.levf = 6;
        this.lev = 0;
        this.unif = 8;
        this.uni = 0;
        this.meaf = 10;
        this.mea = 0;
        this.reff = 12;
        this.ref = 0;
        this.insf = 5;
        this.ins = 0;
        this.emof = 7;
        this.emo = 0;
        this.menf = 11;
        this.men = 0;
        this.phyf = 13;
        this.phy = 0;
    }

    calcValues() {
        this.motwf = this.mot * this.motf;
        this.conwf = this.con * this.conf;
        this.perwf = this.per * this.perf;
        this.strwf = this.str * this.strf;
        this.quawf = this.qua * this.quaf;
        this.levwf = this.lev * this.levf;
        this.uniwf = this.uni * this.unif;
        this.meawf = this.mea * this.meaf;
        this.refwf = this.ref * this.reff;
        this.inswf = this.ins * this.insf;
        this.emowf = this.emo * this.emof;
        this.menwf = this.men * this.menf;
        this.phywf = this.phy * this.phyf;
        this.creact = (this.motwf + this.conwf + this.perf) / 1.3;
        this.crepot = 100 - this.creact;
        this.foract = (this.strwf + this.quawf + this.levwf + this.uniwf + this.meawf + this.refwf)  / 4.2;
        this.forpot = 100 - this.foract;
        this.funact = (this.inswf + this.emowf + this.menwf + this.phywf) / 3.6;
        this.funpot = 100 - this.funact;
        this.totact = (this.creact + this.foract + this.funact) / 3;
        this.totpot = 100 - this.totact;
    }

    next() {
        this.currentStep++;
        this.calcValues();
    }

    prev() {
        if (this.currentStep > 1) {
            this.currentStep--;
            this.calcValues();
        }
    }
}