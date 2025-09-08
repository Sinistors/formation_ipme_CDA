export function areAnagrams(word1:string, word2:string):boolean 
{
    if (word1.length != word2.length) 
    {
        return false;    
    }

    for (let letter of word1)
    {
        if (!word2.includes(letter)) 
        {
            return false;    
        }
    }

    return true;
}