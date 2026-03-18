# Mercredi — Frontend JavaScript : DOM, Fetch/AJAX et LocalStorage

## Objectif

Creer une interface dynamique qui communique avec le backend PHP via Fetch/AJAX.

## Travaux du mercredi

### Partie 1 (45min) : Gestion dynamique du tableau de bord

Sans rechargement de page, implementer dans `public/js/app.js` :

- `chargerProjets(filtre = "tous")`
  - Fetch GET /api/projets?statut=filtre
  - Afficher les projets dans un conteneur avec des cartes Bootstrap
  - Chaque carte : nom, client, % avancement (barre de progression), statut, date limite
  - Si la date limite est depassee : ajouter une classe CSS "en-retard"

- Filtres en temps reel (boutons ou select) :
  - Par statut : "tous", "en_cours", "en_attente", "termine"
  - Actualiser l affichage sans requete si les donnees sont en cache
  - Cache LocalStorage : stocker les donnees 5 minutes, ne pas re-fetcher si cache valide

### Partie 2 (45min) : Interaction avec les taches

- `chargerTaches(projetId)`
  - Fetch GET /api/projets/:id/taches
  - Afficher dans un tableau HTML avec Drag & Drop entre colonnes (Kanban simplifie)
  - Colonnes : "A faire", "En cours", "Termine"

- `changerStatutTache(tacheId, nouveauStatut)`
  - Fetch POST /api/taches/:id/statut avec body JSON
  - Mettre a jour l UI sans rechargement
  - Afficher une notification toast (succes ou erreur)

- `ajouterSaisieTemps(tacheId, heures, description)`
  - Modal Bootstrap avec formulaire
  - Fetch POST /api/taches/:id/temps
  - Mettre a jour le compteur d heures dans la carte tache

### Partie 3 (30min) : Etat local et persistance

- Implementer un module `StateManager` (objet JS, pas de classe requise) :
  - `setState(cle, valeur)` : met a jour l etat et sauvegarde dans LocalStorage
  - `getState(cle)` : recupere depuis l etat (ou LocalStorage si absent)
  - `clearState()` : vide tout
  - `subscribe(cle, callback)` : appeler callback quand la valeur de cle change

- Utiliser StateManager pour persister :
  - Le filtre actif
  - Le projet ouvert
  - Le mode d affichage (liste/kanban)
