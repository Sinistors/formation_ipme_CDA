######  
Nous sommes en **TypeScript**. Essayez au maximum de **typer vos variables et vos fonctions** !  
Chaque exercice devra être créé **avec une classe**, et le `console.log` devra se faire **dans les méthodes de la classe**.  
Les classes seront ensuite **importées dans le fichier voulus**.

---

## Exercice 1 : Calculatrice

Créer une classe `Calculator` pour effectuer des opérations entre **deux nombres**.

- Cette classe **n’a pas d’attribut ni de constructeur**, uniquement des méthodes.
- Méthodes à créer :
    - `add` → addition
    - `subtract` → soustraction
    - `multiply` → multiplication
    - `divide` → division

**Exemples d’utilisation** :
```ts
const calculatrice = new Calculator();
calculatrice.add(5, 9);        // console.log doit afficher 14
calculatrice.multiply(2, 2);   // console.log doit afficher 4
```

---

## Exercice 2 : Compte bancaire

Créer une classe représentant un **compte bancaire** avec les attributs suivants :
- `balance: number` → le solde du compte
- `name: string` → le nom du titulaire
- `active: boolean` → indique si le compte est actif

**Règles :**
- Lors de la création, le compte a un **solde de 0** et est **actif**.
- Les méthodes à créer :
    - `deposit` → ajouter de l’argent au compte
    - `withdraw` → retirer de l’argent du compte (uniquement si le solde est suffisant)
    - `displayBalance()` → console.log `"Le compte de Jules a actuellement 50 euros"`

> Les opérations ne peuvent être effectuées que si le compte est **actif**.  
> Testez vos méthodes avec un compte actif et un compte inactif.

---

## Exercice 3 : Voiture

Créer une classe pour modéliser une **voiture** avec les attributs **privés** :
- `type` → type de voiture (4x4, citadine, etc.)
- `modele` → modèle (208, 147, etc.)
- `marque` → marque (Peugeot, Renault, etc.)
- `mileage` → nombre de kilomètres
- `passengers` → liste des passagers

**À faire :**
1. Créer le **constructeur** pour initialiser la voiture.
2. Créer les **getter et setter** pour accéder et modifier chaque attribut.
3. Créer une méthode `getGlobalStatus()` qui affiche :
   ```
   La voiture Citadine, Peugeot 208, de 50000 km a comme passagers : Stéphanie, Laurine, Antoine, Germain.
   ```  
4. Créer une méthode `addPassenger(name: string)` pour ajouter un passager, puis rappeler `getGlobalStatus()`.
5. Créer une méthode `removePassenger(name: string)` pour retirer un passager, puis rappeler `getGlobalStatus()`.

---

## Exercice 4 : Bibliothèque de jeux vidéos

Pour cet exercice, il n’y a **pas d’indications sur les propriétés ni les méthodes**.  
Vous devez créer une **classe représentant une bibliothèque** qui :

- Permet de **stocker des jeux vidéo**
- Permet **d’ajouter ou de supprimer** des jeux
- Permet **de transférer un jeu vers une autre bibliothèque**

**Exemple d’utilisation :**
```ts
bibliotheque1.giveGame("Mario Odyssey", bibliotheque2);
```
> Dans cet exemple, `bibliotheque1` donne le jeu qu’elle possède (`Mario Odyssey`) à `bibliotheque2`.

L’objectif est de réfléchir à **l’organisation des données et des méthodes** pour gérer une collection de jeux vidéo entre plusieurs bibliothèques.
