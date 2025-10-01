# MySQL Avancé : Gestion des utilisateurs et des privilèges

## Introduction

La gestion des utilisateurs et des privilèges dans MySQL est un aspect
fondamental de l'administration de bases de données.\
Elle permet de **contrôler finement qui a accès à quoi**, et d'éviter
que des utilisateurs non autorisés puissent modifier ou consulter des
données sensibles.

Dans MySQL, la sécurité repose sur deux axes principaux : 1.
**Authentification** : définir quels utilisateurs existent, avec quel
mot de passe, et depuis quelle machine ils peuvent se connecter. 2.
**Privilèges** : définir ce qu'un utilisateur peut faire (lecture,
écriture, modification de structure, etc.).

------------------------------------------------------------------------

## 1. Création d'utilisateurs

Un nouvel utilisateur MySQL est créé à l'aide de la commande
`CREATE USER`.\
Par défaut, il n'a **aucun privilège** et ne peut donc rien faire sur
les bases, à part se connecter.

``` sql
-- Création d’un utilisateur local (connexion uniquement depuis localhost)
CREATE USER 'nouveau_utilisateur'@'localhost' IDENTIFIED BY 'mot_de_passe';

-- Création d’un utilisateur avec accès externe (depuis n’importe quelle machine)
CREATE USER 'foo'@'%' IDENTIFIED BY 'foo';
```

### Explications

-   `'localhost'` : l'utilisateur ne pourra se connecter que depuis la
    machine où est installé MySQL.\
-   `'%'` : l'utilisateur peut se connecter depuis n'importe quelle
    adresse IP (utile pour les connexions distantes).\
-   `IDENTIFIED BY` : définit le mot de passe associé à cet utilisateur.

⚠️ Attention : donner un accès `%` sans sécuriser le serveur est un
**risque de sécurité majeur**.

------------------------------------------------------------------------

## 2. Visualiser et supprimer des utilisateurs

Lister les utilisateurs existants :

``` sql
SELECT User, Host FROM mysql.user;
```

Supprimer un utilisateur :

``` sql
DROP USER 'user1'@'localhost';
```

👉 Lorsqu'un utilisateur est supprimé, tous ses privilèges disparaissent
également.

------------------------------------------------------------------------

## 3. Attribution de privilèges

Un utilisateur peut avoir des droits sur : - **Toutes les bases et
tables** (`*.*`), - **Une base spécifique** (`nom_base.*`), - **Une
table spécifique** (`nom_base.nom_table`).

### 3.1 Accorder tous les privilèges

``` sql
GRANT ALL PRIVILEGES ON *.* TO 'nouveau_utilisateur'@'localhost';
```

👉 Cela donne un accès total à **toutes les bases et tables**.\
⚠️ À réserver aux administrateurs uniquement.

### 3.2 Accorder des privilèges précis

Les privilèges les plus courants sont :\
- `SELECT` : lire des données.\
- `INSERT` : insérer de nouvelles lignes.\
- `UPDATE` : modifier des lignes existantes.\
- `DELETE` : supprimer des lignes.\
- `ALTER` : modifier la structure d'une table (ajout/suppression de
  colonnes, etc.).\
- `ALL` : tous les privilèges ci-dessus.

Exemple : donner uniquement le droit de lecture sur une base entière :

``` sql
GRANT SELECT ON games.* TO 'user2'@'localhost';
```

Ou uniquement sur une table :

``` sql
GRANT SELECT ON games.joueurs TO 'user2'@'localhost';
```

👉 L'utilisateur `user2` peut **consulter** la table `joueurs`, mais ne
peut pas insérer ni supprimer de données.

------------------------------------------------------------------------

## 4. Droits spéciaux

### 4.1 `WITH GRANT OPTION`

Cette option permet à un utilisateur de **transférer ses droits** à
d'autres utilisateurs.

``` sql
GRANT ALL PRIVILEGES ON projet_cda.* TO 'admin_projet'@'localhost' WITH GRANT OPTION;
```

👉 Ici, `admin_projet` pourra lui-même donner des droits à d'autres
utilisateurs.

### 4.2 `USAGE`

C'est un utilisateur **sans aucun privilège**. Il peut se connecter,
mais ne peut rien faire.\
C'est parfois utilisé comme base avant d'ajouter progressivement des
privilèges.

``` sql
GRANT USAGE ON *.* TO 'user1'@'localhost';
```

------------------------------------------------------------------------

## 5. Vérification des privilèges

Afficher les privilèges d'un utilisateur :

``` sql
SHOW GRANTS FOR 'user2'@'localhost';
```

Lister tous les privilèges existants (vue générale) :

``` sql
SELECT * FROM information_schema.user_privileges;
```

------------------------------------------------------------------------

## 6. Révoquer des privilèges

Pour retirer un privilège donné à un utilisateur :

``` sql
REVOKE SELECT ON games.* FROM 'user2'@'localhost';
```

👉 Après cette commande, `user2` peut toujours se connecter, mais il n'a
plus le droit de consulter les données de la base `games`.

------------------------------------------------------------------------

## 7. Résumé des bonnes pratiques

-   **Ne pas utiliser `root`** pour les applications. Toujours créer des
    utilisateurs spécifiques avec des droits limités.\
-   **Limiter les accès distants** (`'%'`) autant que possible.\
-   **Appliquer le principe du moindre privilège** : donner uniquement
    les droits nécessaires.\
-   **Révoquer** les privilèges devenus inutiles.\
-   **Vérifier régulièrement** les droits accordés via `SHOW GRANTS` et
    `information_schema`.

------------------------------------------------------------------------

## 8. Schéma récapitulatif

  ---------------------------------------------------------------------------------------
Action                          Commande
  ------------------------------- -------------------------------------------------------
Créer un utilisateur            `CREATE USER 'nom'@'hôte' IDENTIFIED BY 'mdp';`

Lister les utilisateurs         `SELECT User, Host FROM mysql.user;`

Supprimer un utilisateur        `DROP USER 'nom'@'hôte';`

Accorder des droits             `GRANT SELECT, INSERT ON base.table TO 'nom'@'hôte';`

Accorder tous les droits        `GRANT ALL PRIVILEGES ON *.* TO 'nom'@'hôte';`

Vérifier les droits d'un user   `SHOW GRANTS FOR 'nom'@'hôte';`

Révoquer un droit               `REVOKE SELECT ON base.table FROM 'nom'@'hôte';`
---------------------------------------------------------------------------------------

------------------------------------------------------------------------

## Conclusion

La gestion des utilisateurs et des privilèges est essentielle pour
sécuriser et administrer efficacement une base MySQL.\
Un bon administrateur doit toujours garder en tête : - Qui peut se
connecter ?\
- Depuis où ?\
- Avec quels droits exacts ?

En appliquant ces règles, on garantit à la fois la **sécurité** et la
**bonne organisation** d'un environnement MySQL.
