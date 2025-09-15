//import "./first-type";
//import "./steamish";
import "./cours_class";

// import "./exo-jules";
// import { correctAnswers, options, questions } from "./question";
// import { checkAnswer, updateScore } from "./utils";

// let score:number = 0;
// const quizzElement:Element | null = document.querySelector("#quiz");
// const scoreElement:Element | null = document.querySelector("#score");

// function quizzLoop(currentQuestion:number = 0) 
// {
//     if (quizzElement != null) 
//     {
//         quizzElement.innerHTML = "";
//         if (currentQuestion < correctAnswers.length) 
//         {
//             const questionElement: HTMLHeadingElement = document.createElement("h2");
//             questionElement.textContent = questions[currentQuestion];
//             quizzElement.append(questionElement);    

//             for (let option of options[currentQuestion])
//             {
//                 const optionElement: HTMLButtonElement = document.createElement("button");
//                 optionElement.textContent = option.toString();
//                 quizzElement.append(optionElement);
                
//                 optionElement.addEventListener("click", () =>
//                 {
//                     if (checkAnswer(option, correctAnswers[currentQuestion])) 
//                     {
//                         score++;
//                         if (scoreElement != null) 
//                         {
//                             updateScore(score, scoreElement);
//                         }
//                     }
//                     quizzLoop(currentQuestion + 1);
//                 })
//             }
//         }
//         else
//         {
//             const endElement: Element | null = document.createElement("h2");
//             endElement.textContent = "Vous avez terminé le quizz !";
//             quizzElement.append(endElement);
//             const endScoreElement: Element | null = document.createElement("h3");
//             endScoreElement.textContent = "Votre score final : " + score + "/ 5";
//             quizzElement.append(endScoreElement);
//             if (scoreElement != null) 
//             {
//                 scoreElement.innerHTML = "";
//             }

//             const replayElement: HTMLButtonElement = document.createElement("button");
//             replayElement.textContent = "Rejouer";
//             quizzElement.append(replayElement);

//             replayElement.addEventListener("click", () =>
//             {
//                 score = 0;
//                 quizzLoop(0);
//             });
//         } 
//     }
// }

// quizzLoop();


