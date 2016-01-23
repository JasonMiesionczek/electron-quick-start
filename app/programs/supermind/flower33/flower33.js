
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
        this.motwf = 0;
        this.conwf = 0;
        this.perwf = 0;
        this.strwf = 0;
        this.quawf = 0;
        this.levwf = 0;
        this.uniwf = 0;
        this.meawf = 0;
        this.refwf = 0;
        this.inswf = 0;
        this.emowf = 0;
        this.menwf = 0;
        this.phywf = 0;
        this.creact = 0;
        this.crepot = 0;
        this.foract = 0;
        this.forpot = 0;
        this.funact = 0;
        this.funpot = 0;
        this.totact = 0;
        this.totpot = 0;
        this.motbycon = 0;
        this.conofmotbyper = 0;
        this.conofmotbystr = 0;
        this.conofmotbyqua = 0;
        this.conofmotbylev = 0;
        this.conofmotbyuni = 0;
        this.conofmotbymea = 0;
        this.conofmotbyref = 0;
        this.conofmotbyins = 0;
        this.conofmotbyemo = 0;
        this.conofmotbymen = 0;
        this.conofmotbyphy = 0;
        this.conbyper = 0;
        this.perofconbystr = 0;
        this.perofconbyqua = 0;
        this.perofconbylev = 0;
        this.perofconbyuni = 0;
        this.perofconbymea = 0;
        this.perofconbyref = 0;
        this.perofconbyins = 0;
        this.perofconbyemo = 0;
        this.perofconbymen = 0;
        this.perofconbyphy = 0;
        this.perbystr = 0;
        this.strofperbyqua = 0;
        this.strofperbylev = 0;
        this.strofperbyuni = 0;
        this.strofperbymea = 0;
        this.strofperbyref = 0;
        this.strofperbyins = 0;
        this.strofperbyemo = 0;
        this.strofperbymen = 0;
        this.strofperbyphy = 0;
        this.strbyqua = 0;
        this.quaofstrbylev = 0;
        this.quaofstrbyuni = 0;
        this.quaofstrbymea = 0;
        this.quaofstrbyref = 0;
        this.quaofstrbyins = 0;
        this.quaofstrbyemo = 0;
        this.quaofstrbymen = 0;
        this.quaofstrbyphy = 0;
        this.quabylev = 0;
        this.levofquabyuni = 0;
        this.levofquabymea = 0;
        this.levofquabyref = 0;
        this.levofquabyins = 0;
        this.levofquabyemo = 0;
        this.levofquabymen = 0;
        this.levofquabyphy = 0;
        this.levbyuni = 0;
        this.unioflevbymea = 0;
        this.unioflevbyref = 0;
        this.unioflevbyins = 0;
        this.unioflevbyemo = 0;
        this.unioflevbymen = 0;
        this.unioflevbyphy = 0;
        this.unibymea = 0;
        this.meaofunibyref = 0;
        this.meaofunibyins = 0;
        this.meaofunibyemo = 0;
        this.meaofunibymen = 0;
        this.meaofunibyphy = 0;
        this.meabyref = 0;
        this.refofmeabyins = 0;
        this.refofmeabyemo = 0;
        this.refofmeabymen = 0;
        this.refofmeabyphy = 0;
        this.refbyins = 0;
        this.insofrefbyemo = 0;
        this.insofrefbymen = 0;
        this.insofrefbyphy = 0;
        this.insbyemo = 0;
        this.emoofinsbymen = 0;
        this.emoofinsbyphy = 0;
        this.emobymen = 0;
        this.menofemobyphy = 0;
        this.menbyphy = 0;

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
        if (this.currentStep == 28) {
            return;
        }
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