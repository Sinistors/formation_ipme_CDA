# Créer son premier composant Vue.js (Options API)

## 📦 1. Qu’est-ce qu’un composant ?

Un **composant** est un bloc réutilisable d’interface utilisateur.  
Il contient généralement trois parties :

1. **template** → la partie HTML (ce qui s’affiche).
2. **script** → la logique (variables, méthodes, etc.).
3. **style** → le CSS appliqué au composant.

Chaque composant est écrit dans un fichier avec l’extension `.vue`.

---

## 📝 2. Exemple simple de composant

Créons un fichier `MonPremierComposant.vue` dans le dossier `src/components/`.

```vue
<template>
  <div class="carte">
    <h2>{{ titre }}</h2>
    <p>{{ description }}</p>
  </div>
</template>

<script>
export default {
  name: 'MonPremierComposant',
  data() {
    return {
      titre: 'Bonjour Vue !',
      description: 'Ceci est mon premier composant avec l’Options API.'
    }
  }
}
</script>

<style>
.carte {
  border: 1px solid #ccc;
  padding: 10px;
  border-radius: 8px;
  background: #f9f9f9;
}
</style>
```

### Explications :

- `name`: nom interne du composant (bonne pratique pour le debug).
- `data()`: fonction qui retourne un objet contenant les **variables**.
- `{{ variable }}` : syntaxe appelée **interpolation**, qui permet d’afficher une variable dans le HTML.
- `style`: permet d’écrire du CSS propre au composant.

---

## 🔗 3. Utiliser le composant dans App.vue

Pour afficher le composant dans l’application :

```vue
<template>
  <div id="app">
    <h1>Application principale</h1>
    <MonPremierComposant />
  </div>
</template>

<script>
import MonPremierComposant from './components/MonPremierComposant.vue'

export default {
  name: 'App',
  components: {
    MonPremierComposant
  }
}
</script>

<style>
#app {
  font-family: Arial, sans-serif;
  text-align: center;
}
</style>
```

---

## 🚀 4. Résultat attendu

En lançant l’application avec :

```bash
npm run dev
```

On obtient une page affichant :

```
Application principale
Bonjour Vue !
Ceci est mon premier composant avec l’Options API.
```

---

## 🎯 5. Points clés à retenir

- Un composant Vue est séparé en **template**, **script** et **style**.
- Les **données** sont définies dans `data()` et affichées avec `{{ }}`.
- On doit **importer et déclarer** le composant avant de l’utiliser dans un autre composant (comme `App.vue`).  
