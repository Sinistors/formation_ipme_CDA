// Tableau des questions
export const questions:Array<string> = 
[
  "Combien font 2 + 2 ?",
  "Quelle est la capitale de la France ?",
  "Combien de jours dans une semaine ?",
  "Quel langage est exécuté dans le navigateur ?",
  "Combien de continents y a-t-il sur Terre ?"
];

// Tableau des options (chaque sous-tableau correspond aux réponses possibles)
export const options:Array<Array<number | string>> = 
[
  [3, 4, 5, 6], // pour la question 1
  ["Paris", "Londres", "Rome", "Berlin"], // pour la question 2
  [5, 6, 7, 8], // pour la question 3
  ["JavaScript", "Python", "C++", "Java"], // pour la question 4
  [5, 6, 7] // pour la question 5
];

// Tableau des bonnes réponses (même ordre que les questions)
export const correctAnswers:Array<number | string> = 
[
  4,
  "Paris",
  7,
  "JavaScript",
  7
];