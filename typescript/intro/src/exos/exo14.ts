export function fizzBuzz(n:number):Array<string | number> 
{
    let array: Array<string | number> = [];
    
    for (let i = 1; i <= n; i++) 
    {
        let string:string = "";
        if (i % 3 == 0) 
        {
            string += "Fizz";
        }
        if (i % 5 == 0) 
        {
            string += "Buzz";
        }
        if (string == "") 
        {
            array.push(i);    
        }
        else
        {
            array.push(string);
        }
    }
    
    return array;
}