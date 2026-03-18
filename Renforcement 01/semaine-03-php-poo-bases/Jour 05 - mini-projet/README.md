# Jour 05 - Mini-Projet : Systeme de Gestion Scolaire

## Contexte

Un centre de formation DWWM vous commande un systeme de gestion en PHP POO.
Le systeme doit gerer les promotions, les apprenants, les modules et les evaluations.
Aucun framework, aucune librairie : PHP pur avec PDO pour la base de donnees.

## Architecture attendue

```
src/
  Models/
    Personne.php          (classe abstraite)
    Apprenant.php
    Formateur.php
    Module.php
    Promotion.php
    Note.php
    Presence.php
  Services/
    BulletinService.php   (calculs de notes et statistiques)
    AlerteService.php     (detection des apprenants en difficulte)
  Database/
    Connection.php        (singleton PDO)
    BaseRepository.php    (operations CRUD generiques)
  Repositories/
    ApprenantRepository.php
    NoteRepository.php
index.php                 (demonstration)
```

## Specifications

### Classe abstraite Personne
Proprietes : id, nom, prenom, email, telephone, dateNaissance

### Classe Apprenant extends Personne
Methodes :
- `getMoyenneModule(int $moduleId)` : calculer la moyenne ponderee des notes
- `getMoyenneGenerale()` : moyenne de tous les modules avec coefficients
- `getMention()` : selon la moyenne
- `estAdmis()` : moyenne >= 10 et aucun module eliminatoire (< 5)
- `getBulletin()` : retourner un tableau complet de toutes les notes et moyennes

### Classe Module
- Calcul de la moyenne de la promotion pour ce module
- Liste des apprenants en echec

### Classe BulletinService
- `genererBulletin(Apprenant $a)` : bulletin complet au format tableau
- `classementPromotion(Promotion $p)` : classement avec rangs et mentions
- `statistiquesPromotion(Promotion $p)` : taux de reussite, moyennes, distribution

### Classe AlerteService
- `getApprenantsDifficulte(Promotion $p)` : moyenne < 10 dans 2+ modules
- `getAbsenteismeCritique(Promotion $p, float $seuil)` : taux absence > seuil
- `genererRapportAlerte(Promotion $p)` : rapport complet des alertes

## Livrables

- Code source complet et fonctionnel
- Base de donnees avec jeu de donnees (minimum 2 promotions, 8 apprenants, 4 modules)
- `index.php` demonstrant toutes les fonctionnalites
- `README.md` avec instructions d'installation

## Evaluation (20 points)

| Critere | Points |
|---------|--------|
| Architecture et encapsulation correctes | 4 |
| Classe abstraite et heritage bien utilisees | 3 |
| BulletinService avec calculs corrects | 5 |
| AlerteService fonctionnel | 3 |
| PDO et repositories (bonus) | 3 |
| Tests et demonstration | 2 |
