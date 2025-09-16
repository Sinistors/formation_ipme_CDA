# TP : Simulation de Ferme Automatique

## Contexte
Vous allez créer une **simulation automatique de ferme**. La ferme contient différents animaux et plantes qui produisent des ressources à chaque tour. Chaque tour représente le passage d’un **tour complet pour tous les objets** de la ferme.

L’objectif est de **réunir un nombre total de ressources avant la fin de la saison**. La simulation est entièrement automatique : aucun choix utilisateur pendant les tours.

---

## Exercice 1 : Création des classes de base

1. Créez une **classe parent** `ProduitFerme` avec les attributs suivants :
    - `nom` : le nom de l’animal ou de la plante
    - `energie` : représente la capacité actuelle de produire
    - `energieMax` : représente la capacité de produire (valeur initiale explicite)
    - `energieUsed` : représente l'énergie utilisé par tour
    - `productionParTour` : quantité produite à chaque tour (valeur initiale explicite)

2. Ajoutez les **méthodes** suivantes à la classe parent :
    - `produire()` : produit la ressource si l’énergie > 0, et diminue l’énergie du montant correspondant à la production
    - `seReposer()` : un objet ne peut se reposer **que si son énergie est <= 0**
        - L’énergie se régénère d’une **valeur aléatoire entre la moitié de son énergie max et son énergie max**
        - Affichez en console que l’objet se repose et sa nouvelle énergie

---

## Exercice 2 : Création des classes filles avec valeurs explicites

Créez plusieurs **classes filles** qui étendent `ProduitFerme`. Chaque classe doit avoir des valeurs fixes pour `energie` et `productionParTour` :

| Objet     | Énergie max | Production par tour | Énergie consommée par production |
|-----------|------------|-------------------|--------------------------------|
| Vache     | 100        | 5 (lait)          | 10                             |
| Poulet    | 80         | 3 (œufs)          | 5                              |
| Mouton    | 90         | 4 (laine)         | 8                              |
| Blé       | 70         | 6 (graines)       | 7                              |
| Pommier   | 60         | 4 (fruits)        | 6                              |

- La méthode `produire()` doit diminuer l’énergie et retourner la quantité produite.
- La méthode `seReposer()` doit régénérer l’énergie comme indiqué, uniquement si énergie <= 0.

---

## Exercice 3 : Création de la classe Ferme

1. Créez une **classe `Ferme`** qui gérera tout le déroulement de la simulation.
2. Ajoutez les méthodes suivantes :
    - `generateObjects()` : génère **10 objets aléatoires** parmi les classes disponibles et les stocke dans un tableau de la ferme
    - `startProduction()` : fait tourner la **simulation automatique** pendant un nombre fixe de tours
        - Chaque tour fait passer **tous les objets** en production ou repos selon leur énergie
        - Pour chaque objet, affichez en console :
            - S’il produit : combien il a produit
            - S’il se repose : sa nouvelle énergie
        - Affichez le **total de production du tour** et le **score cumulé**

---

## Exercice 4 : Simulation complète

1. Définissez un **objectif total** de production (ex : 50 unités).
2. La simulation doit tourner pendant un nombre de tours maximum (ex : 10 tours).
3. À chaque tour :
    - Chaque objet produit ou se repose selon son énergie
    - Affichez pour chaque action ce qui s’est passé (production ou repos)
    - Affichez le **total de production du tour** et le **score cumulé**
4. À la fin de la simulation :
    - Si le score total ≥ objectif → affichez `"Succès ! Vous avez atteint {score_total} unités."`
    - Sinon → affichez `"Échec. Vous avez atteint seulement {score_total} unités."`

---

### Exemple de console attendue pour un tour

```bash
--- Tour 1 ---
Vache1 produit 5 unités (énergie restante 90)
Poulet1 produit 3 unités (énergie restante 75)
Mouton1 produit 4 unités (énergie restante 82)
Blé1 produit 6 unités (énergie restante 64)
Pommier1 produit 4 unités (énergie restante 56)
Production ce tour : 22, Score cumulé : 22

--- Tour x ---
Pommier1 se repose et gagne xx énergie


--- Dernier tour ---
xxxx
xxxx
xxxx
"Succès ! Vous avez atteint {score_total} unités."
```


---

## Exercice 5 : Extensions possibles (facultatif)

- Modifier la production par tour pour la rendre aléatoire, mais rester dans les valeurs explicites

---

### Notes pédagogiques

- Les étudiants travaillent sur **héritage** : toutes les classes filles héritent de `ProduitFerme`
- La simulation est **automatique**, les actions des objets sont visibles en console
