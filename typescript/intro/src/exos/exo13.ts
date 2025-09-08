export function secondLargest(array:Array<number>): number
{
    let largest:number = array[0];
    let secondLargest:number = largest;

    for (let nb of array)
    {
        if (nb > largest) 
        {
            secondLargest = largest;
            largest = nb;
        }
    }

    return secondLargest;
}