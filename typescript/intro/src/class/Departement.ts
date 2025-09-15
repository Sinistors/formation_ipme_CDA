import { City } from "./City";

export class Departement
{
    private _name: string;
    private _code: string;
    private _cities: Array<City>;

    constructor(name:string, code:string, cities: Array<City>)
    {
        this._name = name;
        this._code = code;
        this._cities = cities;
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
    public get cities(): Array<City> {
        return this._cities;
    }
    public set cities(value: Array<City>) {
        this._cities = value;
    }
}