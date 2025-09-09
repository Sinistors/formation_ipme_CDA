# TP – Consommer une API externe (RAWG API)

## Objectif du TP
Vous allez apprendre à :
- Consommer une API externe en TypeScript  
- Gérer un **scroll infini** (comme YouTube ou Netflix)  
- Mettre en place un **champ de recherche avec suggestion et délai de frappe (debounce)**  
- Créer et utiliser des **interfaces TypeScript** pour typer les retours d’API  

---

## Préparation
1. Créez un compte sur [RAWG.io](https://rawg.io/apidocs).  
2. Récupérez votre **clé d’API personnelle**.  
3. Gardez bien cette clé, elle sera utilisée pour tous vos appels.  

---

## Partie 1 – Page principale : liste des jeux
- Vous allez afficher la liste des jeux depuis l’API.  
- Le chargement doit se faire **page par page**.  
- Le principe du scroll infini :  
  - Au départ, on charge la page 1 de l’API.  
  - Quand l’utilisateur descend en bas de la page, on déclenche l’appel à la **page suivante**.  
  - On concatène les résultats au fur et à mesure, comme YouTube qui charge les vidéos en continu.  

### Contraintes
- Utilisez `fetch` ou `axios` avec TypeScript.  
- Tous les résultats doivent être **typés avec des interfaces**.  
  - Exemple : une interface `IGame`, `IGameListResponse`, etc.  
  - Toutes vos interfaces doivent commencer par **I…**.  
- Vous devez gérer le cas où il n’y a plus de résultats à charger.  

---

## Partie 1 bis – Scroll automatique (scroll infini)

### Principe général
Le **scroll infini** est un mécanisme qui permet de charger de nouvelles données quand l’utilisateur arrive en bas de la page.  
Au lieu d’avoir des boutons « page suivante », l’application détecte automatiquement que l’utilisateur scrolle et déclenche l’appel à l’API suivante.  

L’API de RAWG fonctionne par **pagination** :  
- On peut demander la **page 1**, la **page 2**, etc.  
- Chaque page contient un certain nombre de résultats (par défaut 20).  
- Quand on veut plus de jeux, il faut appeler la page suivante (`page=2`, `page=3`, …).  

### Comment détecter que l’utilisateur est en bas de page ?
Il faut comparer :  
- La **position actuelle de scroll** (combien de pixels ont été parcourus depuis le haut de la page).  
- La **hauteur totale visible de la fenêtre** (`window.innerHeight`).  
- La **hauteur totale du document** (`document.documentElement.scrollHeight`).  

👉 Formule typique à comprendre :  
```
(scroll depuis le haut + hauteur visible) >= hauteur totale du document
```

- `window.scrollY` : le nombre de pixels déjà parcourus en vertical.  
- `window.innerHeight` : la hauteur de la fenêtre du navigateur (partie visible).  
- `document.documentElement.scrollHeight` : la hauteur totale de la page avec tout son contenu.  

Quand cette condition est vraie → l’utilisateur est arrivé tout en bas → on peut lancer l’appel API à la **page suivante**.  

### Exemple de séquence
1. Au chargement de la page, vous demandez les **20 premiers jeux** (`page=1`).  
2. L’utilisateur scrolle.  
3. Quand il arrive tout en bas → vous appelez l’API avec `page=2`.  
4. Vous **ajoutez les nouveaux jeux** à la liste déjà affichée.  
5. On recommence à l’infini tant qu’il reste des pages disponibles.  

### Points techniques à rechercher
- `window.innerHeight` → hauteur de la fenêtre visible.  
- `window.scrollY` (ou `document.documentElement.scrollTop`) → position actuelle du scroll.  
- `document.documentElement.scrollHeight` → hauteur totale du document.  
- Gestion de la **pagination** avec l’API RAWG (`?page=1`, `?page=2`, …).  
- Bien **concaténer** les résultats pour ne pas écraser la liste déjà affichée.  
- Penser à bloquer le scroll si :  
  - L’API ne renvoie plus de résultats.  
  - Ou si un appel est déjà en cours (éviter de spammer).  

---

## Partie 2 – Champ de recherche
- En haut de votre page, vous ajoutez un champ `input`.  
- Lorsqu’un utilisateur tape un mot, vous lancez une recherche sur l’API pour récupérer les jeux correspondants.  
- Le principe du délai (debounce) :  
  - Chaque fois que l’utilisateur tape une lettre, vous **attendez 500ms (0,5s)** avant d’envoyer la requête.  
  - Si une autre lettre est tapée avant la fin du délai, on annule la requête en attente et on recommence.  
  - Cela évite de faire une requête API à chaque touche pressée.  

### Fonctionnalité attendue
- La recherche doit afficher une **liste déroulante de suggestions**.  
- Si on clique sur un jeu dans cette liste, on est redirigé vers la **page détail du jeu** (cf. partie 3).  

---

## Partie 3 – Page détail
- Une page dédiée affiche les informations complètes d’un jeu sélectionné.  
- Les données doivent être typées avec des interfaces (`IGameDetail`, etc.).  
- Vous devez afficher au minimum :  
  - Nom du jeu  
  - Image principale  
  - Description  
  - Date de sortie  
  - Note (rating)  

---

## Rendu attendu
- **Deux pages principales** :
  1. La page d’accueil avec la liste infinie + champ de recherche.  
  2. La page détail d’un jeu.  
- Tout le projet doit être fait en **TypeScript**, avec **interfaces** pour tous les types d’objets.  
- Respectez une architecture claire : composants séparés, interfaces regroupées, etc.  

---

👉 À la fin du TP, vous aurez :  
- Une application TypeScript capable de consommer une API réelle.  
- Un scroll infini fonctionnel.  
- Un champ de recherche optimisé avec suggestions.  
- Une navigation vers une page de détail bien typée.  
