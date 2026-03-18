# Exercice 1 - Plateforme de reservation de billets (cinema / train)

## Contexte

Vous concevez le diagramme de cas d'utilisation d'une plateforme de reservation
en ligne de billets (cinema ou train, a votre choix).

## Acteurs a identifier

Identifiez au minimum 3 acteurs distincts. Pensez aux utilisateurs non connectes,
aux membres inscrits, aux administrateurs, et aux systemes externes.

## Cas d'utilisation obligatoires

Le systeme doit couvrir au minimum les besoins suivants :

**Acces public :**
- Consulter les seances/trajets disponibles
- Rechercher par date, destination ou film
- Consulter les tarifs

**Membre inscrit :**
- S'inscrire / Se connecter / Se deconnecter
- Reserver un billet (necessite d'etre connecte)
- Selectionner un siege (inclus dans la reservation)
- Choisir et valider un moyen de paiement (inclus dans la reservation)
- Recevoir une confirmation par email (inclus dans la reservation)
- Consulter ses reservations
- Annuler une reservation (possible si > 2h avant la seance/depart)
- Telechargement du billet en PDF (extension de la confirmation)

**Administrateur :**
- Gerer le catalogue (seances, films, trajets)
- Consulter les statistiques de remplissage
- Rembourser une reservation

## Contraintes de modelisation

- Minimum 12 cas d'utilisation
- Au moins 2 relations `<<include>>`
- Au moins 2 relations `<<extend>>`
- Les acteurs doivent etre clairement separes avec leurs privileges respectifs
- Rediger le scenario nominal du cas "Reserver un billet" (etapes numerotees)
