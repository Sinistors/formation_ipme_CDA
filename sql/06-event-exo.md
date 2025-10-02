# MySQL Avancé : Exercices sur les Events

Base de données utilisée : super_movie


------------------------------------------------------------------------


## 🔹 Exercice 1 : Event quotidien de nettoyage
Créer un event `reset_daily_views` qui s’exécute **tous les jours à minuit** et met à zéro un champ fictif `views` dans la table `movie` (à créer si nécessaire pour le test).

## 🔹 Exercice 2 : Event hebdomadaire d’archivage
Créer un event `archive_old_movies` qui s’exécute **tous les lundis à 2h du matin** et copie les films dont `is_out = 1` depuis `movie` vers une table d’archive `movie_archive`.

## 🔹 Exercice 3 : Event ponctuel pour notifications
Créer un event `notify_new_actor` qui s’exécute **une seule fois 1 minute après sa création** et insère dans une table `notifications` un message `"Nouvel acteur ajouté"` pour les nouveaux acteurs de la journée.

## 🔹 Exercice 4 : Event mensuel de statistiques
Créer un event `monthly_movie_stats` qui s’exécute **le 1er jour de chaque mois à 5h du matin** et calcule le nombre de films par genre, en enregistrant le résultat dans une table `movie_genre_stats`.

## 🔹 Exercice 5 : Event d’activation automatique
Créer un event `activate_out_movies` qui s’exécute **toutes les heures** et passe à `is_out = 1` tous les films dont la date de sortie `released_at` est antérieure à la date du jour.

## 🔹 Exercice 7 : Event de mise à jour automatique
Créer un event `update_movie_duration` qui s’exécute **tous les jours à 3h** et ajoute 5 minutes de bonus à tous les films dont la durée est inférieure à 90 minutes.

## 🔹 Exercice 8 : Event de logging
Créer un event `log_movie_count` qui s’exécute **toutes les heures** et enregistre dans une table `logs` le nombre total de films présents dans la table `movie`.

## 🔹 Exercice 9 : Event pour la table genre
Créer un event `genre_cleanup` qui s’exécute **tous les mois** et supprime les genres qui ne sont associés à aucun film dans `movie_genre`.

## 🔹 Exercice 10 : Event ponctuel pour test
Créer un event `test_event` qui s’exécute **une seule fois 30 secondes après sa création** et insère `"Event exécuté"` dans une table `test_logs`.
