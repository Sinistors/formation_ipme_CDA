import { FarmProduct } from "./FarmProduct";

export class Cow extends FarmProduct
{
    constructor(name:string) 
    {
        super(name + " (vache)");
        this._energyMax = 100;
        this._energy = this._energyMax;
        this._turnProduction = 5;
        this._energyUsed = 10;
        this._productName = 'lait';
    }
}