# 📅 SEMAINE 6 — Full-Stack : PHP + JavaScript + UML

> 📌 **Note** : Cette semaine est en format intensif — 5 jours de 2 heures. Tu intègres tout ce que tu as appris dans un projet complet. Utilise Git dès le premier jour. Pour lancer un serveur PHP local : `php -S localhost:8000 -t public/`. La documentation PDO est sur php.net/manual/fr/book.pdo.php.

---

# 🟢 LUNDI — Programme de Sauvetage (2h)

---

## S-Challenge 1 — Révision du flux client-serveur

Décris par écrit (ou en schéma) ce qui se passe exactement quand tu tapes `http://localhost:8000/produits` dans ton navigateur et qu'une page PHP affiche une liste de produits depuis MySQL. Identifie chaque étape : requête HTTP, serveur web, routing, PHP, PDO, MySQL, réponse HTML. Ensuite, crée une page PHP simple qui : se connecte à MySQL avec PDO, affiche "Connexion réussie" ou l'erreur si la connexion échoue, exécute une requête `SELECT 1` et affiche le résultat.

---

## S-Challenge 2 — CRUD PHP + PDO guidé

Crée une table `produits` (id, nom, prix, stock). Crée une classe `Database` Singleton qui retourne la connexion PDO. Crée une classe `ProduitRepository` avec `findAll()`, `findById(int $id)`, `create(string $nom, float $prix, int $stock)` et `delete(int $id)`. Toutes les requêtes doivent être préparées. Crée un script de test qui appelle chaque méthode et affiche les résultats.

---

## S-Challenge 3 — Formulaire HTML vers PHP

Crée un formulaire HTML avec les champs : nom, email, message, et un bouton Envoyer. En PHP, récupère les données du formulaire, valide que nom et email ne sont pas vides et que l'email est valide, affiche les données reçues si tout est correct, ou les erreurs de validation sinon. Protège l'affichage avec `htmlspecialchars()`. Ajoute un token CSRF : génère-le en session, place-le dans un champ caché du formulaire, vérifie-le à la soumission.

---

✅ **Checklist sauvetage S6** : Je comprends le flux HTTP, je sais connecter PHP à MySQL avec PDO, écrire des requêtes préparées, récupérer des données de formulaire et générer un token CSRF.

---

---

# 🔴 LUNDI (projet) — Conception UML et architecture (2h)

---

## Projet de la semaine : GestioPro

Une application de gestion de projets pour une agence web. L'agence a des clients qui commandent des projets. Chaque projet est découpé en tâches assignées à des développeurs. Les développeurs tracent leur temps sur chaque tâche. Le manager voit l'avancement et la rentabilité.

**Acteurs** : Client (consulte ses projets, valide les livrables), Développeur (gère ses tâches, log son temps), Manager (gestion complète), Système (notifications automatiques).

**Ce que tu dois livrer aujourd'hui** :

1. Un diagramme de cas d'utilisation avec les 4 acteurs et au minimum 15 cas d'utilisation. Identifie 3 relations `include` et 3 relations `extend` et justifie chaque choix dans un commentaire.

2. Un diagramme de classes complet : Utilisateur (abstraite), Client, Developpeur, Manager, Projet, Tache, SaisieTemps, avec les bonnes relations (héritage, associations avec cardinalités, composition pour Projet→Tache).

3. Le script SQL de création de toutes les tables à partir du diagramme de classes, avec les contraintes (NOT NULL, UNIQUE, ENUM pour les statuts, ON DELETE sur les FK). Insère des données de test : 3 projets, 3 développeurs, 8 tâches, 5 saisies de temps.

4. La structure de dossiers MVC initialisée (`src/Controllers/`, `src/Models/`, `src/Views/`, `src/Core/`, `public/`), un fichier `.gitignore`, un `README.md` de base. Git init + premier commit.

---

---

# 🔴 MARDI — Backend PHP (2h)

---

## Développement du back-end GestioPro

**Authentification** : Implémente l'inscription (validation email unique, mot de passe ≥ 8 chars, hachage `password_hash`), la connexion (vérification `password_verify`, stockage en session, `session_regenerate_id(true)` après connexion), la déconnexion et un middleware `Auth::verifier()` qui redirige vers la page de login si pas de session. Protège chaque route selon le rôle.

**Models et Repositories** : Crée au minimum `ProjetRepository` et `TacheRepository` chacun avec `findAll(array $filtres)`, `findById(int $id)`, `create(array $donnees)`, `update(int $id, array $donnees)`, `delete(int $id)`. Toutes les requêtes en PDO préparé.

