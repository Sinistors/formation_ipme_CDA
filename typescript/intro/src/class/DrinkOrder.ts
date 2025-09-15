import { Drink } from "./Drink";

export class DrinkOrder 
{
    private _drinks: Array<Drink> = [];
    
    addDrink(drink:Drink)
    {
        this._drinks.push(drink);
        console.log("Boisson ajoutée : " + drink.name + " - " + drink.price + "€");
    }

    totalPrice(): number
    {
        let total = 0;
        for (let drink of this._drinks)
        {
            total += drink.price;
        }

        if (this._drinks.length >= 3) 
        {
            total -= total*0.1;    
        }
        return total;
    }
}