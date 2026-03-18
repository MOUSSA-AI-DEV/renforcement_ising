# Jour 01 — Conception UML et architecture MVC

## Objectif

A la fin de cette journee, vous avez :
- Un diagramme de cas d utilisation complet
- Un diagramme de classes valide et transformable en schema SQL
- La structure de dossiers du projet initialisee
- La base de donnees creee et les migrations executees
- Un depot Git initialise avec un premier commit

## Projet de la semaine : GestioPro

Une application de gestion de projets pour une agence web.

### Description fonctionnelle

L agence a des clients qui commandent des projets.
Chaque projet est decoupé en taches assignees a des developpeurs.
Les developpeurs tracent leur temps passe sur chaque tache.
Le manager peut voir l avancement et la rentabilite de chaque projet.

### Acteurs

- Client : peut consulter ses projets et valider les livrables
- Developpeur : peut voir ses taches assignees, les mettre a jour, loger son temps
- Manager : gestion complete (projets, taches, equipe, rapports)
- Systeme : envoi d emails de notification automatique

### Exigences fonctionnelles

1. Authentification (inscription/connexion/deconnexion) pour les 3 types d utilisateurs
2. CRUD complet des projets (manager)
3. CRUD des taches liees a un projet (manager, developpeur)
4. Assignation de taches a des developpeurs (manager)
5. Mise a jour du statut d une tache (developpeur)
6. Saisie de temps sur une tache (developpeur : heures, description)
7. Tableau de bord client : avancement du projet en pourcentage
8. Tableau de bord manager : projets en retard, charge par developpeur
9. Tableau de bord developpeur : mes taches, mon temps cette semaine

## Travaux du Jour 01

### Partie 1 (45min) : Diagrammes UML

Creer dans `conception/` :
- `use-case.puml` : diagramme de cas d utilisation (Draw.io ou StarUML ou PlantUML)
  - Au minimum : 15 cas d utilisation, relations include et extend, 4 acteurs
- `class-diagram.puml` : diagramme de classes
  - Classes : Utilisateur (abstraite), Client, Developpeur, Manager, Projet, Tache, SaisieTemps
  - Relations : heritage, association avec cardinalites, composition

### Partie 2 (30min) : Schema SQL

A partir du diagramme de classes, generer le script SQL dans `database/schema.sql`.
Regles :
- Chaque classe => une table (sauf classes abstraites qui peuvent etre incluses via colonne type)
- Chaque association => cle etrangere ou table de jointure
- Ajouter les contraintes (NOT NULL, UNIQUE, ENUM pour les statuts)
- Inserer des donnees de test (au moins 3 projets, 5 taches, 3 utilisateurs par role)

### Partie 3 (30min) : Architecture et Git

1. Creer la structure de dossiers selon le pattern MVC :
   ```
   gestiopro/
     public/
       index.php
       .htaccess
       css/app.css
       js/app.js
     src/
       Controllers/
       Models/
       Views/
       Core/
         Router.php
         Database.php
         Auth.php
     database/
       schema.sql
     conception/
     .gitignore
     README.md
   ```
2. `git init`, premier commit avec la structure vide
3. Creer un fichier `.env.example` avec les variables de configuration

## Livrables du Jour 01

- [ ] `conception/use-case.puml` ou `.drawio`
- [ ] `conception/class-diagram.puml` ou `.drawio`
- [ ] `database/schema.sql` qui s execute sans erreur
- [ ] Structure de dossiers initialisee
- [ ] `git log` montre au moins 2 commits
