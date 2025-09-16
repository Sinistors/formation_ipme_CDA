import { FarmProduct } from "./FarmProduct";

export class Chicken extends FarmProduct
{
    constructor(name:string) 
    {
        super(name + " (poulet)");
        this._energyMax = 80;
        this._energy = this._energyMax;
        this._turnProduction = 3;
        this._energyUsed = 5;
        this._productName = 'oeufs';
    }
}