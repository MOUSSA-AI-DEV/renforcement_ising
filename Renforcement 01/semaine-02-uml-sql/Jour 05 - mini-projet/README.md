# Jour 05 - Mini-Projet : Bibliotheque Universitaire Numerique

## Contexte

Une universite vous commande la conception complete de sa bibliotheque numerique.
Votre mission couvre la modelisation UML et la base de donnees.

## Etape 1 - Modele UML (30%)

### Diagramme de cas d'utilisation

Acteurs : Etudiant, Enseignant, Bibliothecaire, Administrateur, Systeme de paiement

Fonctionnalites a couvrir :
- Gestion du compte utilisateur (inscription, connexion, profil)
- Recherche dans le catalogue (titre, auteur, ISBN, matiere, annee)
- Emprunt d'un exemplaire physique (verification disponibilite inclus)
- Reservation si indisponible (avec notification quand libre)
- Retour d'un exemplaire (calcul penalite si retard inclus)
- Acces aux ebooks (telechargement ou lecture en ligne)
- Renouvellement d'emprunt (extension : si pas de reservation en attente)
- Gestion du catalogue (bibliothecaire)
- Generation de rapports (administrateur)
- Paiement des amendes (systeme externe)

### Diagramme de classes

Entites : Utilisateur, Etudiant, Enseignant, Bibliothecaire, Livre, Exemplaire,
Emprunt, Reservation, Ebook, Amende, Auteur, Matiere

Regles :
- Un livre peut avoir plusieurs exemplaires physiques et/ou un ebook
- Un emprunt lie un utilisateur a un exemplaire sur une periode
- Une penalite = 2 DH par jour de retard
- Un utilisateur ne peut pas emprunter si il a une amende non payee

## Etape 2 - Base de donnees (70%)

### Schema SQL

Creer toutes les tables en derivant le diagramme de classes.
Ajouter les contraintes : NOT NULL, UNIQUE, FK avec ON DELETE/UPDATE, CHECK.
Creer les index sur toutes les colonnes de jointure et de recherche frequente.

### Jeu de donnees

Inserer un jeu de donnees representatif :
- Minimum 5 matieres, 20 livres, 30 exemplaires, 10 utilisateurs
- Historique d'emprunts (retournes et en cours), reservations, amendes

### Requetes obligatoires

Ecrire les 12 requetes suivantes :

1. Liste des emprunts en cours avec nom emprunteur, titre livre, date limite
2. Livres en retard avec le nombre de jours de retard et l'amende calculee
3. Historique complet d'un etudiant (emprunts + reservations + amendes)
4. Disponibilite d'un livre (nb exemplaires disponibles / total)
5. Top 10 livres les plus empruntes sur les 6 derniers mois
6. Utilisateurs avec amende non payee (bloques pour nouveaux emprunts)
7. Taux d'occupation de la bibliotheque par matiere
8. Reservations en attente les plus anciennes (priorite d'attribution)
9. Rapport mensuel : nb emprunts, retours, nouvelles amendes, amendes payees
10. Matieres les plus consultees par type d'utilisateur (etudiant vs enseignant)
11. Livres jamais empruntes depuis leur ajout au catalogue
12. Prediction des retours attendus dans les 7 prochains jours

## Livrables

- `diagramme-cas-utilisation.puml` (ou export PNG/SVG)
- `diagramme-classes.puml` (ou export PNG/SVG)
- `schema.sql` : CREATE TABLE + index + contraintes
- `donnees.sql` : INSERT INTO (jeu de donnees)
- `requetes.sql` : les 12 requetes

## Evaluation (20 points)

| Critere | Points |
|---------|--------|
| Diagramme de cas d'utilisation (coherence, include/extend) | 3 |
| Diagramme de classes (relations, cardinalites, heritage) | 4 |
| Schema SQL (normalisation, FK, contraintes, index) | 5 |
| Jeu de donnees coherent | 2 |
| Requetes correctes et optimisees | 6 |
