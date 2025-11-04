# MySQL Avancé : Exercices sur les Events

Base de données utilisée : super_movie


------------------------------------------------------------------------


## 🔹 Exercice 1 : Event quotidien de nettoyage
Créer un event `reset_daily_views` qui s’exécute **tous les jours à minuit** et met à zéro un champ fictif `views` dans la table `movie` (à créer si nécessaire pour le test).

``` sql
DELIMITER $$

CREATE EVENT reset_daily_views
ON SCHEDULE EVERY 1 DAY STARTS '2025-10-02 23:00:00'
DO
BEGIN
    UPDATE movie
    SET movie.daily_views = 0;
END $$

DELIMITER ;
```

## 🔹 Exercice 2 : Event hebdomadaire d’archivage
Créer un event `archive_old_movies` qui s’exécute **tous les lundis à 2h du matin** et copie les films dont `is_out = 1` depuis `movie` vers une table d’archive `movie_archive`.


``` sql
DELIMITER $$

CREATE EVENT archive_old_movies
ON SCHEDULE EVERY 1 WEEK STARTS '2025-10-06 02:00:00'
DO
BEGIN
    TODO
END $$

DELIMITER ;
```
## 🔹 Exercice 3 : Event ponctuel pour notifications
Créer un event `notify_new_actor` qui s’exécute **une seule fois 1 minute après sa création** et insère dans une table `notifications` un message `"Nouvel acteur ajouté"` pour les nouveaux acteurs de la journée.

``` sql
DELIMITER $$

CREATE EVENT notify_new_actor
ON SCHEDULE AT NOW() + INTERVAL 1 MINUTE
DO
BEGIN
    INSERT INTO log(message)
    VALUES("Acteur ajouté");
END $$

DELIMITER ;
```

## 🔹 Exercice 4 : Event mensuel de statistiques
Créer un event `monthly_movie_stats` qui s’exécute **le 1er jour de chaque mois à 5h du matin** et calcule le nombre de films par genre, en enregistrant le résultat dans une table `movie_genre_stats`.

``` sql
DELIMITER $$

CREATE EVENT monthly_movie_stats
ON SCHEDULE EVERY 1 MONTH STARTS '2025-11-01 05:00:00'
DO
BEGIN
    INSERT INTO movie_genre_stats (genre, movie_count, stat_date)
    SELECT genre, COUNT(*) AS movie_count, CURDATE()
    FROM movies
    GROUP BY genre;
END $$

DELIMITER ;
```

## 🔹 Exercice 5 : Event d’activation automatique
Créer un event `activate_out_movies` qui s’exécute **toutes les heures** et passe à `is_out = 1` tous les films dont la date de sortie `released_at` est antérieure à la date du jour.

``` sql
DELIMITER $$

CREATE EVENT activate_out_movies
ON SCHEDULE EVERY 1 HOUR
DO
BEGIN
     UPDATE movie
     SET movie.is_out = true
     WHERE movie.released_at < Now();
END $$

DELIMITER ;
```

## 🔹 Exercice 7 : Event de mise à jour automatique
Créer un event `update_movie_duration` qui s’exécute **tous les jours à 3h** et ajoute 5 minutes de bonus à tous les films dont la durée est inférieure à 90 minutes.

``` sql
DELIMITER $$

CREATE EVENT update_movie_duration
ON SCHEDULE EVERY 1 DAY STARTS '2025-10-03 03:00:00'
DO
BEGIN
     UPDATE movie
     SET movie.duration = movie.duration + 5
     WHERE movie.duration < 90;
END $$

DELIMITER ;
```

## 🔹 Exercice 8 : Event de logging
Créer un event `log_movie_count` qui s’exécute **toutes les heures** et enregistre dans une table `logs` le nombre total de films présents dans la table `movie`.

``` sql
DELIMITER $$

CREATE EVENT log_movie_count
ON SCHEDULE EVERY 1 HOUR STARTS '2025-10-02 19:00:00'
DO
BEGIN
     INSERT INTO log(message)
     SELECT CONCAT('Nombre de films : ', COUNT(*))
     FROM movie;
END $$

DELIMITER ;
```

## 🔹 Exercice 9 : Event pour la table genre
Créer un event `genre_cleanup` qui s’exécute **tous les mois** et supprime les genres qui ne sont associés à aucun film dans `movie_genre`.


``` sql
DELIMITER $$

CREATE EVENT genre_cleanup
ON SCHEDULE EVERY 1 MONTH STARTS '2025-11-01 00:00:00'
DO
BEGIN
     DELETE genre
     FROM genre
     JOIN movie_genre
     ON movie_genre.movie_id = movie.id
     WHERE COUNT(*) = 0;
END $$

DELIMITER ;
```
## 🔹 Exercice 10 : Event ponctuel pour test
Créer un event `test_event` qui s’exécute **une seule fois 30 secondes après sa création** et insère `"Event exécuté"` dans une table `test_logs`.


``` sql
DELIMITER $$

CREATE EVENT test_event
ON SCHEDULE AT NOW() + INTERVAL 30 SECOND
DO
BEGIN
    INSERT INTO log(message)
    VALUES("Event exécuté");
END $$

DELIMITER ;
```