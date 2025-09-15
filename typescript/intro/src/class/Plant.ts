import { Caracteristic } from "./Caracteristic";
import { Soin } from "./Soin";

export class Plant 
{
    private _name: string;
    private _type: string;
    private _height: number;
    private _caracteristics: Array<Caracteristic>;
    private _soins: Array<Soin>;

    constructor(name:string, type:string, height:number, caracteristics: Array<Caracteristic>, soins: Array<Soin>)
    {
        this._name = name;
        this._type = type;
        this._height = height;
        this._caracteristics = caracteristics;
        this._soins = soins;
    }
    public addSoin(soin: Soin): void 
    {
        this._soins.push(soin);
    }
}