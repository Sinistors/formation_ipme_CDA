# 📝 Exercice guidé - Infos rapides

### VOIR : rendu.webp pour le résultat demandé

- Composant principal : **CardList**
  - Contient les datas `cards`.
- Boucle sur les datas dans **CardList**
  - Appel du composant enfant : **Card**
- Le composant **Card** a 3 sous-composants :
  - **CardImage**
  - **CardContent**
  - **CardUser**
- Le composant **CardContent** appelle lui-même un sous-composant **CardTag** pour afficher le tag.


### Structure attendu des composants :
```scss
CardList.vue       → Composant parent principal
│
├── Card.vue       → Composant enfant (une carte complète)
│   │
│   ├── CardImage.vue     → Sous-composant (image principale)
│   ├── CardContent.vue   → Sous-composant (titre, description)
│   │     └── CardTag.vue → Sous-composant (affiche le tag)
│   └── CardUser.vue      → Sous-composant (infos utilisateur + date)


```

### Structure attendu des props :
```scss
CardList.vue
│
│--(v-for)---> Card.vue
│                ├── prop: imgPath
│                ├── prop: title
│                ├── prop: tag
│                ├── prop: description
│                ├── prop: user (objet)
│                └── prop: createdAt
│
│-- Card.vue --> CardImage.vue
│                  └── prop: imgPath
│
│-- Card.vue --> CardContent.vue
│                  ├── prop: title
│                  ├── prop: description
│                  └── prop: tag
│
│-- CardContent.vue --> CardTag.vue
│                  └── prop: tag
│
│-- Card.vue --> CardUser.vue
├── prop: avatarPath
├── prop: firstName
├── prop: lastName
└── prop: createdAt


```

