# Jour 05 — Mini-projet : Dashboard de donnees avec API publique

Duree : 3 heures | Note : /20

## Contexte

Vous allez creer une application web complete qui consomme une API publique
et offre une interface interactive avec filtres, tri, favoris et statistiques.

Choisir une des deux options :

---

## Option A : Dashboard Films (API OMDB)

API : http://www.omdbapi.com/?apikey=VOTRE_CLE (inscription gratuite sur omdbapi.com)
Alternative sans cle : utiliser https://api.tvmaze.com (aucune cle necessaire)

Fonctionnalites obligatoires :
1. Barre de recherche avec debounce (attendre 500ms apres la frappe avant de lancer la requete)
2. Affichage des resultats sous forme de cartes (poster, titre, annee, type)
3. Cliquer sur une carte => modal avec les details (synopsis, acteurs, notes, duree)
4. Systeme de favoris avec LocalStorage (ajouter/retirer, indication visuelle)
5. Page favoris : afficher seulement les films mis en favoris
6. Filtres : par type (film/serie/episode) et par decennie (2000s, 2010s, 2020s)
7. Statistiques dynamiques : nombre de resultats, annee moyenne, repartition par type
8. Loader pendant les requetes + message si aucun resultat + gestion des erreurs API

Bonus (+2 points) :
- Pagination des resultats (10 par page)
- Historique des recherches (derniers 5 termes) avec autocomplete

---

## Option B : Dashboard Recettes (API TheMealDB)

API : https://www.themealdb.com/api/json/v1/1/ (gratuite, sans cle)

Endpoints utiles :
- /search.php?s=chicken => rechercher par nom
- /filter.php?c=Seafood => filtrer par categorie
- /categories.php => liste des categories
- /lookup.php?i=52772 => details d un plat

Fonctionnalites obligatoires :
1. Liste des categories au chargement avec images
2. Cliquer sur une categorie => afficher les plats de cette categorie
3. Barre de recherche par nom de plat (avec debounce 400ms)
4. Cliquer sur un plat => afficher les details : ingredients+mesures, instructions, video YouTube
5. Systeme de favoris avec LocalStorage
6. Panier de courses : ajouter les ingredients d un plat, consolider les doublons
7. Export du panier en texte (copier dans le presse-papier)
8. Loader + gestion d erreurs

Bonus (+2 points) :
- Filtrer par zone geographique (African, Asian, etc.)
- Mode sombre avec preservation dans LocalStorage

---

## Contraintes techniques (communes aux deux options)

- Utiliser uniquement JavaScript vanilla (pas de React, Vue, jQuery)
- async/await avec try/catch pour tous les appels API
- Pas de console.log en production (commenter ou retirer)
- Le code doit etre organise en modules ou au minimum en fonctions nommees
- Le HTML/CSS doit etre responsive (mobile-friendly)
- Gerer le cas "pas de connexion internet" avec un message clair

## Livrables

- `index.html`
- `styles.css`
- `app.js` (ou plusieurs fichiers JS si modulaire)
- `README.md` expliquant comment lancer et tester l application

## Grille d evaluation

| Critere | Points |
|---------|--------|
| Fonctionnalites de base (recherche + affichage) | 4 |
| Gestion des erreurs et loaders | 2 |
| Systeme de favoris fonctionnel | 3 |
| Filtres et/ou statistiques | 3 |
| Qualite du code (async/await, organisation) | 3 |
| Interface (responsive, lisible) | 3 |
| Bonus | 2 |
| **Total** | **20** |

## Si non valide

- Option simplifiee : faire seulement la recherche + affichage + un filtre statique, sans favoris ni stats.
