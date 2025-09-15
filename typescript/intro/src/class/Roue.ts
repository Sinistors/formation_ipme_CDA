export class Roue
{
    private _type: string;
    private _isNew: boolean = true;

    constructor(type:string)
    {
        this._type = type;
    }

    public get type(): string {
        return this._type;
    }
    public set type(value: string) {
        this._type = value;
    }

    public get isNew(): boolean {
        return this._isNew;
    }
    public set isNew(value: boolean) {
        this._isNew = value;
    }
}