# Les Events (Événements) en MySQL / MariaDB

## 1. Définition

Un event (événement) est une tâche planifiée qui s’exécute automatiquement à intervalles réguliers ou à une date/heure précise dans la base de données. C’est l’équivalent des CRON jobs côté serveur, mais directement intégré dans MySQL/MariaDB.

**Résumé :**

Event → exécute automatiquement une ou plusieurs instructions SQL selon un calendrier défini.

## 2. Syntaxe de création d’un Event

```sql
DELIMITER $$

CREATE EVENT nom_event
ON SCHEDULE
    {EVERY interval | AT timestamp}
DO
BEGIN
    -- Instructions SQL à exécuter
END $$

DELIMITER ;
```

**Explications**

* `EVERY interval` → exécute l’event régulièrement, par ex. `EVERY 1 DAY`.
* `AT timestamp` → exécute l’event une seule fois à une date/heure précise.
* `DELIMITER $$` → permet d’utiliser `;` dans le corps de l’event.
* Le corps peut contenir plusieurs instructions SQL, séparées par `;`.

## 3. Exemple 1 : Optimisation hebdomadaire de tables

```sql
DELIMITER $$

CREATE EVENT opt_db
ON SCHEDULE EVERY 1 WEEK STARTS '2018-12-30 23:00:00'
DO
BEGIN
  OPTIMIZE TABLE people;
  OPTIMIZE TABLE addresses;
END $$

DELIMITER ;
```

**Points clés**

* L’event `opt_db` s’exécute tous les lundis à 23h à partir du 30/12/2018.
* Optimise les tables `people` et `addresses` automatiquement.
* `EVERY 1 WEEK` → intervalle de répétition.

## 4. Exemple 2 : Optimisation ponctuelle dans 30 secondes

```sql
DELIMITER $$

CREATE EVENT opt_db_5874212
ON SCHEDULE AT NOW() + INTERVAL 30 SECOND
DO
BEGIN
  OPTIMIZE TABLE people;
  OPTIMIZE TABLE addresses;
  OPTIMIZE TABLE phones;
  OPTIMIZE TABLE emails;
END $$

DELIMITER ;
```

**Points clés**

* L’event `opt_db_5874212` s’exécute une seule fois, exactement 30 secondes après sa création.
* Utile pour exécuter une action planifiée ponctuelle, comme une maintenance immédiate après un déploiement.

## 5. Activation et gestion des events

* Vérifier si le scheduler est activé :

```sql
SHOW VARIABLES LIKE 'event_scheduler';
```

* Résultat : `ON` ou `OFF`.
* Activer le scheduler si nécessaire :

```sql
SET GLOBAL event_scheduler = ON;
```

* Lister les events existants :

```sql
SHOW EVENTS;
```

* Supprimer un event :

```sql
DROP EVENT nom_event;
```

* Modifier un event :

```sql
ALTER EVENT nom_event
ON SCHEDULE EVERY 2 DAY;
```

## 6. Bonnes pratiques

* Toujours documenter l’event (nom, fréquence, action).
* Vérifier que l’event ne bloque pas les transactions critiques.
* Préférer des noms clairs et explicites : `weekly_optimize_people`.
* Tester l’event sur un environnement de dev avant de le mettre en production.
* Limiter la durée d’exécution pour ne pas surcharger le serveur.

## 7. Cas d’utilisation typiques

* Nettoyage et optimisation de tables (`OPTIMIZE TABLE`).
* Archivage automatique de données anciennes.
* Mise à jour de statistiques et tableaux de reporting.
* Synchronisation ou envoi de données récurrentes.
