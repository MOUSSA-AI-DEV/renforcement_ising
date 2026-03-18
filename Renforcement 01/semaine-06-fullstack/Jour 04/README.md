# Jour 04 — Integration, Tests et Securite

## Objectif

Assembler le frontend et le backend, tester les flux critiques, securiser et rendre responsive.

## Checklist d integration

### Securite (obligatoire)

- [ ] Protection XSS : verifier que `htmlspecialchars()` est applique partout dans les vues
  - Tester : creer un projet avec le nom `<script>alert('XSS')</script>` => ne doit pas s executer
- [ ] Protection CSRF : verifier que chaque formulaire POST a un token valide
  - Tester : soumettre un formulaire sans token => doit retourner une erreur 403
- [ ] Protection SQLi : verifier qu aucune requete n utilise de concatenation directe
  - Tester : passer `' OR '1'='1` dans un champ de recherche => ne doit pas retourner tous les resultats
- [ ] Protection contre les acces non autorises :
  - Tester : acceder a /api/projets sans etre connecte => doit retourner 401
  - Tester : se connecter comme Developpeur et tenter de supprimer un projet => doit retourner 403

### Tests fonctionnels (tester manuellement chaque scenario)

Scenario 1 : Flux complet manager
- [ ] Inscription en tant que Manager
- [ ] Connexion => redirection vers dashboard manager
- [ ] Creer un projet avec 3 taches
- [ ] Assigner chaque tache a un developpeur
- [ ] Verifier l affichage dans le kanban

Scenario 2 : Flux developpeur
- [ ] Connexion en tant que Developpeur
- [ ] Voir les taches assignees
- [ ] Changer le statut d une tache
- [ ] Ajouter 2 saisies de temps
- [ ] Verifier que le % d avancement se met a jour dans le dashboard manager

Scenario 3 : Erreurs et cas limites
- [ ] Tenter de creer un projet avec des champs vides => message d erreur clair
- [ ] Deconnexion => verifier que la session est bien detruite
- [ ] Tenter d acceder a une tache d un autre projet => verifier l isolation des donnees

### Responsive et accessibilite

- [ ] Tester sur mobile (Chrome DevTools, viewport 375px)
- [ ] Le kanban doit passer en colonne unique sur mobile
- [ ] Les formulaires doivent etre utilisables au doigt
- [ ] Les contrastes de couleur doivent etre suffisants

### README final

Rediger `README.md` a la racine :
- Comment configurer la BDD (copier .env.example en .env, remplir les valeurs)
- Comment lancer le serveur PHP (`php -S localhost:8000 -t public/`)
- Identifiants de test pour chaque role
- Description des fonctionnalites implementees
- Ce qui n a pas pu etre fait (si applicable)
