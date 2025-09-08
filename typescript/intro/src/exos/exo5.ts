export function randomNumbers(nb:number, max:number): Array<number>
{
    let arrayRandom: Array<number> = [];
    for (let i = 0; i < nb; i++) 
    {
        arrayRandom.push(Math.floor(Math.random() * max));
    }
    return arrayRandom;
}