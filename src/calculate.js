export default class PotMethod {
    constructor() {
        this.total = document.getElementById("total");
        this.basic = document.getElementById("basic");
        this.entertainment = document.getElementById("entertainment"); 
        this.education = document.getElementById("education"); 
        this.savings = document.getElementById("savings"); 
        this.fund = document.getElementById("fund"); 
        this.fight = document.getElementById("fight");
        
        this.basicPercentCtrl = document.getElementById("basicPercent");
        this.entertainmentPercentCtrl = document.getElementById("entertainmentPercent"); 
        this.educationPercentCtrl = document.getElementById("educationPercent"); 
        this.savingsPercentCtrl = document.getElementById("savingsPercent"); 
        this.fundPercentCtrl = document.getElementById("fundPercent"); 
        this.fightPercentCtrl = document.getElementById("fightPercent");

        this.entertainmentPercent = 10;
        this.basicPercent = 55;
        this.educationPercent = 10;
        this.savingsPercent = 10;
        this.fundPercent = 10;
        this.fightPercent = 5;
    }
    calculate() {
        let totalValue = this.total.value;
        this.total.required = true;
        if(!this.checkValue(totalValue)) return false;
        this.getPercent();
        this.basic.value = `${(totalValue*(this.basicPercent/100)).toLocaleString('pt-br',{style: 'currency', currency: 'BRL'})}`;
        this.entertainment.value = `${(totalValue*(this.entertainmentPercent/100)).toLocaleString('pt-br',{style: 'currency', currency: 'BRL'})}`; 
        this.education.value = `${(totalValue*(this.educationPercent/100)).toLocaleString('pt-br',{style: 'currency', currency: 'BRL'})}`; 
        this.savings.value = `${(totalValue*(this.savingsPercent/100)).toLocaleString('pt-br',{style: 'currency', currency: 'BRL'})}`; 
        this.fund.value = `${(totalValue*(this.fundPercent/100)).toLocaleString('pt-br',{style: 'currency', currency: 'BRL'})}`; 
        this.fight.value = `${(totalValue*(this.fightPercent/100)).toLocaleString('pt-br',{style: 'currency', currency: 'BRL'})}`; 
    }    
    checkValue(value) {
        if(value === "") {
            this.total.required = false;
            this.reset();
            return false;
        };
        if(value <= 0) return false;
        return true;
    }
    reset(){
        this.basic.value = '';
        this.entertainment.value = ''; 
        this.education.value = ''; 
        this.savings.value = ''; 
        this.fund.value = ''; 
        this.fight.value = ''; 
    }
    getPercent(){
        this.basicPercent = this.basicPercentCtrl.value = 0 ? this.basicPercentCtrl.value : this.basicPercent;
        this.entertainmentPercent = this.entertainmentPercentCtrl.value = 0 ? this.entertainmentPercentCtrl.value : this.entertainmentPercent;
        this.educationPercent = this.educationPercentCtrl.value = 0 ? this.educationPercentCtrl.value : this.educationPercent;
        this.savingsPercent = this.savingsPercentCtrl.value = 0 ? this.savingsPercentCtrl.value : this.savingsPercent;
        this.fundPercent = this.fundPercentCtrl.value = 0 ? this.fundPercentCtrl.value : this.fundPercent;
        this.fightPercent = this.fightPercentCtrl.value = 0 ? this.fightPercentCtrl.value : this.fightPercent;
    }
    resetPercent(){
        this.basicPercentCtrl.value = 0;
        this.entertainmentPercentCtrl.value = 0; 
        this.educationPercentCtrl.value = 0; 
        this.savingsPercentCtrl.value = 0;
        this.fundPercentCtrl.value = 0; 
        this.fightPercentCtrl.value = 0;
        
        this.calculate();
    }
}