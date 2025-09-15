export class BankAccount 
{
    private _balance: number;
    private _name: string;
    private _active: boolean;

    constructor(name:string) 
    {
        this._name = name;
        this._balance = 0;
        this._active = true;
    }

    deposit(amount: number): number
    {
        this._balance += amount;
        return this._balance;
    }

    withdraw(amount: number): number
    {
        if (this._balance - amount < 0) 
        {
            console.log("Not enough money to withdraw.")
            return 0;    
        }
        this._balance -= amount;
        return this._balance;
    }

    displayBalance(): void
    {
        console.log("Le compte de " + this._name + " a actuellement " + this._balance + "€.")
    }
}