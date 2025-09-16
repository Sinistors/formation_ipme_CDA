import { Hero } from "./Hero";

export class Healer extends Hero
{
    constructor(name:string)
    {
        super(name);
        this._hpMax = 150;
        this._hp = this._hpMax;
        this._strength = 5;
    }

    sayHello(): void 
    {
        super.sayHello();
        console.log("tendrement");
    }
}