**API JSON** : Crée 4 endpoints qui retournent du JSON (toujours `{success, data, message}`) :
- `GET /api/projets` — liste avec filtre par statut
- `GET /api/projets/{id}/taches` — tâches avec développeur assigné
- `POST /api/taches/{id}/statut` — changer le statut (body JSON)
- `POST /api/taches/{id}/temps` — ajouter une saisie

**Checklist sécurité** : toutes les requêtes SQL préparées ✓, `htmlspecialchars()` sur toutes les sorties HTML ✓, tokens CSRF sur tous les formulaires POST ✓, validation des données avant INSERT/UPDATE ✓.

---

---

# 🔴 MERCREDI — Frontend JavaScript (2h)

---

## Développement du front-end GestioPro

**Dashboard dynamique** : La liste des projets se charge avec `fetch` sans rechargement de page. Chaque projet est affiché en carte avec le nom, le client, une barre de progression (tâches terminées / total), le statut et la date limite (en rouge si dépassée). Des boutons de filtre par statut mettent à jour l'affichage sans nouvelle requête si les données sont en cache. Le cache LocalStorage est valide 5 minutes.

**Kanban des tâches** : Cliquer sur un projet charge ses tâches dans 3 colonnes (À faire / En cours / Terminé). Changer le statut d'une tâche (drag & drop ou bouton) envoie un `fetch POST` et met à jour l'affichage. Une notification toast s'affiche en succès ou en erreur.

**Saisie de temps** : Un bouton "Logger du temps" ouvre un modal. La soumission envoie un `fetch POST` et met à jour le compteur d'heures sur la carte tâche.

**État local** : Un objet `StateManager` (avec `setState`, `getState`, `subscribe`) persiste dans le LocalStorage le filtre actif, le projet ouvert et le mode d'affichage.

---

---

# 🔴 JEUDI — Intégration, tests et sécurité (2h)

---

## Finalisation de GestioPro

**Tests fonctionnels à réaliser manuellement** :

Scenario 1 (Manager) : inscription → connexion → créer un projet → ajouter 3 tâches → assigner chaque tâche à un développeur → vérifier l'affichage dans le kanban.

Scenario 2 (Développeur) : connexion → voir ses tâches → changer un statut → logger 2h → vérifier que le % d'avancement se met à jour dans le dashboard manager.

Scenario 3 (Sécurité) : créer un projet avec le nom `<script>alert(1)</script>` et vérifier que le script ne s'exécute pas. Soumettre un formulaire sans token CSRF et vérifier l'erreur 403. Tenter d'accéder à l'API sans être connecté et vérifier le 401. Se connecter comme Développeur et tenter une action réservée au Manager et vérifier le 403.

**Responsive** : tester sur viewport 375px (mobile). Le kanban passe en colonne unique. Les formulaires sont utilisables au doigt.

**README final** : comment configurer la BDD, comment lancer le serveur, identifiants de test pour chaque rôle, liste des fonctionnalités implémentées et de celles non faites (s'il y en a).

---

---

# 🏆 VENDREDI — Soutenance Full-Stack (15 min)

> ⚠️ **Présentation obligatoire — aucun livrable ne peut remplacer la soutenance orale**

---

## Brief

Présentation individuelle de l'application GestioPro devant le formateur.

## Déroulement

**Partie 1 — Conception (3 min)** : Présente ton diagramme de cas d'utilisation. Explique un choix `include` et un choix `extend`. Montre comment tu as transformé ton diagramme de classes en schéma SQL.

**Partie 2 — Démo live (5 min)** : Parcours le flux complet d'un manager (créer un projet, ajouter des tâches, assigner). Montre le dashboard d'un développeur. Démontre une mise à jour dynamique sans rechargement de page.

**Partie 3 — Code (3 min)** : Montre une requête PDO préparée dans ton code. Montre comment le token CSRF est généré et vérifié. Montre un appel `fetch` et comment la réponse JSON est traitée.

**Partie 4 — Questions (4 min)** : Le formateur posera des questions sur tes choix techniques.

## Barème : /20

Conception UML cohérente : /2 | Schéma SQL correct : /2 | Backend PHP (MVC, PDO, sécurité) : /4 | Frontend JS (Fetch, DOM, LocalStorage) : /3 | Sécurité démontrée (XSS, CSRF, SQLi) : /3 | Interface responsive : /2 | Présentation orale claire : /2 | Réponses aux questions : /2

## Challenges weekend (si non validé)

**Challenge 1** : Réalise seulement le CRUD Projets (sans tâches ni saisie de temps) avec l'authentification basique. Pas de JavaScript dynamique requis.

**Challenge 2** : Reprends le S-Challenge 3 (CSRF) et implémente la même protection sur le formulaire d'ajout de projet.
