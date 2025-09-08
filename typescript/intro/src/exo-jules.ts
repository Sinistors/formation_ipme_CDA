import { isEven } from "./exos/exo1";
import { sortByWordLength } from "./exos/exo10";
import { countVowels } from "./exos/exo2";
import { reverseArray } from "./exos/exo3";
import { longestWord } from "./exos/exo4";
import { randomNumbers } from "./exos/exo5";
import { areAnagrams } from "./exos/exo6";
import { sumOfSquares } from "./exos/exo7";
import { generatePassword } from "./exos/exo8";
import { letterFrequency } from "./exos/exo9";
import { addDots } from "./utils";
import arrayNames from "./utils2";

// console.log(addDots("ui"));

// console.log(arrayNames);

//1)
console.log(isEven(3));
console.log(isEven(10));
console.log(isEven(17));

//2)
console.log(countVowels("typescript"));

//3)
console.log(reverseArray([1,2,3]));

//4)
console.log(longestWord("Le TypeScript est puissant"));

//5)
console.log(randomNumbers(5,10));

//6)
console.log(areAnagrams("chien", "niche"));
console.log(areAnagrams("typescript", "python"));

//7)
console.log(sumOfSquares(3));

//8)
console.log(generatePassword(8));

//9)
console.log(letterFrequency("Hello"));

//10)
console.log(sortByWordLength("Le langage TypeScript est puissant"));
