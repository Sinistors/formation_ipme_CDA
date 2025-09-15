export class Drink
{
    private _name: string;
    private _price: number;

    constructor(name:string, price:number)
    {
        this._name = name;
        this._price = price;
    }

    describe():void
    {
        console.log("Boisson ajoutée : " + this.name + " - " + this.price + "€");
    }

    public get price(): number {
        return this._price;
    }
    public set price(value: number) {
        this._price = value;
    }
    public get name(): string {
        return this._name;
    }
    public set name(value: string) {
        this._name = value;
    }

}