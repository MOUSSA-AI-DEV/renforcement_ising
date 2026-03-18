# Jour 02 — Backend PHP : Models, Controllers, Auth et Securite

## Objectif

Implementer le backend complet : authentification, CRUD via PDO, API JSON pour le frontend.

## Travaux du Jour 02

### Partie 1 (45min) : Authentification

Implementer dans `src/Core/Auth.php` et `src/Controllers/AuthController.php` :

- Inscription :
  - Validation cote serveur : email unique, mot de passe >= 8 chars, role valide
  - Hachage du mot de passe : `password_hash($pass, PASSWORD_BCRYPT)`
  - Insertion en BDD
  - Redirection vers le tableau de bord

- Connexion :
  - Recuperer l utilisateur par email
  - Verifier : `password_verify($pass, $hash)`
  - Stocker en session : `$_SESSION['user_id']`, `$_SESSION['role']`, `$_SESSION['nom']`
  - Protection CSRF : generer un token dans le formulaire et le verifier a la soumission

- Middleware d authentification :
  - `Auth::verifier()` : si pas de session, rediriger vers login
  - `Auth::verifierRole(string $role)` : si mauvais role, retourner 403

### Partie 2 (45min) : Models et CRUD

Implementer au minimum 3 models (Projet, Tache, SaisieTemps) avec :
- `findAll(array $filtres = [])` : supporte les filtres dynamiques (WHERE clause)
- `findById(int $id)` : retourner null si non trouve
- `create(array $donnees)` : validation + INSERT + retourner l id
- `update(int $id, array $donnees)` : validation + UPDATE
- `delete(int $id)` : DELETE + verifier les FK avant suppression

Toutes les requetes doivent utiliser des requetes preparees.

### Partie 3 (30min) : API JSON

Creer des endpoints qui retournent du JSON pour le frontend AJAX :
- `GET /api/projets` => liste des projets avec filtre par statut
- `GET /api/projets/{id}/taches` => taches d un projet avec le developpeur assigne
- `POST /api/taches/{id}/statut` => changer le statut (body JSON)
- `POST /api/taches/{id}/temps` => ajouter une saisie de temps
- Toujours retourner : `{ success: bool, data: ..., message: string }`
- Proteger avec Auth::verifier() et verifier le bon role

## Points de securite obligatoires

- [ ] Toutes les requetes SQL utilisent des requetes preparees (zero concatenation de $var dans SQL)
- [ ] `htmlspecialchars()` sur toutes les variables affichees dans le HTML
- [ ] Tokens CSRF sur tous les formulaires POST
- [ ] `session_regenerate_id(true)` apres connexion
- [ ] Validation des donnees cote serveur avant INSERT/UPDATE
