######  
Nous sommes en **TypeScript**. Essayez au maximum de **typer vos variables et vos fonctions** !  
Chaque exercice devra être créé **avec une classe**, et le `console.log` devra se faire **dans les méthodes de la classe**.  

---

## Exercice 1 : Découpage géographique

Représentez un découpage géographique avec les classes suivantes :

- **Région** :
    - nom (`string`)
    - code (`string`)
    - plusieurs départements

- **Département** :
    - nom (`string`)
    - code (`string`)
    - plusieurs villes

- **Ville** :
    - nom (`string`)
    - codeInsee (`string`)
    - plusieurs codes postaux (`string[]`)
    - nombre d’habitants (`number`)

> Une fois votre classe `Région` créée et les autres classes incorporées, testez votre code avec des exemples concrets et affichez-les via `console.log`.


---

## Exercice 2 : Collection de plantes

Modélisez une **collection de plantes dans un jardin**.

- **Plante** :
    - nom (`string`)
    - type (`string`, par exemple "fleur", "arbre", "arbuste")
    - taille (`number`, en cm)
    - plusieurs **caractéristiques** (classe `Caracteristique` avec uniquement un `nom` `string`)
    - plusieurs **soins** (classe `Soin` avec uniquement un `description` `string`)

**À faire :**
1. Créez la classe `Plante` avec les propriétés ci-dessus.
2. Implémentez une méthode `addSoin(soin: Soin)` pour ajouter un soin à la plante.
3. Faites un `console.log` de votre plante avant et après l’ajout d’un soin, pour vérifier que le soin a bien été ajouté.

---

## Exercice 3 : Un café !
### Consignes générales
- Essayez au maximum de **typer vos variables et fonctions**.
- Chaque action doit se faire via **les méthodes des classes** et affichée avec `console.log`.


### Travail demandé

#### Partie 1 – Classes

1. **Classe `Boisson`** :  
   - Propriétés : `name: string`, `price: number`  
   - Méthode `describe()` → affiche : `"Boisson ajoutée : Café – 2€"`  

2. **Classe `Commande`** :  
   - Propriété : `drinks: Boisson[]`  
   - Méthodes :  
     - `addDrink(drink: Boisson)` → ajoute la boisson et affiche via `console.log`  
     - `totalPrice()` → calcule le total, applique **10% de réduction si plus de 3 boissons** et affiche le total  

---

#### Partie 2 – Simulation automatique

1. Créez plusieurs instances de `Boisson` (ex : Café 2€, Thé 1.5€, Chocolat 2.5€, Jus 3€).  
2. Créez une instance de `Commande`.  
3. Ajoutez automatiquement 4-5 boissons à la commande en appelant `addDrink`.  
4. Affichez à chaque ajout la boisson ajoutée et, à la fin, le total (avec éventuelle réduction).  

---

#### Objectif concret

- **Mission** : Simuler automatiquement une commande complète pour un client et afficher tous les détails dans la console.  
- **Bonus** : calcul automatique de la réduction si >3 boissons.  

---

#### Exemple attendu (console.log)

```
Boisson ajoutée : Café – 2€
Boisson ajoutée : Thé – 1.5€
Boisson ajoutée : Chocolat – 2.5€
Boisson ajoutée : Jus – 3€
Total avec réduction : 7.65€
```