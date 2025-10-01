# MySQL Avancé : Les procédures stockées

## Introduction

Une **procédure stockée** est un ensemble d'instructions SQL enregistré
dans la base de données.\
Elle permet de regrouper plusieurs commandes et de les exécuter
facilement en une seule fois, avec éventuellement des **paramètres
d'entrée et de sortie**.

👉 Avantages :\
- Centraliser la logique côté base de données.\
- Réduire les échanges entre l'application et le serveur MySQL.\
- Simplifier les opérations complexes (un simple `CALL` suffit à lancer
la procédure).

------------------------------------------------------------------------

## 1. Syntaxe générale

``` sql
DELIMITER //

CREATE PROCEDURE nom_procedure (paramètres)
BEGIN
    -- Instructions SQL
END //

DELIMITER ;
```

### Explications

-   `DELIMITER //` : change le séparateur de commandes par défaut (`;`)
    pour éviter les conflits à l'intérieur de la procédure.\
-   `CREATE PROCEDURE` : mot-clé pour créer une nouvelle procédure.\
-   `(paramètres)` : liste des paramètres éventuels (voir plus bas).\
-   `BEGIN ... END` : bloc contenant les instructions SQL.\
-   `DELIMITER ;` : on rétablit le séparateur par défaut à la fin.

------------------------------------------------------------------------

## 2. Exemple simple : procédure sans paramètres

``` sql
DELIMITER //

CREATE PROCEDURE GetAllProducts()
BEGIN
    SELECT * FROM products;
END //

DELIMITER ;
```

Pour exécuter la procédure :

``` sql
CALL GetAllProducts();
```

------------------------------------------------------------------------

## 3. Procédure avec paramètres d'entrée (`IN`)

``` sql
DELIMITER //

CREATE PROCEDURE GetProductsByCategory(IN cat_id INT)
BEGIN
    SELECT * FROM products WHERE category_id = cat_id;
END //

DELIMITER ;
```

Exécution :

``` sql
CALL GetProductsByCategory(3);
```

------------------------------------------------------------------------

## 4. Procédure avec paramètres de sortie (`OUT`)

``` sql
DELIMITER //

CREATE PROCEDURE get_name_account_by_account_id(IN account_id INT, OUT nom VARCHAR(255))
BEGIN
    SELECT name INTO nom
    FROM accounts
    WHERE id = account_id;
END //

DELIMITER ;
```

Appel :

``` sql
CALL get_name_account_by_account_id(1, @name);
SELECT @name;
```

------------------------------------------------------------------------

## 5. Procédure avec paramètres `INOUT`

``` sql
DELIMITER //

CREATE PROCEDURE IncrementValue(INOUT val INT)
BEGIN
    SET val = val + 1;
END //

DELIMITER ;
```

Appel :

``` sql
SET @x = 5;
CALL IncrementValue(@x);
SELECT @x; -- Résultat : 6
```

------------------------------------------------------------------------

## 6. Variables locales

``` sql
DELIMITER //

CREATE PROCEDURE ExempleVariables()
BEGIN
    DECLARE total INT DEFAULT 0;

    SELECT COUNT(*) INTO total FROM products;
    SELECT total AS nb_produits;
END //

DELIMITER ;
```

------------------------------------------------------------------------

## 7. Modifier et supprimer une procédure

Supprimer une procédure :

``` sql
DROP PROCEDURE IF EXISTS GetAllProducts;
```

👉 Pour modifier une procédure, il faut la supprimer puis la recréer.

------------------------------------------------------------------------

## 8. Bonnes pratiques

-   Utiliser `DROP PROCEDURE IF EXISTS` avant de recréer une procédure.\
-   Donner des noms explicites (`GetAllProducts`,
    `UpdateClientBalance`).\
-   Limiter la complexité (une procédure = une tâche claire).\
-   Bien gérer `IN`, `OUT`, `INOUT`.\
-   Tester systématiquement après création avec `CALL`.

------------------------------------------------------------------------

## 9. Tableau récapitulatif

  ------------------------------------------------------------------------------------------------------
  Type de paramètre                       Rôle         Exemple
  --------------------------------------- ------------ -------------------------------------------------
  `IN`                                    Entrée       `CALL GetProductsByCategory(3)`
                                          uniquement   

  `OUT`                                   Sortie       `CALL get_name_account_by_account_id(1, @name)`
                                          uniquement   

  `INOUT`                                 Entrée et    `CALL IncrementValue(@x)`
                                          sortie       
  ------------------------------------------------------------------------------------------------------

------------------------------------------------------------------------

## Conclusion

Les **procédures stockées** permettent d'automatiser des tâches,
d'améliorer la sécurité et d'optimiser les performances.\
Elles sont essentielles pour structurer proprement la logique côté base
de données.
