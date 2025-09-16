import { FarmProduct } from "./FarmProduct";

export class Sheep extends FarmProduct
{
    constructor(name:string) 
    {
        super(name + " (mouton)");
        this._energyMax = 90;
        this._energy = this._energyMax;
        this._turnProduction = 4;
        this._energyUsed = 8;
        this._productName = 'laines';
    }
}