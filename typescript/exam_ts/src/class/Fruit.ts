export class Fruit
{
    private _name: string;

    constructor(name:string)
    {
        this._name = name;
    }

    public describe(): string
    {
        return "Le fruit choisi est : " + this.name + ".";
    }

    public get name(): string {
        return this._name;
    }
    public set name(value: string) {
        this._name = value;
    }
}