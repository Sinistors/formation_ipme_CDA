function compareLength(a:string, b:string):number
{
    return a.length - b.length;
}

export function sortByWordLength(sentence:string): Array<string> 
{
    let array:Array<string> = sentence.split(" ");

    return array.sort(compareLength);
}