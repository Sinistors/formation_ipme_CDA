# MySQL Avancé : Exercices sur la gestion des utilisateurs et privilèges

Base de données utilisée : super_movie

------------------------------------------------------------------------

## 🔹 Exercice 1 : Création d'utilisateurs

Crée les utilisateurs suivants : 1. `lecteur_films` accessible
uniquement depuis `localhost`, mot de passe `read123`. 2.
`editeur_casting` accessible depuis n'importe quelle machine (`'%'`),
mot de passe `edit456`.

👉 Vérifie leur existence avec :

``` sql
SELECT User, Host FROM mysql.user;
```

------------------------------------------------------------------------

## 🔹 Exercice 2 : Attribution de privilèges simples

1.  Donne à `lecteur_films` uniquement le droit de lecture (`SELECT`)
    sur **toutes les tables** de la base.
2.  Donne à `editeur_casting` les droits `INSERT` et `DELETE` uniquement
    sur la table `movie_actor`.

👉 Vérifie avec (ou connecte toi avec les utilisateurs puis test) :

``` sql
SHOW GRANTS FOR 'lecteur_films'@'localhost';
```

------------------------------------------------------------------------

## 🔹 Exercice 3 : Gestion des privilèges avancés

1.  Crée un utilisateur `admin_movies` accessible depuis `localhost`,
    mot de passe `admin789`.
2.  Donne-lui **tous les privilèges** sur la base, **avec l'option
    `WITH GRANT OPTION`**.
3.  Connecte-toi en tant que `admin_movies` et accorde à `lecteur_films`
    l'accès lecture uniquement sur la table `actor`.

👉 Vérifie que `lecteur_films` peut maintenant lire `actor`.

------------------------------------------------------------------------

## 🔹 Exercice 4 : Révocation de privilèges

1.  Retire à `editeur_casting` le droit `DELETE` sur `movie_actor`.
2.  Retire à `lecteur_films` l'accès lecture sur la table `director`. (attention c'est impossible de supprimer les droits un par un de ```` .* ````, il faut supprimer entièrement le ```` .* ```` et ajouté une par une les tables dispos)

👉 Vérifie avec :

``` sql
SHOW GRANTS FOR 'editeur_casting'@'%';
```

------------------------------------------------------------------------

## 🔹 Exercice 5 : Nettoyage et bonnes pratiques

1.  Supprime l'utilisateur `editeur_casting`.
2.  Supprime l'utilisateur `admin_movies`.
3.  Liste les utilisateurs restants.

👉 Tu dois normalement voir `root` et `lecteur_films`.
