# 🎓 Examen TypeScript – Durée : 2h

## Consignes générales
- Vous travaillez uniquement sur la partie **TypeScript**.
- Le fichier HTML est fourni.
- Le typage TypeScript est obligatoire (pas de `any`).
- Vous pouvez utiliser la documentation officielle si besoin.

---

## Fichier HTML fourni (`index.html`)

```html
<!DOCTYPE html>
<html lang="fr">
<head>
  <meta charset="UTF-8">
  <title>Examen TypeScript</title>
</head>
<body>
  <h1>Gestion de sélection</h1>

  <label for="fruitSelect">Choisissez un fruit :</label>
  <select id="fruitSelect" data-fruit-select>
    <option value="Pomme">Pomme</option>
    <option value="Banane">Banane</option>
    <option value="Cerise">Cerise</option>
    <option value="Mangue">Mangue</option>
  </select>

  <button id="addBtn" data-add-btn>Ajouter</button>

  <h2>Liste de fruits choisis :</h2>
  <ul id="fruitList" data-fruit-list></ul>

  <p id="counter" data-counter>Total : 0 fruit(s)</p>

  <script src="bundle.js"></script>
</body>
</html>
```

---

## Travail demandé

### Partie 1 – Manipulation du DOM (8 points)
1. Lorsqu’on clique sur le bouton **Ajouter** :
   - Récupérer la valeur sélectionnée dans le `<select>`.
   - Créer dynamiquement un `<li>` contenant ce fruit.
   - Ajouter ce `<li>` dans la liste (`ul`).

### Partie 2 – Système de compteur (5 points)
1. Mettre en place un **compteur** qui s’incrémente à chaque ajout.
2. Mettre à jour dynamiquement le contenu du `<p id="counter">`.
   - Exemple attendu : `Total : 3 fruit(s)`.

### Partie 3 – Mini classe TypeScript (4 points)
Créer une classe **`Fruit`** avec :
- une propriété `name: string`
- une méthode `describe(): string` qui retourne une phrase du type :
  `"Le fruit choisi est : Pomme."`

⚡ Exercice :
- À chaque ajout dans la liste, créer une instance de `Fruit` avec le nom sélectionné.
- Appeler `describe()` et afficher le résultat dans la console.

---

## Bonus (facultatif, +3 points)
- Empêcher l’ajout de doublons.
- Ajouter un bouton [X] pour supprimer un fruit de la liste et mettre à jour le compteur.

