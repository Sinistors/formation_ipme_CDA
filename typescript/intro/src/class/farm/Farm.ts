import { AppleTree } from "./AppleTree";
import { Chicken } from "./Chicken";
import { Cow } from "./Cow";
import { FarmProduct } from "./FarmProduct"
import { Sheep } from "./Sheep";
import { Wheat } from "./Wheat";
const sleep = (delay: number) => new Promise((resolve) => setTimeout(resolve, delay));


export class Farm 
{
    private _farmProducts:Array<FarmProduct> = [];
    private _names: Array<string> = [
    "Marguerite",
    "Clémentine",
    "Fleurette",
    "Daisy",
    "Rosette",
    "Noisette",
    "Lune",
    "Chocolatine",
    "Perle",
    "Framboise",
    "Caramel",
    "Brindille",
    "Cerise",
    "Pâquerette",
    "Étoile"
    ];
    private score: number = 0;

    constructor(nb:number) 
    {
        this.generateObject(nb);    
    }

    private generateObject(nb:number)
    {
        for (let i = 0; i < nb; i++) 
        {
            let random = Math.floor(Math.random() * 5);
            if (random == 0) 
            {
                let name:string = this._names[Math.floor(Math.random() * this._names.length)];
                this._farmProducts.push(new Cow(name));
            } 
            else if (random == 1) 
            {
                let name:string = this._names[Math.floor(Math.random() * this._names.length)];
                this._farmProducts.push(new Chicken(name));
            }
            else if (random == 2) 
            {
                let name:string = this._names[Math.floor(Math.random() * this._names.length)];
                this._farmProducts.push(new Sheep(name));
            }
            else if (random == 3) 
            {
                let name:string = this._names[Math.floor(Math.random() * this._names.length)];
                this._farmProducts.push(new Wheat(name));
            }
            else if (random == 4) 
            {
                let name:string = this._names[Math.floor(Math.random() * this._names.length)];
                this._farmProducts.push(new AppleTree(name));
            }
        }
    }

    public async startProduction(turn: number, targetScore?: number)
    {
        for (let i = 0; i < turn; i++) 
        {
            console.log("------- Tour "+ (i+1) +" -------");
            let turnTotal: number = 0;
            for (let product of this._farmProducts)
            {
                turnTotal += product.makeAction();
            }
            console.log("-- "+ turnTotal +" unités produites ce tour --");
            this.score += turnTotal;
            await sleep(200);
        }
        
        if (targetScore) 
        {
            if (this.score >= targetScore) 
            {
                console.log("Succès ! Vous avez atteint " + this.score + " unités.");
            }
            else
            {
                console.log("Échec. Vous avez atteint seulement " + this.score + " unités.");
            }
        }
        else
        {
            console.log("Quantité totale créée : " + this.score + " unités.");
        }
    }
}