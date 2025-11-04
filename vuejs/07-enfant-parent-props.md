# Vue.js – Composants parent / enfant et utilisation des props (Options API)

## 1. Introduction

Dans Vue.js, une application est composée de composants.
Un composant peut être utilisé à l'intérieur d'un autre composant :

- Le composant qui contient un autre composant est appelé le parent.
- Le composant qui est inclus est appelé l’enfant.

Cette hiérarchie permet de réutiliser du code et de structurer l'application.

---

## 2. Créer un composant enfant

Imaginons que l’on veuille créer un composant enfant Carte.vue qui affiche un titre et une description.

Exemple :

```vue

<template>
    <div class="carte">
        <h2>{{ titre }}</h2>
        <p>{{ description }}</p>
    </div>
</template>

<script>
    export default {
        name: 'Carte',
        props: {
            titre: String,
            description: String
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

Explications :

- props : permet au composant enfant de recevoir des données depuis le parent.
- Ici, titre et description sont des props de type String.
- Les props sont réactives, donc si le parent change leur valeur, l’enfant se met à jour automatiquement.

---

## 3. Utiliser le composant enfant dans un parent

Exemple dans App.vue :

```vue

<template>
    <div id="app">
        <h1>Liste des cartes</h1>
        <Carte
            titre="Vue.js"
            description="Un framework JavaScript progressif pour construire des interfaces."
        />
        <Carte
            titre="Options API"
            description="La syntaxe classique de Vue pour définir les données et méthodes."
        />
    </div>
</template>

<script>
    import Carte from './components/Carte.vue';

    export default {
        name: 'App',
        components: {
            Carte
        }
    }
</script>
```

Explications :

- On importe le composant enfant.
- On le déclare dans la section components du parent.
- On passe les props directement dans l’attribut du composant <Carte titre="..." description="..." />.

---

## 4. Props dynamiques

Exemple :

```vue

<template>
    <div>
        <Carte :titre="monTitre" :description="maDescription"/>
    </div>
</template>

<script>
    import Carte from './components/Carte.vue';

    export default {
        data() {
            return {
                monTitre: "Dynamique",
                maDescription: "Ce texte est passé depuis une variable du parent."
            }
        },
        components: {Carte}
    }
</script>
```

Explications :

- Les props utilisent : devant l’attribut pour dire que c’est dynamique (v-bind).
- Si monTitre ou maDescription change, le composant enfant se met automatiquement à jour.

---

## 5. Validation et valeurs par défaut des props

```vue
props: {
    titre: {
        type: String,
        required: true
    },
    description: {
        type: String,
        default: "Description non fournie"
    }
}
```

- required: true → la prop doit obligatoirement être fournie.
- default → valeur par défaut si la prop n’est pas passée.

---

## 6. Résumé des bonnes pratiques

- Les props sont uniquement pour la communication parent → enfant.
- Ne modifiez jamais directement une prop dans l’enfant ; utilisez une copie locale si nécessaire.
- Déclarez toujours le type des props pour une meilleure lisibilité et débogage.
