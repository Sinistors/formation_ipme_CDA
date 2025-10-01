# MySQL -- Révision des bases : Requêtes et manipulations de données

## Introduction

Avant d'aborder les fonctionnalités avancées de MySQL, il est important
de **maîtriser les requêtes de base**, qui constituent le cœur de la
manipulation de données.

Dans ce cours, nous allons revoir :\
- Les **commandes fondamentales** : `INSERT`, `UPDATE`, `DELETE`,
  `SELECT`.\
- Les **fonctions les plus courantes** dans une requête `SELECT`.\
- Les **jointures** pour combiner des données de plusieurs tables.

Ces opérations sont les **fondations indispensables** avant de passer à
l'administration ou à des requêtes complexes.

------------------------------------------------------------------------

## 1. `SELECT` -- Lire des données

La commande `SELECT` permet de **consulter** les données d'une table.\
C'est la requête la plus utilisée.

### 1.1 Sélectionner toutes les colonnes

``` sql
SELECT * FROM clients;
```

👉 Affiche **toutes les colonnes** et **toutes les lignes** de la table
`clients`.

### 1.2 Sélectionner des colonnes spécifiques

``` sql
SELECT nom, prenom FROM clients;
```

👉 Affiche uniquement les colonnes `nom` et `prenom`.

### 1.3 Filtrer les résultats avec `WHERE`

``` sql
SELECT * FROM clients
WHERE ville = 'Paris';
```

👉 Récupère uniquement les clients dont la ville est **Paris**.

### 1.4 Trier les résultats avec `ORDER BY`

``` sql
SELECT nom, prenom, ville
FROM clients
ORDER BY nom ASC;
```

👉 Trie les résultats par ordre alphabétique croissant (`ASC`), ou
décroissant avec `DESC`.

### 1.5 Limiter le nombre de résultats avec `LIMIT`

``` sql
SELECT * FROM clients
LIMIT 5;
```

👉 Affiche seulement les 5 premières lignes.

------------------------------------------------------------------------

## 2. Fonctions utiles avec `SELECT`

MySQL propose de nombreuses **fonctions intégrées** pour manipuler les
données.

  ------------------------------------------------------------------------------------------------------------------
Fonction                    Exemple                                                          Utilité
  --------------------------- ---------------------------------------------------------------- ---------------------
`COUNT()`                   `SELECT COUNT(*) FROM commandes;`                                Compter le nombre de
lignes

`AVG()`                     `SELECT AVG(prix) FROM produits;`                                Calculer une moyenne

`SUM()`                     `SELECT SUM(total) FROM commandes;`                              Faire une somme

`MAX()`                     `SELECT MAX(salaire) FROM employes;`                             Trouver la valeur la
plus élevée

`MIN()`                     `SELECT MIN(age) FROM clients;`                                  Trouver la plus
petite valeur

`CONCAT()`                  `SELECT CONCAT(prenom, ' ', nom) AS nom_complet FROM clients;`   Concaténer plusieurs
champs
  ------------------------------------------------------------------------------------------------------------------

### Grouper les données avec `GROUP BY`

``` sql
SELECT ville, COUNT(*) AS nb_clients
FROM clients
GROUP BY ville;
```

👉 Affiche le nombre de clients **par ville**.

### Filtrer un groupe avec `HAVING`

``` sql
SELECT ville, COUNT(*) AS nb_clients
FROM clients
GROUP BY ville
HAVING COUNT(*) > 10;
```

👉 N'affiche que les villes ayant **plus de 10 clients**.

------------------------------------------------------------------------

## 3. `INSERT` -- Ajouter des données

### 3.1 Insérer une ligne complète

``` sql
INSERT INTO clients (nom, prenom, ville)
VALUES ('Dupont', 'Marie', 'Lyon');
```

👉 Ajoute un nouveau client dans la table `clients`.

### 3.2 Insérer plusieurs lignes à la fois

``` sql
INSERT INTO clients (nom, prenom, ville)
VALUES
('Durand', 'Paul', 'Paris'),
('Martin', 'Sophie', 'Lille');
```

👉 Ajoute deux nouveaux enregistrements d'un coup.

------------------------------------------------------------------------

## 4. `UPDATE` -- Modifier des données existantes

``` sql
UPDATE clients
SET ville = 'Marseille'
WHERE nom = 'Dupont';
```

👉 Change la ville de **Dupont** en **Marseille**.\
⚠️ **Toujours mettre une clause `WHERE`** pour éviter de tout modifier
par erreur.

------------------------------------------------------------------------

## 5. `DELETE` -- Supprimer des données

``` sql
DELETE FROM clients
WHERE id = 5;
```

👉 Supprime le client dont l'`id` est 5.\
⚠️ Comme pour `UPDATE`, **ne jamais oublier `WHERE`** si vous ne voulez
pas effacer toute la table !

------------------------------------------------------------------------

## 6. Jointures -- Combiner les données de plusieurs tables

Les **jointures** permettent d'interroger **plusieurs tables liées entre
elles**.

### Exemple de tables

-   `clients(id, nom, prenom)`
-   `commandes(id, client_id, total)`

### 6.1 `INNER JOIN` -- Récupérer uniquement les données qui correspondent

``` sql
SELECT clients.nom, clients.prenom, commandes.total
FROM clients
INNER JOIN commandes
ON clients.id = commandes.client_id;
```

👉 Affiche les clients **ayant passé au moins une commande**, avec le
montant de celle-ci.

### 6.2 `LEFT JOIN` -- Inclure tous les enregistrements de la table de gauche

``` sql
SELECT clients.nom, commandes.total
FROM clients
LEFT JOIN commandes
ON clients.id = commandes.client_id;
```

👉 Affiche **tous les clients**, même ceux **sans commande** (les
valeurs manquantes seront `NULL`).

------------------------------------------------------------------------

## 7. Bonnes pratiques

-   **Toujours tester ses requêtes `UPDATE` et `DELETE` avec un
    `SELECT`** avant exécution.\

-   **Utiliser des alias** pour simplifier la lecture :

    ``` sql
    SELECT c.nom, c.prenom, cmd.total
    FROM clients AS c
    INNER JOIN commandes AS cmd
    ON c.id = cmd.client_id;
    ```

-   **Protéger les données** avec des sauvegardes régulières avant des
    opérations massives.

------------------------------------------------------------------------

## 8. Schéma récapitulatif

  -----------------------------------------------------------------------------------------
Action                            Commande
  --------------------------------- -------------------------------------------------------
Lire des données                  `SELECT colonnes FROM table WHERE condition;`

Ajouter une ligne                 `INSERT INTO table (col1, col2) VALUES (val1, val2);`

Modifier une ligne                `UPDATE table SET col1 = val1 WHERE condition;`

Supprimer une ligne               `DELETE FROM table WHERE condition;`

Compter des lignes                `SELECT COUNT(*) FROM table;`

Moyenne d'une colonne             `SELECT AVG(col) FROM table;`

Jointure simple                   `SELECT ... FROM t1 INNER JOIN t2 ON t1.id = t2.fk;`
-----------------------------------------------------------------------------------------

------------------------------------------------------------------------

## Conclusion

Ces commandes et fonctions constituent le **socle essentiel** de la
manipulation de données en MySQL.\
Avant d'aller vers des notions avancées (gestion des utilisateurs,
optimisation, transactions), il faut **maîtriser parfaitement** ces
requêtes de base.\
Elles sont au cœur de la plupart des applications et scripts de bases de
données.
