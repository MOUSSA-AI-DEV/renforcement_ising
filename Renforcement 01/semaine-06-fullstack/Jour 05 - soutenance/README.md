# Jour 05 — Soutenance Full-Stack

Duree : 10 a 15 minutes par apprenant.

## Deroulement

### 1. Presentation de la conception (3 minutes)

- Presenter le diagramme de cas d utilisation : quels acteurs, quels cas principaux
- Presenter le diagramme de classes : pourquoi ces classes et ces relations
- Expliquer le schema de la BDD : les choix de structure (colonnes, index, FK)

### 2. Demo live de l application (5 minutes)

- Parcourir le flux complet d un manager (creer projet, ajouter taches, assigner)
- Montrer le dashboard d un developpeur (voir ses taches, changer statut, logger du temps)
- Montrer une fonctionnalite JavaScript dynamique (filtres, kanban, mise a jour sans rechargement)

### 3. Explication technique (3 minutes)

- Montrer un exemple de requete preparee dans un Model
- Montrer comment le token CSRF est genere et verifie
- Montrer un appel Fetch et comment la reponse JSON est traitee cote frontend
- Expliquer pourquoi vous avez fait un choix architectural (ex: pourquoi Singleton pour Database)

### 4. Questions (3-5 minutes)

Questions types posees :
- "Que se passe-t-il si deux developpeurs modifient la meme tache en meme temps ?"
- "Comment extensiez-vous ce systeme pour supporter les notifications email ?"
- "Pourquoi avez-vous utilise des sessions plutot que des JWT ?"
- "Comment testeriez-vous votre code de maniere automatisee ?"
- "Quelle est la difference entre un INNER JOIN et un LEFT JOIN dans vos requetes ?"

## Grille d evaluation

| Critere | Points |
|---------|--------|
| Conception UML coherente et complete | 2 |
| Schema SQL correct (FK, contraintes, types) | 2 |
| Backend PHP : MVC respecte, PDO, securite | 4 |
| Frontend JS : Fetch, DOM dynamique, LocalStorage | 3 |
| Securite : XSS, CSRF, SQLi (demo des protections) | 3 |
| Interface responsive et fonctionnelle | 2 |
| Qualite de la presentation orale | 2 |
| Reponses aux questions techniques | 2 |
| **Total** | **20** |
