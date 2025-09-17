# 📝 Exercice guidé – Créer une Todo List (Options API)

## 1. Création du composant
- Créez un nouveau composant appelé TodoList.vue dans le dossier components.
- Importez-le dans App.vue et affichez-le.

---

## 2. Objectif de base : ajouter une tâche
- Vous aurez besoin :
    - d’une variable texte pour stocker le contenu de l’input (la tâche en cours de saisie)
    - d’un tableau de tâches pour stocker toutes les tâches.

Chaque tâche doit être représentée par un objet avec deux propriétés :
- text → le contenu de la tâche
- done → un boolean (false = à faire, true = terminée)

Exemple de tableau de Todo :
taches: [
{ text: "Acheter du pain", done: false },
{ text: "Réviser Vue.js", done: true }
]

---

## 3. Objectif intermédiaire : afficher les tâches
- Affichez la liste des tâches à l’écran.
- Utilisez une boucle (v-for) pour parcourir le tableau et montrer chaque tâche.
- Montrez visuellement si une tâche est terminée (par exemple : barrée, différente couleur…)

Conseil : vous pouvez utiliser une classe dynamique en fonction de la valeur done.

---

## 4. Objectif avancé : supprimer une tâche
- Ajoutez un bouton "Supprimer" à côté de chaque tâche.
- Quand on clique dessus, la tâche doit être retirée du tableau.

---

## 5. Objectif bonus : marquer une tâche comme terminée ou à faire
- Ajoutez une case à cocher ou un bouton "Terminer / Reprendre".
- Quand on clique, la valeur du boolean done doit basculer (true ↔ false).

---

## 6. Résumé des variables nécessaires
- Une variable pour l’input (texte saisi)
- Un tableau de tâches contenant des objets { text: string, done: boolean }

---

## 7 . Quand tout fini
- renseignez vous sur les transitions avec vue : https://vuejs.org/guide/built-ins/transition-group.html#transitiongroup
- Ajouter une transition quand une todo est ajouté ou supprimé

À la fin, votre Todo List doit permettre de :
- Ajouter une tâche
- Afficher toutes les tâches avec leur statut
- Supprimer une tâche
- Marquer une tâche comme terminée ou à faire
