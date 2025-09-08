export function letterFrequency(word:string): {[key:string]: number}
{
    let frequency : {[key:string]: number} = {};

    let lowerWord:string = word.toLowerCase();

    for (let letter of lowerWord)
    {
        if (frequency[letter] === undefined) 
        {
            frequency[letter] = 0;
        }
        frequency[letter]++;
    }

    return frequency;
}