# 📝 TypeScript : Les classes

## 1️⃣ Qu’est-ce qu’une classe ?

- Une **classe** est un **plan pour créer des objets** avec des propriétés et des méthodes.
- Elle permet de regrouper **données (propriétés)** et **comportements (méthodes)**.
- Une classe peut être **instanciée** avec le mot clé `new`.
- On peut utiliser **constructeurs**, **modificateurs d’accès** (`public`, `private`, `protected`) et **héritage**.

---

## 2️⃣ Exemple simple

```ts
class Person {
  private _name: string;
  private _age: number;

  constructor(name: string, age: number) {
    this._name = name;
    this._age = age;
  }
  
  

  greet(): void {
    console.log(`Bonjour, je m'appelle ${this._name} et j'ai ${this._age} ans.`);
  }
}

// Utilisation
const alice = new Person("Alice", 25);
alice.greet();
```

🔹 Explications :

- `constructor` initialise les propriétés lors de la création de l’objet.
- `greet()` est une méthode qui peut accéder aux propriétés de la classe.

---

## 3️⃣ Exemple avec modificateurs d’accès (nouveau contexte)

```ts
class LibraryAccount {
  public username: string;         // accessible partout
  private booksBorrowed: number;   // accessible uniquement dans la classe
  protected memberId: string;      // accessible dans la classe et classes dérivées

  constructor(username: string, memberId: string) {
    this.username = username;
    this.booksBorrowed = 0;
    this.memberId = memberId;
  }

  borrowBook(): void {
    this.booksBorrowed++;
    console.log(`${this.username} a emprunté un livre. Total empruntés : ${this.booksBorrowed}`);
  }

  returnBook(): void {
    if (this.booksBorrowed > 0) {
      this.booksBorrowed--;
      console.log(`${this.username} a rendu un livre. Total empruntés : ${this.booksBorrowed}`);
    } else {
      console.log(`${this.username} n’a aucun livre à rendre.`);
    }
  }

  getBorrowedCount(): number {
    return this.booksBorrowed;
  }
}

// Utilisation
const user = new LibraryAccount("Alice", "LIB123");
user.borrowBook();             // Alice a emprunté un livre. Total empruntés : 1
user.borrowBook();             // Alice a emprunté un livre. Total empruntés : 2
user.returnBook();             // Alice a rendu un livre. Total empruntés : 1
console.log(user.getBorrowedCount()); // 1

// console.log(user.booksBorrowed); // ❌ Erreur : private
// console.log(user.memberId);      // ❌ Erreur : protected
```

🔹 Points clés :

- `public username` : accessible partout
- `private booksBorrowed` : seul le code dans la classe peut modifier/consulter
- `protected memberId` : accessible uniquement dans la classe et ses enfants
- Les méthodes `borrowBook()`, `returnBook()` et `getBorrowedCount()` permettent de manipuler le nombre de livres empruntés en respectant les règles d’accès

> Ce contexte sur les comptes de bibliothèque est complètement différent de l’exemple bancaire précédent, idéal pour un exercice où les étudiants devront créer leur propre logique.


---

## 4️⃣ Exemple complexe : héritage et interfaces

```ts
interface IDrivable {
  start(): void;
  stop(): void;
}

class Vehicle implements IDrivable {
  constructor(public brand: string, public model: string) {}

  start(): void {
    console.log(`${this.brand} ${this.model} démarre.`);
  }

  stop(): void {
    console.log(`${this.brand} ${this.model} s'arrête.`);
  }
}

class Car extends Vehicle {
  constructor(brand: string, model: string, public doors: number) {
    super(brand, model);
  }

  honk(): void {
    console.log("🚗 Beep beep !");
  }
}

// Utilisation
const car = new Car("Toyota", "Corolla", 4);
car.start(); // Toyota Corolla démarre.
car.honk();  // 🚗 Beep beep !
car.stop();  // Toyota Corolla s'arrête.
```

🔹 Explications :

- `interface IDrivable` définit les méthodes que doit implémenter la classe.
- `Vehicle` implémente `IDrivable`.
- `Car` hérite de `Vehicle` et ajoute des propriétés/méthodes supplémentaires.
- `super(...)` appelle le constructeur de la classe parente.

---

## 5️⃣ Points importants

1. Une **classe peut avoir un constructeur** pour initialiser ses propriétés.
2. **Méthodes** peuvent accéder aux propriétés via `this`.
3. **Modificateurs d’accès** :
    - `public` : accessible partout
    - `private` : accessible seulement dans la classe
    - `protected` : accessible dans la classe et ses enfants
4. **Héritage** : `extends` pour créer des classes dérivées
5. **Interfaces** : une classe peut implémenter une interface pour garantir certaines méthodes.
6. Les classes sont **typiquement utilisées pour modéliser des objets réels ou des concepts métier**.

---

### ✅ Résumé

- Les classes regroupent **données + comportements**
- Elles peuvent être **simples** ou **complexes** avec héritage, modificateurs et interfaces
- Utiliser des classes permet un code **structuré, maintenable et réutilisable**
