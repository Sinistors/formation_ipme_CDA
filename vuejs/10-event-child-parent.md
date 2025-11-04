# Communication Parent ↔ Enfant en Vue 3 – Événements

## 1. Principe

En Vue 3, **les composants enfants peuvent émettre des événements** vers leurs parents pour signaler des actions ou transmettre des données.

* Le parent **écoute l’événement** avec `v-on` ou `@`.
* L’enfant utilise la fonction `$emit` pour **émettre l’événement**.

C’est la façon standard de **remonter des informations d’un composant enfant vers le parent**.

---

## 2. Syntaxe de base

### **Composant enfant (`Child.vue`)**

```vue
<template>
  <button @click="sendMessage">Cliquer</button>
</template>

<script lang="ts">
export default {
  name: 'Child',
  methods: {
    sendMessage() {
      // émet l'événement 'monEvenement' vers le parent
      this.$emit('monEvenement', 'Bonjour parent !')
    }
  }
}
</script>
```

* `$emit('nomEvenement', payload)` :

    * `nomEvenement` : nom de l’événement.
    * `payload` (optionnel) : donnée envoyée au parent.

---

### **Composant parent (`Parent.vue`)**

```vue
<template>
  <div>
    <Child @monEvenement="handleChildEvent" />
    <p>Message reçu : {{ message }}</p>
  </div>
</template>

<script lang="ts">
import Child from './Child.vue'

export default {
  components: { Child },
  data() {
    return {
      message: ''
    }
  },
  methods: {
    handleChildEvent(payload: string) {
      this.message = payload
    }
  }
}
</script>
```

* Le parent écoute l’événement avec `@monEvenement="handleChildEvent"`.
* La fonction `handleChildEvent` reçoit le **payload** envoyé par l’enfant.

---

## 3. Émettre plusieurs données

On peut envoyer **plusieurs valeurs** dans `$emit` :

```ts
this.$emit('monEvenement', valeur1, valeur2)
```

Et le parent peut les récupérer en **plusieurs paramètres** :

```ts
handleChildEvent(val1, val2) {
  console.log(val1, val2)
}
```

---

## 4. Nommer ses événements correctement

* Utiliser la **notation kebab-case** dans le template du parent :

```vue
<Child @message-envoye="handler" />
```

* Utiliser **camelCase** dans l’enfant avec `$emit` :

```ts
this.$emit('messageEnvoye', 'texte')
```

> Vue convertira automatiquement camelCase → kebab-case dans le template.

---

## 5. Exemple pratique : compteur depuis l’enfant

### **Child.vue**

```vue
<template>
  <button @click="increment">+1</button>
</template>

<script lang="ts">
export default {
  emits: ['increment'],
  methods: {
    increment() {
      this.$emit('increment', 1)
    }
  }
}
</script>
```

### **Parent.vue**

```vue
<template>
  <div>
    <Child @increment="updateCount" />
    <p>Compteur : {{ count }}</p>
  </div>
</template>

<script lang="ts">
import Child from './Child.vue'

export default {
  components: { Child },
  data() {
    return {
      count: 0
    }
  },
  methods: {
    updateCount(value: number) {
      this.count += value
    }
  }
}
</script>
```

---

## 6. Bonnes pratiques

* Déclarer les événements émis dans la section `emits` de l’enfant (optionnel mais recommandé) :

```ts
export default {
  emits: ['increment', 'monEvenement']
}
```

* Toujours documenter le **payload attendu** pour éviter les erreurs.
* Préférer des noms clairs et cohérents pour les événements.

---

### Bonus pratique (optionnel)

Créer un petit exercice où l’enfant émet un événement avec plusieurs types de données, et le parent les affiche dynamiquement dans le DOM.
