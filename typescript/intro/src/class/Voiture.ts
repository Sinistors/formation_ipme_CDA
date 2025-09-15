import { Roue } from "./Roue";

export class Voiture 
{
    private _type: string;
    private _model: string;
    private _brand: string;
    private _km: number;
    private _roues: Array<Roue> = [];
    private _passengers: Array<string> = [];

    constructor(type: string, model:string, brand:string, roues: Array<Roue>, km?: number) 
    {
        this._type = type;
        this._model = model;
        this._brand = brand;
        this._roues = roues;
        this._km = km ?? 0;
    }

    addPassenger(name:string): void
    {
        this._passengers.push(name);
    }

    removePassenger(name:string): void
    {
        let i = this._passengers.indexOf(name);
        if (i == -1) 
        {
            console.log("Passenger " + name + " not found to remove.");
            return;    
        }
        this._passengers.splice(i,1);
    }

    getGlobalStatus()
    {
        console.log("La voiture " + this.type + ", " + this.brand + " " + this.model + ", de " + this.km + "km a comme passagers " + this._passengers.toString());
    }

    public get brand(): string {
        return this._brand;
    }
    public set brand(value: string) {
        this._brand = value;
    }
    public get model(): string {
        return this._model;
    }
    public set model(value: string) {
        this._model = value;
    }
    public get type(): string 
    {
        return this._type;
    }
    public set type(value: string) 
    {
        this._type = value;
    }
    public get km(): number 
    {
        return this._km;
    }
    public set km(value: number) 
    {
        this._km = value;
    }
    public get roues(): Array<Roue> 
    {
        return this._roues;
    }
}