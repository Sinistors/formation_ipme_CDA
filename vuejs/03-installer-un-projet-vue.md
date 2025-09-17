# Installation et utilisation de Vue.js (Options API)

## 🛠️ 1. Prérequis

Avant de créer un projet Vue :

1. **Node.js** (>= 18 recommandé)
    - Vérifier avec :
      ```bash
      node -v
      ```
    - Si la commande ne marche pas → télécharger depuis [https://nodejs.org](https://nodejs.org).

---

## 🚀 2. Créer un projet Vue.js

On utilise l’outil officiel : **create-vue**.

1. Dans un terminal, aller dans le dossier voulu :
   ```bash
   cd ~/MesProjets
   ```

2. Lancer la commande pour créer un projet :
   ```bash
   npm create vue@latest
   ```

3. Répondre aux questions :

    - **Project name** : `mon-projet-vue` (ou autre).
    - **Add TypeScript?** → `No`.
    - **Add JSX Support?** → `No`.
    - **Add Vue Router for Single Page Application development?** → selon besoin, sinon `Yes`.
    - **Add Pinia for state management?** → `No`.
    - **Add Vitest for Unit Testing?** → `No`.
    - **Add Cypress for E2E Testing?** → `No`.
    - **Add ESLint for code quality?** → `Yes`.
    - **Add Prettier for code formatting?** → `Yes` (optionnel).

4. Entrer dans le projet :
   ```bash
   cd mon-projet-vue
   ```

5. Installer les dépendances :
   ```bash
   npm install
   ```

---

## ▶️ 3. Lancer le projet

Démarrer le serveur de dev (Vite est déjà configuré) :
```bash
npm run dev
```

→ Le projet est accessible sur [http://localhost:5173](http://localhost:5173).

---

## 📂 4. Structure d’un projet Vue.js (Options API)

```
mon-projet-vue/
 ├─ node_modules/      # dépendances
 ├─ public/            # fichiers statiques
 ├─ src/
 │   ├─ assets/        # images, css globaux
 │   ├─ components/    # composants Vue
 │   ├─ App.vue        # composant racine
 │   ├─ main.js        # point d’entrée
 ├─ index.html         # template HTML
 ├─ package.json       # config npm
```

---

## ✍️ 5. Utiliser l’Options API
👉 Ici, on utilise **Options API**.

### Exemple de component `App.vue` :
```vue
<template>
  <div id="app">
    <h1>{{ message }}</h1>
    <HelloWorld />
  </div>
</template>

<script>
import HelloWorld from './components/HelloWorld.vue'

export default {
  name: 'App',
  components: { HelloWorld },
  data() {
    return {
      message: 'Bonjour Vue avec Options API 🚀'
    }
  }
}
</script>

<style>
#app {
  font-family: Arial, sans-serif;
}
</style>
```

### Exemple `components/HelloWorld.vue` :
```vue
<template>
  <div>
    <p>Je suis un composant enfant.</p>
  </div>
</template>

<script>
export default {
  name: 'HelloWorld',
  data() {
    return {
    
    }
  },
}
</script>
```

---

## ⚡ 6. Workflow résumé

1. Vérifier Node.js
2. Créer un projet avec `npm create vue@latest`
3. Accepter TypeScript et Router (au début)
4. Lancer `npm run dev`
5. Écrire les composants en **Options API**
