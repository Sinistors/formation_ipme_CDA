# MySQL Avancé : Les Transactions

## Introduction

Une **transaction** est un ensemble d'opérations SQL qui sont exécutées comme une seule unité. Elles permettent de garantir la **cohérence et l'intégrité des données**, même en cas d'erreur ou d'interruption.

### Caractéristiques principales (ACID)

- **Atomicité** : toutes les opérations d'une transaction réussissent ou aucune n'est appliquée.
- **Cohérence** : les données restent toujours dans un état valide.
- **Isolation** : chaque transaction est indépendante des autres.
- **Durabilité** : une fois validée, une transaction reste appliquée même en cas de panne.

### Utilité des transactions

- **Protection contre les erreurs** : annuler une série d'opérations si une erreur se produit.
- **Opérations complexes** : exécuter plusieurs modifications simultanément sans compromettre la base.
- **Synchronisation** : éviter les conflits lors de modifications concurrentes.

------------------------------------------------------------------------

## 1. Syntaxe générale

```sql
START TRANSACTION;  -- ou BEGIN
-- Instructions SQL
COMMIT;             -- Valide la transaction
ROLLBACK;           -- Annule la transaction
```

### Explications

- `START TRANSACTION` ou `BEGIN` : démarre une transaction.
- `COMMIT` : valide toutes les modifications effectuées.
- `ROLLBACK` : annule toutes les modifications effectuées depuis le début de la transaction.
- `SAVEPOINT nom_savepoint` : crée un point de sauvegarde intermédiaire.
- `ROLLBACK TO SAVEPOINT nom_savepoint` : revient à ce point de sauvegarde.
- `RELEASE SAVEPOINT nom_savepoint` : supprime le savepoint.

------------------------------------------------------------------------

## 2. Exemple simple : Transaction avec COMMIT et ROLLBACK

```sql
START TRANSACTION;

INSERT INTO accounts(name, balance) VALUES ('Alice', 1000);
INSERT INTO accounts(name, balance) VALUES ('Bob', 500);

-- Vérification simple
SELECT * FROM accounts;

-- Si tout est correct
COMMIT;

-- Sinon
-- ROLLBACK;
```

------------------------------------------------------------------------

## 3. Exemple avec ROLLBACK en cas d'erreur

```sql
START TRANSACTION;

INSERT INTO accounts(name, balance) VALUES ('Charlie', 200);

-- Simuler une erreur (balance négative non autorisée)
IF (200 < 0) THEN
    ROLLBACK;
ELSE
    COMMIT;
END IF;
```

------------------------------------------------------------------------

## 4. Exemple simple avec plusieurs INSERTs et rollback en cas d'erreur

```sql
START TRANSACTION;

-- Tentative d'insertion de plusieurs comptes
INSERT INTO accounts(name, balance) VALUES ('David', 300);
INSERT INTO accounts(name, balance) VALUES ('Eve', -50); -- Erreur possible si balance < 0 non autorisée
INSERT INTO accounts(name, balance) VALUES ('Frank', 400);

-- Vérification si un INSERT a échoué
-- Si l'un des INSERTs échoue, annuler toute la transaction
-- ROLLBACK sera déclenché automatiquement si une erreur SQL se produit
COMMIT;
```

> ⚠️ Important : l'idée est que si l'un des INSERTs échoue, aucune des modifications précédentes n'est appliquée grâce à la transaction.

------------------------------------------------------------------------

## 5. Transactions avec SELECT et UPDATE complexes

```sql
START TRANSACTION;

-- Transférer 100 de Alice vers Bob
UPDATE accounts SET balance = balance - 100 WHERE name = 'Alice';
UPDATE accounts SET balance = balance + 100 WHERE name = 'Bob';

-- Vérification des soldes
SELECT name, balance FROM accounts WHERE name IN ('Alice', 'Bob');

-- Validation
COMMIT;
```

> ⚠️ Important : en cas d'erreur (ex. solde insuffisant), utiliser `ROLLBACK` pour annuler.

------------------------------------------------------------------------

## 6. Savepoints : Points de contrôle intermédiaires

```sql
START TRANSACTION;

INSERT INTO accounts(name, balance) VALUES ('David', 300);
SAVEPOINT sp1;

UPDATE accounts SET balance = balance + 50 WHERE name = 'David';

-- Si erreur sur l'update
ROLLBACK TO SAVEPOINT sp1;

-- Les modifications avant sp1 restent
COMMIT;
```

### Explications

- `SAVEPOINT` permet de revenir uniquement à une partie de la transaction.
- Utile pour gérer des transactions complexes avec plusieurs étapes.

------------------------------------------------------------------------

## 7. Bonnes pratiques

- Toujours utiliser les transactions pour les modifications critiques.
- Ne pas garder une transaction ouverte trop longtemps (verrouillage de table).
- Utiliser `SAVEPOINT` pour les transactions complexes.
- Toujours prévoir un `ROLLBACK` en cas d'erreur.
- Vérifier l'impact sur les performances.

------------------------------------------------------------------------

## 8. Tableau récapitulatif

  -----------------------------------------------------------------------
Commande                 Usage
  ------------------------- -------------------------------------------
START TRANSACTION / BEGIN  Démarre une transaction
COMMIT                    Valide toutes les modifications
ROLLBACK                  Annule toutes les modifications
SAVEPOINT nom             Crée un point de sauvegarde intermédiaire
ROLLBACK TO SAVEPOINT nom Revient au savepoint, annule les modifications après
RELEASE SAVEPOINT nom     Supprime le savepoint
  -----------------------------------------------------------------------

------------------------------------------------------------------------

## Conclusion

Les **transactions** permettent de garantir la cohérence et la sécurité des données dans MySQL.
Elles sont essentielles pour :

- gérer les erreurs,
- effectuer des opérations complexes,
- maintenir l'intégrité des données.

⚠️ Attention : les transactions ouvertes trop longtemps peuvent provoquer des verrouillages et affecter les performances.

