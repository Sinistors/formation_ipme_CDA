export function sumOfSquares(n:number):number 
{
    let sum:number = 0;
    for (let i = 1; i <= n; i++)
    {
        sum += i*i;
    }
    return sum;
}