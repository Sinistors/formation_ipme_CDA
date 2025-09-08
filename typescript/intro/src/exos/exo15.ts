export function removeDuplicate(array:Array<any>):Array<any>
{
    let newArray:Array<any> = [];
    for (let element of array)
    {
        if (!newArray.includes(element)) 
        {
            newArray.push(element);
        }
    }

    return newArray;
}