# Exercices Vue 3 Option API – v-for, v-if, :class et interactions
Tous les exercices sont à faire dans une nouvelle "page", qu'on ajoute au routeur.



## Exercice 1 – Galerie d’images filtrable

**Jeu de données :**

```js
data() {
  return {
    images: [
      { url: 'https://picsum.photos/200/150?random=1', categorie: 'nature' },
      { url: 'https://picsum.photos/200/150?random=2', categorie: 'animaux' },
      { url: 'https://picsum.photos/200/150?random=3', categorie: 'ville' },
      { url: 'https://picsum.photos/200/150?random=4', categorie: 'nature' },
      { url: 'https://picsum.photos/200/150?random=5', categorie: 'animaux' }
    ],
    categorieSelectionnee: 'nature'
  }
}
```

**Consignes :**

* Affiche toutes les images correspondant à la catégorie sélectionnée (`v-if`).
* Ajoute un `<select>` pour changer de catégorie (`nature`, `animaux`, `ville`).
* Ajoute un champ : active (boolean) dans le tableau des images, si il est true affichez une bordure verte autour des images
* Ajoute un évenement au clic sur les images qui permet de passer ce champ active de true vers false ou inversement

---

## Exercice 2 – Menu interactif

**Jeu de données :**

```js
data() {
  return {
    plats: [
      { nom: 'Pizza Margherita', prix: 8, disponible: true },
      { nom: 'Burger', prix: 6, disponible: false },
      { nom: 'Salade César', prix: 7, disponible: true },
      { nom: 'Pâtes Carbonara', prix: 9, disponible: true },
      { nom: 'Sushi', prix: 12, disponible: false }
    ],
    afficherDisponibles: false
  }
}
```

**Consignes :**

* Affiche tous les plats avec leur prix.
* Si un plat n’est pas disponible, applique une classe `grise` pour le rendre visuellement grisé.
* Ajoute un bouton “Afficher seulement disponibles” pour filtrer les plats avec `v-if`.
* Bonus : change la couleur du prix selon le prix (`<8€` vert, `≥8€` rouge).

---

## Exercice 3 – Questions à choix multiples

**Jeu de données :**

```js
data() {
  return {
    questions: [
      {
        question: 'Quelle est la capitale de la France ?',
        options: ['Paris', 'Lyon', 'Marseille', 'Bordeaux'],
        bonneReponse: 'Paris',
        reponseChoisie: null
      },
      {
        question: 'Quelle planète est la plus proche du Soleil ?',
        options: ['Terre', 'Mercure', 'Mars', 'Venus'],
        bonneReponse: 'Mercure',
        reponseChoisie: null
      },
      {
        question: 'Combien de continents y a-t-il sur Terre ?',
        options: ['5', '6', '7', '8'],
        bonneReponse: '7',
        reponseChoisie: null
      }
    ]
  }
}
```

**Consignes :**

* Affiche toutes les questions et leurs options (`v-for`).
* Lorsqu’un utilisateur clique sur une option :
    * Si la réponse est correcte, affiche “Correct !” sous la question (`v-if`).
    * Sinon, affiche “Essayez encore”.
* Colorie la bonne réponse en vert après le clic (`:class`).

---

## Exercice 4 – Tableau météo interactif

**Jeu de données :**

```ts
data() {
  return {
    villes: [
      { nom: 'Paris', temperature: 18, condition: 'soleil' },
      { nom: 'New York', temperature: 22, condition: 'pluie' },
      { nom: 'Tokyo', temperature: 25, condition: 'nuageux' },
      { nom: 'Sydney', temperature: 30, condition: 'soleil' },
      { nom: 'Moscou', temperature: 10, condition: 'neige' }
    ],
    filtreCondition: ''
  }
}
```

**Consignes :**

1. Affiche toutes les villes avec leur température et condition (`v-for`).
2. Ajoute un `<select>` pour **filtrer par condition** (`soleil`, `pluie`, `nuageux`, `neige`) avec `v-if`.
3. **Colorie les cartes** selon la condition :

  * Soleil → jaune
  * Pluie → bleu
  * Nuageux → gris
  * Neige → blanc/bleu clair
4. **Interactions au clic** :

  * Cliquer sur une ville **change sa météo aléatoirement**.
  * Le style se met à jour instantanément.
5. Bonus : affiche la **ville la plus chaude** et la **ville la plus froide** dynamiquement.
