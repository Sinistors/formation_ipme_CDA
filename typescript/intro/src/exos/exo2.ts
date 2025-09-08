export function countVowels(sentence: string): number
{
    const vowels: Array<string> = ["a","e","i","o","u","y"];

    let count: number = 0;

    let lowerSentence: string = sentence.toLowerCase();
    for (let i = 0; i < sentence.length; i++) 
    {
        if (vowels.includes(lowerSentence[i])) 
        {
            count++;    
        }
    }
    return count;
}