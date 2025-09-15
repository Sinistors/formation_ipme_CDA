export class Calculator
{
    public static add(a:number, b:number): number
    {
        return a+b;
    }
    public static substract(a:number, b:number): number
    {
        return a-b;
    }
    public static multiply(a:number, b:number): number
    {
        return a*b;
    }
    public static divide(a:number, b:number): number
    {
        if (b == 0) 
        {
            console.log("error can't divide by 0");
            return 0;    
        }
        return a/b;
    }
}