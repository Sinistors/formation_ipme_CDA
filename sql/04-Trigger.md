# MySQL Avancé : Les Triggers

## Introduction

Un **trigger** (déclencheur) est un objet MySQL qui exécute
automatiquement une instruction SQL ou un bloc d'instructions
**lorsqu'un événement particulier se produit sur une table**.

👉 Ils permettent d'automatiser certaines actions sans intervention
directe de l'application.

### Utilité des triggers

-   **Audit / Historique** : enregistrer automatiquement les
    modifications faites sur une table (log des mises à jour,
    suppressions, etc.).\
-   **Contrôle d'intégrité** : empêcher ou modifier certaines données
    avant qu'elles soient insérées ou mises à jour.\
-   **Automatisation** : exécuter automatiquement une action liée à une
    modification de données.

------------------------------------------------------------------------

## 1. Syntaxe générale

``` sql
CREATE TRIGGER nom_trigger
    moment evenement ON nom_table
    FOR EACH ROW
BEGIN
    -- Instructions exécutées
END;
```

### Explications

-   `nom_trigger` : nom du trigger.\
-   `moment` : peut être `BEFORE` ou `AFTER`.
    -   `BEFORE` = avant l'opération.\
    -   `AFTER` = après l'opération.\
-   `evenement` : type d'action qui déclenche le trigger : `INSERT`,
    `UPDATE`, `DELETE`.\
-   `FOR EACH ROW` : le trigger s'exécute **pour chaque ligne affectée**
    par la requête.\
-   `OLD` : référence à l'ancienne valeur (avant modification).\
-   `NEW` : référence à la nouvelle valeur (après modification).

------------------------------------------------------------------------

## 2. Exemple : Trigger d'historisation (audit)

``` sql
CREATE TRIGGER before_accounts_update
    BEFORE UPDATE ON accounts
    FOR EACH ROW
BEGIN
    INSERT INTO account_history
    SET 
        name = OLD.name,
        account_id = NEW.id,
        changeAt = NOW();
END;
```

Exécution pour déclencher le trigger :

``` sql
UPDATE accounts SET name = 'jules' WHERE id = 1;
```

------------------------------------------------------------------------

## 3. Différents types de triggers

### 3.1 Trigger `BEFORE INSERT`

``` sql
CREATE TRIGGER check_age_before_insert
    BEFORE INSERT ON users
    FOR EACH ROW
BEGIN
    IF NEW.age < 18 THEN
        SET NEW.age = 18; -- impose un âge minimum
    END IF;
END;
```

------------------------------------------------------------------------

### 3.2 Trigger `AFTER INSERT`

``` sql
CREATE TRIGGER log_new_user
    AFTER INSERT ON users
    FOR EACH ROW
BEGIN
    INSERT INTO logs(action, date_log)
    VALUES ('Nouvel utilisateur ajouté', NOW());
END;
```

------------------------------------------------------------------------

### 3.3 Trigger `BEFORE DELETE`

``` sql
CREATE TRIGGER prevent_admin_delete
    BEFORE DELETE ON users
    FOR EACH ROW
BEGIN
    IF OLD.role = 'admin' THEN
        SIGNAL SQLSTATE '45000' SET MESSAGE_TEXT = 'Impossible de supprimer un administrateur';
    END IF;
END;
```

------------------------------------------------------------------------

## 4. Supprimer un trigger

``` sql
DROP TRIGGER IF EXISTS nom_trigger;
```

------------------------------------------------------------------------

## 5. Bonnes pratiques

-   Nommer les triggers clairement (`before_accounts_update`,
    `after_users_insert_log`).\
-   Éviter la logique trop complexe (difficile à déboguer).\
-   Bien distinguer `BEFORE` et `AFTER`.\
-   Prévoir des tables d'historique si nécessaire.\
-   Vérifier l'impact sur les performances (les triggers s'exécutent
    automatiquement sur toutes les lignes affectées).

------------------------------------------------------------------------

## 6. Tableau récapitulatif

  -----------------------------------------------------------------------
  Moment              Événement             Usage courant
  ------------------- --------------------- -----------------------------
  BEFORE INSERT       Avant insertion       Vérifier / modifier les
                                            données avant ajout

  AFTER INSERT        Après insertion       Créer un log, déclencher une
                                            action associée

  BEFORE UPDATE       Avant modification    Vérifier / forcer des règles
                                            métiers

  AFTER UPDATE        Après modification    Historiser les anciennes
                                            valeurs

  BEFORE DELETE       Avant suppression     Bloquer certaines
                                            suppressions

  AFTER DELETE        Après suppression     Conserver une trace dans une
                                            table d'archive
  -----------------------------------------------------------------------

------------------------------------------------------------------------

## Conclusion

Les **triggers** permettent d'automatiser des actions côté base de
données.\
Ils sont particulièrement utiles pour :\
- la sécurité (empêcher certaines modifications),\
- l'audit (garder un historique),\
- et l'automatisation (logs, actions en cascade).

⚠️ Attention : trop de triggers compliquent la maintenance et peuvent
ralentir les performances.
