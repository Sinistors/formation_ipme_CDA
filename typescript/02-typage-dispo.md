# 📝 TypeScript : Récapitulatif des types et exemples concrets

---

## 1️⃣ Types de base

```ts
// String
let name: string = "Alice";

// Number
let age: number = 25;

// Boolean
let isAdmin: boolean = true;

// Null / Undefined
let empty: null = null;
let notAssigned: undefined;
```

---

## 2️⃣ Tableaux et tuples

```ts
// Tableau de nombres
let scores: number[] = [10, 20, 30];

// Tableau de strings
let names: string[] = ["Alice", "Bob"];

// Tuple (nombre + string)
let user: [number, string] = [1, "Alice"];
```

---

## 3️⃣ Objets

```ts
// Typage d'objet simple
let person: { name: string; age: number; isAdmin?: boolean } = {
  name: "Bob",
  age: 30
};

// Objet avec fonction
let user2: {
  name: string;
  greet: (msg: string) => void;
} = {
  name: "Alice",
  greet: (msg) => console.log(`${msg}, je suis ${user2.name}`)
};
```

---

## 4️⃣ Fonctions

```ts
// Fonction avec type retour
function add(a: number, b: number): number {
  return a + b;
}

// Fonction qui ne retourne rien (void)
function logMessage(msg: string): void {
  console.log(msg);
}

// Fonction avec paramètres optionnels
function greet(name: string, age?: number): string {
  return age ? `Salut ${name}, ${age} ans` : `Salut ${name}`;
}
```

---

## 5️⃣ Any, Unknown, Never

```ts
// Any (pas de contrôle)
let something: any = 10;
something = "hello";

// Unknown (type inconnu, plus sûr)
let value: unknown = 42;
if (typeof value === "number") {
  let double = value * 2;
}

// Never (fonction qui ne termine jamais)
function throwError(msg: string): never {
  throw new Error(msg);
}
```

---

## 6️⃣ Enum

```ts
enum Color {
  Red,
  Green,
  Blue
}

let c: Color = Color.Green;
```

---

## 7️⃣ Typage des éléments HTML

```ts
// Récupérer un élément input
const input: HTMLInputElement = document.querySelector("#myInput");
if (input) {
  input.value = "Hello";
}

// Récupérer un bouton
const button: HTMLButtonElement = document.querySelector("#myButton");
button?.addEventListener("click", () => {
  console.log("Button clicked!");
});
```

---

## 8️⃣ Typage des événements

```ts
const form: HTMLFormElement = document.querySelector("#myForm");

form?.addEventListener("submit", (e: Event) => {
  e.preventDefault();
  console.log("Form submitted");
});

// Exemple avec clavier
document.addEventListener("keydown", (e: KeyboardEvent) => {
  if (e.key === "Enter") console.log("Enter pressed");
});
```

---

## 🔹 Résumé

- TS ajoute des types aux variables, fonctions, objets, tableaux.  
- Typage strict = meilleure sécurité et auto-complétion dans l’IDE.  
- Toujours typer les **éléments HTML** pour éviter les erreurs null/undefined.  
- Union, alias et enums permettent de structurer le code proprement.  
- `any` = pas sûr, `unknown` = plus sûr, `never` = jamais de retour.

