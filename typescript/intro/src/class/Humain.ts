export class Humain
{
    private _name: string | null = null;
    private _age: number | null = null;
    private _hobbies: Array<string> = [];

    // constructor();
    // constructor(name: string);
    // constructor(name: string, age: number);
    constructor(name?: string, age?: number)
    {
        this._name = name ?? null;
        this._age = age ?? null;
    }

    get name(): string | null
    {
        return this._name;
    }
    set name(name: string | null)
    {
        this._name = name;
    }

    get age(): number | null
    {
        return this._age;
    }
    set age(age: number | null)
    {
        this._age = age;
    }

    get hobbies(): Array<string>
    {
        return this._hobbies;
    }

    addHobby(hobby: string): void 
    {
        this.hobbies.push(hobby);
    }    
}