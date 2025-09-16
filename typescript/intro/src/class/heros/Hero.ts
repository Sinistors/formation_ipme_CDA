export class Hero 
{
    protected _name: string = "Hero";
    protected _hpMax: number = 200;
    protected _hp: number = 200;
    protected _strength: number = 10;

    constructor(name:string)
    {
        this._name = name;
    }

    sayHello(): void
    {
        console.log(this._name + " said hello !");
    }

    attack(opponent:Hero): void
    {
        console.log(this._name + " attaque " + opponent._name);
    }
    getDamageValue(): number
    {
        if (Math.random() % 2) 
        {
            return this._strength * 1.5;    
        }
        return this._strength;
    }
}

