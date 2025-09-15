export class Game 
{
    private _name: string;
    
    constructor(name: string) 
    {
        this._name = name;    
    }

    display()
    {
        console.log(this.name);
    }

    public get name(): string {
        return this._name;
    }
    public set name(value: string) {
        this._name = value;
    }
}