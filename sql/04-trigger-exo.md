# MySQL Avancé : Exercices sur les Triggers

Base de données utilisée : super_movie


------------------------------------------------------------------------

## 🔹 Exercice 1 : Trigger BEFORE INSERT

Crée un trigger `before_movie_insert` sur la table `movie` qui empêche
l'insertion d'un film avec une durée négative.\
👉 Si `NEW.duration < 0`, alors force la valeur à `0`.

``` sql
DELIMITER //

CREATE TRIGGER before_insert_on_movie
    BEFORE INSERT ON movie
    FOR EACH ROW
BEGIN
    IF NEW.duration < 0
    SET NEW.duration = 0;
	END IF;    
END
//

DELIMITER ;
```

------------------------------------------------------------------------

## 🔹 Exercice 2 : Trigger AFTER INSERT

Crée un trigger `log_new_actor` qui, après l'ajout d'un nouvel acteur
dans la table `actor`, insère automatiquement une ligne dans une table
`logs` (à créer) avec l'action `"Nouvel acteur ajouté"` et la date
d'ajout.

👉 Vérifie le fonctionnement en insérant un nouvel acteur.

``` sql
DELIMITER //

CREATE TRIGGER after_insert_on_actor
    AFTER INSERT ON actor
    FOR EACH ROW
BEGIN
    INSERT INTO log(message)
    VALUES("Nouveau acteur créé !");
END
//

DELIMITER ;
```

------------------------------------------------------------------------

## 🔹 Exercice 3 : Trigger BEFORE DELETE

Crée un trigger `prevent_director_delete` qui empêche la suppression
d'un réalisateur si celui-ci possède encore au moins un film dans la
table `movie`.\
👉 Utilise `SIGNAL SQLSTATE '45000'` pour bloquer la suppression avec un
message d'erreur.

``` sql
DELIMITER //

CREATE TRIGGER before_delete_on_director
    BEFORE DELETE ON director
    FOR EACH ROW
BEGIN
    IF 
    (SELECT COUNT(*)
     FROM director
     JOIN movie
     ON movie.director_id = director.id
     WHERE director.id = OLD.id) > 0 THEN
     SIGNAL SQLSTATE '45000';
     END IF;
END
//

DELIMITER ;
```

------------------------------------------------------------------------

## 🔹 Exercice 4 : Trigger AFTER UPDATE

Crée un trigger `archive_movie_update` qui, après la mise à jour d'un
film dans la table `movie`, enregistre l'ancienne valeur (`OLD.name`,
`OLD.released_at`) dans une table `movie_history` (à créer) avec la date
de modification.

``` sql
DELIMITER //

CREATE TRIGGER after_update_on_movie
    AFTER UPDATE ON movie
    FOR EACH ROW
BEGIN
    INSERT INTO movie_history(old_name, new_name, modified_at, released_at)
    VALUES(OLD.name, NEW.name, NOW(), OLD.released_at);
END
//

DELIMITER ;
```

------------------------------------------------------------------------

## 🔹 Exercice 5 : Trigger BEFORE UPDATE

Crée un trigger `validate_email_before_update` qui vérifie que, dans la
table `user`, le champ `email` contient bien un `@`.\
👉 Si ce n'est pas le cas, bloque la mise à jour avec une erreur
(`SIGNAL`).

```sql
DELIMITER //

CREATE TRIGGER before_update_on_user
    BEFORE UPDATE ON user
    FOR EACH ROW
BEGIN
    IF NEW.email NOT LIKE '%@%' THEN 
    SIGNAL SQLSTATE '45000' SET MESSAGE_TEXT = 'Email non recevable';
    END IF;
END
//

DELIMITER ;
```

------------------------------------------------------------------------

## 🔹 Exercice 6 : Suppression de triggers

Supprime les triggers suivants s'ils existent déjà : -
`before_movie_insert` - `log_new_actor` - `prevent_director_delete`

👉 Vérifie ensuite avec :

``` sql
SHOW TRIGGERS;
```

``` sql
DROP TRIGGER IF EXISTS before_insert_on_movie;
DROP TRIGGER IF EXISTS after_insert_on_actor;
DROP TRIGGER IF EXISTS before_delete_on_director;
```
