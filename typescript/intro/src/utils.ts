export function addDots(sentence: string): string
{
    return sentence + "...";
}

export function checkAnswer(selected: string | number, correct: string | number): boolean
{
    return selected === correct;
}

export function updateScore(score: number, scoreEl: Element): void
{
    scoreEl.textContent = "Score : " + score + " / 5";
    return;
}