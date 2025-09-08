import { isEven } from "./exos/exo1";
import { sortByWordLength } from "./exos/exo10";
import { factorial } from "./exos/exo11";
import { isPalindrome } from "./exos/exo12";
import { secondLargest } from "./exos/exo13";
import { fizzBuzz } from "./exos/exo14";
import { removeDuplicate } from "./exos/exo15";
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

//11)
console.log(factorial(5));

//12)
console.log(isPalindrome("kayak"));
console.log(isPalindrome("bonjour"));

//13)
console.log(secondLargest([10, 5, 8, 20]));

//14)
console.log(fizzBuzz(15));

//15)
console.log(removeDuplicate([1, 2, 2, 3, 1]));