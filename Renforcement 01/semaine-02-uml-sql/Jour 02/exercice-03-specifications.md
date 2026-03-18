# Exercice 3 - Application de covoiturage

## Contexte

Vous modelisez le systeme d'une application de covoiturage regionale.
L'application met en relation conducteurs et passagers pour des trajets longue distance.

## Acteurs

Le systeme implique plusieurs types d'utilisateurs avec des privileges differents.
Un utilisateur peut etre a la fois conducteur et passager.
Identifiez egalement les systemes externes necessaires.

## Fonctionnalites

**Gestion des comptes :**
- Inscription avec verification d'email et de telephone
- Connexion / deconnexion
- Gestion du profil (photo, bio, preferences)
- Verification du permis de conduire (pour devenir conducteur)

**Gestion des trajets (Conducteur) :**
- Publier un trajet (depart, arrivee, date, heure, prix, places disponibles)
- Modifier / annuler un trajet
- Accepter ou refuser des demandes de reservation
- Demarrer et terminer un trajet
- Signaler un incident

**Recherche et reservation (Passager) :**
- Rechercher un trajet (filtres : date, lieux, prix max, note conducteur)
- Voir le profil du conducteur
- Reserver une place (paiement inclus)
- Annuler une reservation
- Laisser un avis apres le trajet

**Administration :**
- Moderer les avis
- Gerer les litiges
- Suspendre un compte
- Statistiques

## Contraintes

- Minimum 14 cas d'utilisation
- Modeliser clairement les relations d'inclusion et d'extension
- Ecrire le scenario nominal ET alternatif de "Reserver une place"
