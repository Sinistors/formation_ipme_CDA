import { BankAccount } from "./class/BankAccount";
import { Calculator } from "./class/Calculator";
import { Character } from "./class/Character";
import { Game } from "./class/Game";
import { GameLibrary } from "./class/GameLibrary";
import { Humain } from "./class/Humain";
import { Roue } from "./class/Roue";
import { Voiture } from "./class/Voiture";

let object1: Humain = new Humain();
let object2: Humain = new Humain('Jules');
let object3: Humain = new Humain('Philippe', 34);

console.log(object1);
console.log(object2);
console.log(object3);

object1.name = "Antoine";
object1.age = 15;
object1.addHobby("tennis");
object1.addHobby("lecture");

console.log(object1);

let merlin = new Character("Merlin");
let gandalf = new Character("Gandalf");

let turn = 0;
while (gandalf.hp > 0 && merlin.hp > 0) 
{
    if (turn % 2) 
    {
        merlin.attack(gandalf);    
    }
    else
    {
        gandalf.attack(merlin);
    }
    turn++;
}

console.log(Calculator.add(10,5));
console.log(Calculator.substract(10,5));
console.log(Calculator.multiply(10,5));
console.log(Calculator.divide(10,5));

let account = new BankAccount("Jules");

account.deposit(200);
account.displayBalance();
account.withdraw(500);
account.withdraw(100);
account.displayBalance();

let roues: Array<Roue> = [];
roues[0] = new Roue("Avant droit");
roues[1] = new Roue("Avant gauche");
roues[2] = new Roue("Arrière droit");
roues[3] = new Roue("Arrière gauche");

let peugeot207 = new Voiture("Citadine", "207", "Peugeot", roues, 150000);
peugeot207.addPassenger("Stéphanie");
peugeot207.addPassenger("Laurine");
peugeot207.addPassenger("Antoine");
peugeot207.addPassenger("Germain");
peugeot207.addPassenger("Philippe");
peugeot207.getGlobalStatus();
peugeot207.removePassenger("Philippe");
peugeot207.getGlobalStatus();

let lib1:GameLibrary = new GameLibrary("lib1");
let lib2:GameLibrary = new GameLibrary("lib2");

lib1.addGame(new Game("Minecraft"));
lib1.addGame(new Game("The last of us"));
lib2.addGame(new Game("The witcher"));
lib2.addGame(new Game("Breath of the wild"));
lib2.removeGame("Breath of the wild");

lib1.display();
lib2.display();

lib1.giveGame("The last of us", lib2);

lib1.display();
lib2.display();

import { City } from "./class/City";
import { Departement } from "./class/Departement";
import { Region } from "./class/Region";

// --- ALLIER (03) ---
const moulins = new City("Moulins", "03190", ["03000"], 18699);
const vichy = new City("Vichy", "03310", ["03200"], 24800);
const montlucon = new City("Montluçon", "03185", ["03100"], 34700);

const allier = new Departement("Allier", "03", [moulins, vichy, montlucon]);

// --- CANTAL (15) ---
const aurillac = new City("Aurillac", "15014", ["15000"], 25700);
const saintFlour = new City("Saint-Flour", "15187", ["15100"], 6500);
const mauriac = new City("Mauriac", "15120", ["15200"], 3600);

const cantal = new Departement("Cantal", "15", [aurillac, saintFlour, mauriac]);

// --- HAUTE-LOIRE (43) ---
const puyEnVelay = new City("Le Puy-en-Velay", "43157", ["43000"], 18750);
const yssingeaux = new City("Yssingeaux", "43268", ["43200"], 7400);
const brioude = new City("Brioude", "43040", ["43100"], 6700);

const hauteLoire = new Departement("Haute-Loire", "43", [puyEnVelay, yssingeaux, brioude]);

// --- PUY-DE-DOME (63) ---
const clermontFerrand = new City("Clermont-Ferrand", "63113", ["63000", "63100"], 147865);
const issoire = new City("Issoire", "63178", ["63500"], 15000);
const riom = new City("Riom", "63300", ["63200"], 19500);

const puyDeDome = new Departement("Puy-de-Dôme", "63", [clermontFerrand, issoire, riom]);

// --- REGION AUVERGNE ---
const auvergne = new Region("Auvergne", "83", [allier, cantal, hauteLoire, puyDeDome]);

console.log(auvergne);

import { Plant } from "./class/Plant";
import { Caracteristic } from "./class/Caracteristic";
import { Soin } from "./class/Soin";
import { Drink } from "./class/Drink";
import { DrinkOrder } from "./class/DrinkOrder";
import { Guerrier } from "./class/heros/Guerrier";
import { Healer } from "./class/heros/Healer";
import { Farm } from "./class/farm/Farm";

// Caractéristiques
const parfumée = new Caracteristic("Parfumée");
const persistante = new Caracteristic("Feuillage persistant");
const épineuse = new Caracteristic("Épineuse");

// Soins
const arrosageRegulier = new Soin("Arrosage régulier, 2 fois par semaine");
const taillePrintemps = new Soin("Taille au printemps");
const engrais = new Soin("Engrais organique en automne");

// Création d’une plante : une rose
const rose = new Plant(
    "Rose",
    "fleur",
    120,
    [parfumée, épineuse],
    [arrosageRegulier]
);

console.log("Avant ajout d’un soin :", rose);

// Ajout d’un soin supplémentaire
rose.addSoin(taillePrintemps);

console.log("Après ajout d’un soin :", rose);

// Autre plante : un olivier
const olivier = new Plant(
    "Olivier",
    "arbre",
    300,
    [persistante],
    [engrais]
);

console.log("Olivier :", olivier);

const coffee = new Drink("Café", 2);
const the = new Drink("Thé", 1.50);
const hotChocolate = new Drink("Chocolat chaud", 2.50);
const juice = new Drink("Jus", 3);

const order = new DrinkOrder();
order.addDrink(coffee);
order.addDrink(the);
order.addDrink(hotChocolate);
order.addDrink(juice);

console.log("Total avec réduction : " + order.totalPrice() + "€");


let guerrier1: Guerrier = new Guerrier("Jules"); 
console.log(guerrier1);
let healer1: Healer = new Healer("Fabien"); 
console.log(healer1);
healer1.sayHello();   
guerrier1.attack(healer1);

let farm:Farm = new Farm(5);
farm.startProduction(30, 600);