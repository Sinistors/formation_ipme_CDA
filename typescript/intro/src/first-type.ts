// import IGenre from "./interface/steamish/IGenre";

let myString: string = "allo";
console.log(myString);

let myNb: number = 5;

let myBool: boolean = true;

let myNull: null = null;

let myPotentialNull: null | string = null;

let myGeneric: any = "ui"; //à éviter

let arrayString:string[] = ["ui", "non", "peut-etre"];

let arrayString2:Array<string> = ["ui", "non", "peut-etre"];
let arrayString3:Array<string | number> = ["ui", "non", "peut-etre", 2];

let arrayOfArray:Array<Array< string | number | boolean>> = 
[
    [ 'jules', 35, true],
    [ 'nico', 24, false]
];

let miniExo: Array<string | number | Array<Array<boolean | number>>> = 
[
    "Bonjour !", 52, 
    [
        [
            true
        ],
        [
            658
        ]
    ]
]

function sayHello(): void
{
    console.log("Hello");
}

sayHello();

function returnString():string
{
    return "ma belle string";
}

console.log(returnString());

function addition(a: number, b: number): number
{
    return a + b;
}
console.log(addition(1,2));

// fetch('https://steam-ish.test-02.drosalys.net/api/genre')
//     .then((response: Response): Promise<any> => {
//         return response.json()
//     }).then((data:Array<IGenre>):void => {

//     });