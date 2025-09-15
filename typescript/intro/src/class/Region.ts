import { Departement } from "./Departement";

export class Region 
{
    private _name: string;
    private _code: string;
    private _departements: Array<Departement>;

    constructor(name:string, code:string, departements: Array<Departement>)
    {
        this._name = name;
        this._code = code;
        this._departements = departements;
    }
    
    public get name(): string {
        return this._name;
    }
    public set name(value: string) {
        this._name = value;
    }
    public get code(): string {
        return this._code;
    }
    public set code(value: string) {
        this._code = value;
    }
    public get departements(): Array<Departement> {
        return this._departements;
    }
    public set departements(value: Array<Departement>) {
        this._departements = value;
    }
}