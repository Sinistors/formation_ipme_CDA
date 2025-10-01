# Exercices SQL - Révisions CDA

## INSERT 
1. Ajouter un nouvel acteur avec son prénom, nom et date de naissance.

``
=> Leonardo DiCaprio 11 novembre 1974
``
INSERT INTO actor(first_name,last_name,birth_at)
VALUES("Leonardo","Dicaprio","1974-11-11 00:00:00");

2. Ajouter un nouveau réalisateur avec son nom complet.  

 ``
=> Christopher Nolan 
``
INSERT INTO director(full_name) VALUES("Christopher Nolan");

3. Ajouter un film en indiquant directement l’id d’un réalisateur existant.

``
=> The prestige / Nolan
``
INSERT INTO movie(director_id, name, released_at, duration, is_out) 
VALUES(951, "The prestige", "2006-11-15 00:00:00", 7800, true);

4. Ajouter un film en donnant uniquement le nom complet d’un réalisateur : l’id du réalisateur doit être récupéré par une sous-requête.  

``
=> Interstellar / Nolan
``
INSERT INTO movie(director_id, name, released_at, duration, is_out) 
VALUES((SELECT id FROM director WHERE director.full_name = "Christopher Nolan"), "Interstellar", "2014-11-05 00:00:00", 10140, true);
---

## UPDATE 
5. Modifier le nom de famille d’un acteur précis.  

``
Paige Ritchie Justen Moen => Paige Ritchie Willis
``
UPDATE actor SET last_name = "Willis" WHERE last_name="Justen Moen";


6. Changer le réalisateur associé à un film donné.

``
Ed Barton / 921 => Ed Barton / 911
``
UPDATE movie SET director_id = 911 WHERE name="Ed Barton";

7. Mettre à jour la durée d’un film existant.  

``
Zachery Zieme / 10 => Zachery Zieme / 256
``
UPDATE movie SET duration = 256 WHERE name="Zachery Zieme";

8. Mettre tous les films d’un réalisateur particulier comme “non sortis” (`is_out = 0`).  

``
=> Tous les films du director avec l'id 916 
``
UPDATE movie SET is_out = false WHERE director_id=916;

---

## DELETE 
9. Supprimer un acteur (et vérifier que ses participations aux films disparaissent grâce au *ON DELETE CASCADE*).

``
=> L'acteur avec l'id 1159
``
DELETE FROM actor WHERE id=1159;

10. Supprimer tous les films sortis avant l’an 1971.

``
=> supposé 4 films
``
DELETE FROM movie WHERE released_at<"1971-01-01 00:00:00";

---

## SELECT 

### Simples
11. Afficher la liste de tous les films.  
SELECT * FROM movie;
12. Afficher le prénom, le nom et la date de naissance de tous les acteurs.
SELECT first_name, last_name, birth_at FROM actor;  

### Avec conditions
13. Afficher les films sortis après 2010.  
SELECT * FROM movie WHERE released_at>"2010-01-01 00:00:00";
14. Afficher les réalisateurs dont le nom contient la string “le”.  
SELECT * FROM actor WHERE last_name LIKE "%le%";

### Avec fonction
15. Compter le nombre total de films présents dans la base.  
SELECT COUNT(id) as "Total" FROM movie;
16. Afficher la durée minimale et maximale parmi tous les films. 
SELECT MIN(duration) as "Min", MAX(duration) as "Max" FROM movie; 
17. Pour chaque réalisateur, afficher son nom et le nombre de films qu’il a réalisés.  
SELECT director.full_name, COUNT(*) FROM director LEFT JOIN movie ON director.id = movie.director_id GROUP BY director.id;

### Avec jointures
18. Afficher tous les films avec le nom de leur réalisateur. 

SELECT movie.name, director.full_name FROM movie JOIN director ON movie.director_id = director.id; 

19. Afficher tous les films avec la liste de leurs acteurs.

SELECT movie.name, GROUP_CONCAT(actor.last_name) 
FROM movie 
JOIN movie_actor 
ON movie.id = movie_actor.movie_id 
JOIN actor 
ON movie_actor.actor_id = actor.id 
GROUP BY movie.id;  

20. Pour chaque film, afficher le nombre d’acteurs différents qui y ont joué.  

SELECT movie.name, COUNT(actor.id) as "Nombre d'acteur" 
FROM movie 
JOIN movie_actor 
ON movie.id = movie_actor.movie_id 
JOIN actor 
ON movie_actor.actor_id = actor.id GROUP BY movie.id;

21. Afficher tous les films avec leur(s) genre(s).  

SELECT movie.name, GROUP_CONCAT(genre.label) 
FROM movie 
JOIN movie_genre 
ON movie.id = movie_genre.movie_id 
JOIN genre 
ON movie_genre.genre_id = genre.id
GROUP BY movie.id;