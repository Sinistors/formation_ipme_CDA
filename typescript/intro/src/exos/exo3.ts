export function reverseArray(array:Array<any>): Array<any>
{
    let arrayReversed: Array<any> = [];
    for (let i = array.length-1; i >= 0; i--) 
    {
        arrayReversed.push(array[i]);
    }
    return arrayReversed;
}