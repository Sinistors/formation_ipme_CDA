export function longestWord(sentence: string) 
{
    let words: Array<string> = sentence.split(" ");
    
    let longestWord: string = "";

    for (let word of words) 
    {
        if (word.length > longestWord.length)
        {
            longestWord = word;    
        }
    }

    return longestWord;
}