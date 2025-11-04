# Exercice : Reproduire une carte Metacritic avec des composants Vue (Options API)

## Objectif
Vous allez créer une interface qui reproduit deux cartes du site Metacritic.  
Vous avez à disposition une **maquette** (`meta.png`) et un **jeu de données** (dans votre App.vue par exemple) :

````javascript
games: [
    { img: "meta-1.webp", titre: "Hell is Us", tags: ["game"], note: 77, nbCritic: 37 },
    { img: "meta-2.webp", titre: "Lost Soul Aside", tags: ["game", "test"], note: 62, nbCritic: 18 },
]
````


Votre mission est de construire l’interface en composants bien organisés, et de faire circuler les données avec **les props**.

---

## Étapes à suivre

### 1. Créer la structure de composants
Vous allez créer les composants suivants :

- `MetaCriticList`
    - C’est le composant principal qui reçoit le tableau `games` en props et qui affiche la liste de cartes.

- `MetaCriticCard`
    - Représente une carte de jeu unique.
    - Il reçoit en props toutes les informations nécessaires pour ce jeu (titre, image, tags, note, nombre de critiques).

- `MetaCriticCardTop`
    - Partie haute de la carte (image, titre, tags).

- `MetaCriticTag`
    - Petit composant pour afficher un tag unique (par exemple “game” ou “test”).

- `MetaCriticCardBottom`
    - Partie basse de la carte (note, nombre de critiques).

- `MetaCriticNote`
    - Affiche la note, avec éventuellement une couleur différente selon la valeur (exemple : vert si > 70, orange si entre 50 et 70, rouge si < 50).

---

### 2. Organisation des props
Voici un exemple de répartition des props entre vos composants :

- `MetaCriticList`
    - reçoit le tableau `games` depuis App.vue.
    - transmet les données d’un jeu à chaque `MetaCriticCard`.

- `MetaCriticCard`
    - reçoit : `img`, `titre`, `tags`, `note`, `nbCritic`.
    - transmet chaque partie au composant correspondant (top et bottom).

- `MetaCriticCardTop`
    - reçoit : `img`, `titre`, `tags`.
    - transmet chaque `tag` à `MetaCriticTag`.

- `MetaCriticCardBottom`
    - reçoit : `note`, `nbCritic`.
    - transmet `note` à `MetaCriticNote`.

- `MetaCriticTag`
    - reçoit : un `tag`.

- `MetaCriticNote`
    - reçoit : une `note`.

---

### 3. Maquette
- Inspirez-vous du fichier `meta.png` pour la disposition.
- Chaque carte doit ressembler visuellement à la maquette, avec une image en haut, un titre, des tags, et une section basse avec la note et le nombre de critiques.

---

### 4. Conseils
- Pensez à bien définir vos props dans chaque composant.
- Travaillez en priorité la structure et la communication entre composants.
- La partie style (CSS) peut être ajoutée après, mais gardez la structure claire.
- Vérifiez que vos composants sont réutilisables (exemple : `MetaCriticTag` pourrait être utilisé pour n’importe quel type de tag).

---

## Résultat attendu
- Une liste de deux cartes affichées, chacune correspondant aux données fournies dans le tableau `games`.
- Chaque carte est construite grâce aux composants enfants imbriqués, et toutes les données circulent uniquement via **les props**.
