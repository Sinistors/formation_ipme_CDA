import { FarmProduct } from "./FarmProduct";

export class Wheat extends FarmProduct
{
    constructor(name:string) 
    {
        super(name + " (blé)");
        this._energyMax = 70;
        this._energy = this._energyMax;
        this._turnProduction = 6;
        this._energyUsed = 7;
        this._productName = 'graines';
    }
}