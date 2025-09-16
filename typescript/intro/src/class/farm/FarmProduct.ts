export abstract class FarmProduct
{
    protected _name:string = "undefined";
    protected _energy: number = 0;
    protected _energyMax: number = 0;
    protected _energyUsed: number = 0;
    protected _turnProduction: number = 0;
    protected _productName:string = "undefined";


    constructor(name:string)
    {
        this._name = name;
    }
    protected produce(): number
    {
        this._energy -= this._energyUsed;
        console.log(this._name + " a produit " + this._turnProduction + " " + this._productName);
        return this._turnProduction;   
    }

    protected rest(): void
    {
        this._energy = this._energyMax - Math.floor(Math.random() * this._energyMax / 2);
        console.log(this._name + " se repose, elle a maintenant "+ this._energy + " énergie.");
    }

    makeAction() : number 
    {
        if (this._energy <= 0) 
        {
            this.rest();
        }
        else
        {
            return this.produce();
        }
        return 0;
    }


}