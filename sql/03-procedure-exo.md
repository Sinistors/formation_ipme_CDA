# MySQL Avancé : Exercices sur les procédures stockées

Base de données utilisée : super_movie

------------------------------------------------------------------------

## 🔹 Exercice 1 : Procédure simple sans paramètres

Crée une procédure `GetAllMovies` qui retourne **tous les films** de la
table `movie`.

👉 Teste-la avec :

``` sql
CALL GetAllMovies();
```
``` sql
DELIMITER $$
CREATE PROCEDURE GetAllMovies()
BEGIN
	SELECT * FROM movie;
END;
$$
DELIMITER ;

CALL GetAllMovies();
```

------------------------------------------------------------------------

## 🔹 Exercice 2 : Procédure avec paramètre d'entrée (`IN`)

Crée une procédure `GetMoviesByDirector` qui prend en paramètre un **id
de réalisateur** (`director_id`) et retourne uniquement les films
associés à ce réalisateur.

👉 Exemple d'appel :

``` sql
CALL GetMoviesByDirector(2);
```

``` sql
DELIMITER $$
CREATE PROCEDURE GetMoviesByDirector(IN direct_id INT)
BEGIN
	SELECT * FROM movie WHERE movie.director_id = direct_id;
END;
$$
DELIMITER ;

CALL GetMoviesByDirector(902);
```

------------------------------------------------------------------------

## 🔹 Exercice 3 : Procédure avec paramètre de sortie (`OUT`)

Crée une procédure `CountActors` qui retourne dans un paramètre `OUT` le
**nombre total d'acteurs** de la table `actor`.

👉 Exemple d'appel :

``` sql
CALL CountActors(@total);
SELECT @total;
```

``` sql
DELIMITER $$
CREATE PROCEDURE CountActors(OUT total INT)
BEGIN
	SELECT Count(*) INTO total FROM actor;
END;
$$
DELIMITER ;

CALL CountActors(@total);
SELECT @total;
```

------------------------------------------------------------------------

## 🔹 Exercice 4 : Procédure avec paramètre `INOUT`

Crée une procédure `AddDurationBonus` qui prend en paramètre un entier
(`INOUT bonus`) et ajoute +10 minutes à sa valeur.

👉 Exemple d'appel :

``` sql
SET @d = 90;
CALL AddDurationBonus(@d);
SELECT @d; -- Résultat attendu : 100
```
``` sql
DELIMITER $$
CREATE PROCEDURE AddDurationBonus(INOUT bonus INT)
BEGIN
	SET bonus = bonus + 10;
END;
$$
DELIMITER ;

SET @bonus = 2;
CALL AddDurationBonus(@bonus);
SELECT @bonus;
``` 
------------------------------------------------------------------------

## 🔹 Exercice 5 : Variables locales dans une procédure

Crée une procédure `CountMoviesByGenre` qui prend en paramètre un
`genre_id` et utilise une variable locale `total_movies` pour stocker le
nombre de films correspondant. La procédure doit afficher ce résultat
avec un `SELECT`.

👉 Exemple d'appel :

``` sql
CALL CountMoviesByGenre(1);
```

``` sql
DELIMITER $$
CREATE PROCEDURE CountMoviesByGenre(IN gnre_id INT)
BEGIN
	SET totalMovies INT DEFAULT 0;
    SELECT COUNT(*) INTO totalMovies
    FROM genre
    JOIN movie_genre
    ON movie_genre.genre_id = genre.id
    JOIN movie
    ON movie_genre.movie_id = movie.id
    WHERE genre.id = gnre_id;
    SELECT totalMovies;
END;
$$
DELIMITER ;

CALL CountMoviesByGenre(17);
```

------------------------------------------------------------------------

## 🔹 Exercice 6 : Suppression et recréation d'une procédure

1.  Supprime la procédure `GetAllMovies` si elle existe déjà.
2.  Recrée-la pour qu'elle affiche uniquement les colonnes `name` et
    `released_at` des films.

👉 Teste-la ensuite avec :

``` sql
CALL GetAllMovies();
```

``` sql
DELIMITER $$
CREATE PROCEDURE GetAllMovies()
BEGIN
	SELECT movie.name, movie.released_at FROM movie;
END;
$$
DELIMITER ;

CALL GetAllMovies();
```
