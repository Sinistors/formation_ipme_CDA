import { Hero } from "./Hero";

export class Guerrier extends Hero
{
    constructor(name:string)
    {
        super(name);
        this._hpMax = 400;
        this._hp = this._hpMax;
        this._strength = 30;
    }

    sayHello(): void 
    {
        super.sayHello();
        console.log("énervé");
    }

    getDamageValue(): number 
    {
        return super.getDamageValue() + 5;
    }
}