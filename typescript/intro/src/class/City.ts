export class City 
{
    private _name: string;
    private _codeInsee: string;
    private _zipCodes: Array<string>;
    private _population: number;

    constructor(name:string, codeInsee: string, zipCodes: Array<string>, population: number)
    {
        this._name = name;
        this._codeInsee = codeInsee;
        this._zipCodes = zipCodes;
        this._population = population;
    }


    public get population(): number {
        return this._population;
    }
    public set population(value: number) {
        this._population = value;
    }
    public get zipCodes(): Array<string> {
        return this._zipCodes;
    }
    public set zipCodes(value: Array<string>) {
        this._zipCodes = value;
    }
    public get codeInsee(): string {
        return this._codeInsee;
    }
    public set codeInsee(value: string) {
        this._codeInsee = value;
    }
    public get name(): string {
        return this._name;
    }
    public set name(value: string) {
        this._name = value;
    }
}