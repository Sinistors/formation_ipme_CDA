# Vue.js (Options API) – v-if, v-for et classes dynamiques

## 🔎 1. `v-if` – Affichage conditionnel

`v-if` permet d’afficher ou non un élément en fonction d’une condition.

### Exemple :

```vue
<template>
  <div>
    <p v-if="connecte">Bienvenue, utilisateur !</p>
    <p v-else>Veuillez vous connecter.</p>
  </div>
</template>

<script>
export default {
  name: 'ConditionExample',
  data() {
    return {
      connecte: false
    }
  }
}
</script>
```

👉 Si `connecte = true`, le premier paragraphe s’affiche.  
👉 Sinon, c’est le deuxième.

---

## 🔁 2. `v-for` – Boucles

`v-for` permet de répéter un élément pour chaque élément d’un tableau.

### Exemple :

```vue
<template>
  <ul>
    <li v-for="(jeu, index) in jeux" :key="index">
      {{ index + 1 }} - {{ jeu }}
    </li>
  </ul>
</template>

<script>
export default {
  name: 'BoucleExample',
  data() {
    return {
      jeux: ['Zelda', 'Mario', 'Metroid']
    }
  }
}
</script>
```

👉 Ici, on affiche une liste à partir du tableau `jeux`.  
👉 L’attribut `:key` est requis pour aider Vue à suivre chaque élément.

---

## 🎨 3. Classes dynamiques

On peut modifier les **classes CSS** en fonction de variables avec `:class`.

### Exemple :

```vue
<template>
  <div>
    <p :class="{ actif: estActif, erreur: aErreur }">
      Texte avec classes dynamiques
    </p>
    <button @click="estActif = !estActif">Basculer Actif</button>
    <button @click="aErreur = !aErreur">Basculer Erreur</button>
  </div>
</template>

<script>
export default {
  name: 'ClasseExample',
  data() {
    return {
      estActif: false,
      aErreur: false
    }
  }
}
</script>

<style>
.actif {
  color: green;
  font-weight: bold;
}
.erreur {
  color: red;
}
</style>
```

👉 Ici :
- `estActif = true` applique la classe `actif`.
- `aErreur = true` applique la classe `erreur`.
- Les deux peuvent être actives en même temps.

---

## 📌 4. Points à retenir

- **`v-if / v-else`** : affiche ou non du contenu selon une condition.
- **`v-for`** : répète un élément pour chaque valeur d’un tableau.
- **`:class`** : applique une ou plusieurs classes CSS dynamiquement selon l’état des variables.
