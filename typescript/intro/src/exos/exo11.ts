export function factorial(nb:number):number
{
    let result:number = 1;
    for (let i = 2; i <= nb; i++) 
    {
        result *= i;
    }
    return result;
}