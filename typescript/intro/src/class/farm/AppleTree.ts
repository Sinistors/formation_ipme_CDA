import { FarmProduct } from "./FarmProduct";

export class AppleTree extends FarmProduct
{
    constructor(name:string) 
    {
        super(name + " (pommier)");
        this._energyMax = 60;
        this._energy = this._energyMax;
        this._turnProduction = 4;
        this._energyUsed = 6;
        this._productName = 'pommes';
    }
}