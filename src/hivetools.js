class HiveTools extends Upgrade {
    constructor(upgradeName, cost, building){
        super(upgradeName, cost);
        this.building = building;
    }

    purchase(){
        super.purchase();
        clickStrength *= 2;
        this.building.doubleUpgrade *= 2;
        this.building.applyDoubleUpgrade();
    }
}