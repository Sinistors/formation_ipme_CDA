export class Character 
{
    private _name: string;
    private _hp: number = 200;
    private _damage: number = 10;

    constructor(name:string, hp?:number, damage?:number) 
    {
        this._name = name;
        this._hp = hp ?? 200;
        this._damage = damage ?? 10;
    }

    public attack(character:Character)
    {
        character.takeDamage(this.damage);
        console.log(this.name + " attaque ! " + character.name + " a " + character.hp + " PV");
        if (character.isDead()) 
        {
            console.log(this.name + " est mort !");    
        }
    }

    public takeDamage(damage:number)
    {
        this.hp -= damage;
    }

    public isDead(): boolean
    {
        return this.hp <= 0;
    }

    public get hp(): number {
        return this._hp;
    }
    public set hp(value: number) {
        this._hp = value;
    }
    public get name(): string {
        return this._name;
    }
    public set name(value: string) {
        this._name = value;
    }
        public get damage(): number {
        return this._damage;
    }
    public set damage(value: number) {
        this._damage = value;
    }
}