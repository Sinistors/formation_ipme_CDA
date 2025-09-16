import { Fruit } from "./class/Fruit";

const addBtn: HTMLButtonElement | null = document.querySelector("#addBtn");
const fruitSelect: HTMLSelectElement | null = document.querySelector("#fruitSelect");
const fruitList: HTMLUListElement | null = document.querySelector("#fruitList");
const counterElement: HTMLParagraphElement | null = document.querySelector("#counter");
let counter = 0;
const fruits: Array<Fruit> = [];

if (addBtn && fruitSelect && fruitList) 
{
    addBtn.addEventListener("click", () =>
    {
        addFruit(fruitSelect.value, fruitList);
    })
}

function addFruit(value:string, list: HTMLUListElement) : void
{
    if (!contains(fruits, value)) 
    {
        const fruit: Fruit = new Fruit(value);
        fruits.push(fruit);
        console.log(fruit.describe());

        const newLi: HTMLLIElement = document.createElement("li");
        newLi.textContent = fruit.name;

        const newRemoveFruitBtn = document.createElement("button");
        newRemoveFruitBtn.textContent = "X";
        newRemoveFruitBtn.addEventListener("click", () =>
        {
            fruits.splice(fruits.indexOf(fruit), 1);
            newLi.remove();

            updateCounter(-1);
        });

        newLi.append(newRemoveFruitBtn);
        list.append(newLi);

        updateCounter(1);
    }
}

function updateCounter(modifyValue: number): void
{
    counter += modifyValue;
    if (counterElement) 
    {
        counterElement.textContent = "Total : " + counter + " fruit(s)";
    }
}

function contains(fruitArray: Array<Fruit>, fruitStr: string): boolean
{
    for(const fruit of fruitArray)
    {
        if (fruit.name.toLowerCase() == fruitStr.toLowerCase()) 
        {
            return true;    
        }
    }
    return false;
}