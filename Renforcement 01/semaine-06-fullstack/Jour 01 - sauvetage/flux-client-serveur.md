# Flux client-serveur : revision visuelle

## Architecture d une application web PHP

```
[Navigateur / Client]
        |
        | HTTP Request (GET /produits ou POST /commande)
        v
[Serveur Web : Apache/Nginx]
        |
        | Routing (index.php ou .htaccess)
        v
[PHP : Controleur]
        |
        | Logique metier
        v
[PHP : Modele]
        |
        | Requetes preparees PDO
        v
[MySQL : Base de donnees]
        |
        | Resultats (tableau associatif)
        v
[PHP : Vue (HTML genere)]
        |
        | HTTP Response (HTML, JSON, etc.)
        v
[Navigateur : affichage / JS manipule le DOM]
```

## Pattern MVC en PHP

```
src/
  Controllers/
    ProduitController.php   // recoit la requete, appelle le modele, charge la vue
  Models/
    Produit.php             // logique metier + acces BDD via PDO
  Views/
    produits/
      liste.php             // HTML avec variables PHP injectees
      detail.php
  Core/
    Router.php              // dispatch les requetes vers les bons controleurs
    Database.php            // singleton PDO
public/
  index.php                 // point d entree unique
  css/
  js/
```

## Cycle d une requete MVC

1. `public/index.php` recoit toutes les requetes (via .htaccess)
2. `Router` analyse l URL et determine le Controller et la methode
3. Le Controller instancie le Model et appelle les methodes necessaires
4. Le Model execute les requetes SQL via PDO et retourne les donnees
5. Le Controller passe les donnees a la Vue
6. La Vue genere le HTML et le renvoie au navigateur

## Exercice guide (1h30)

Creer un mini CRUD de produits en PHP pur (sans framework) :

1. Creer la structure de dossiers ci-dessus
2. Creer la table `produits` (id, nom, prix, stock)
3. Creer `Database.php` avec le pattern Singleton PDO
4. Creer `Produit.php` (Model) avec : findAll(), findById(), create(), update(), delete()
5. Creer un Controller basique qui repond aux actions GET/POST
6. Creer des vues HTML minimalistes (liste + formulaire d ajout)
7. Tester le CRUD complet dans le navigateur

Solutions dans le dossier `solutions/`.
