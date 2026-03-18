# Exercice 1 - Systeme de gestion d'une agence immobiliere

## Contexte

Une agence immobiliere veut numeriser sa gestion. Concevez le modele objet
puis derivez-en la base de donnees.

## Entites et regles metier

**Agence**
- Possede plusieurs agences (franchises) avec leurs adresses et horaires
- Chaque agence emploie des agents immobiliers
- Un agent appartient a une seule agence

**Bien immobilier**
- Types : appartement, villa, terrain, local commercial
- Attributs communs : superficie, adresse, prix, statut (disponible/vendu/loue)
- Attributs specifiques selon le type : 
  - Appartement : etage, nombre de pieces, avec ascenseur (bool)
  - Villa : nombre de niveaux, superficie jardin, piscine (bool)
  - Terrain : nature (constructible / agricole), viabilise (bool)
- Un bien est rattache a un proprietaire (client vendeur)
- Un bien est gere par un agent

**Client**
- Peut etre acheteur, vendeur, ou les deux
- Historique de visites (date, bien, agent accompagnateur, observations)
- Preferences d'achat : type de bien, budget min/max, superficie, secteur

**Transaction**
- Types : vente ou location
- Pour une location : duree, depot de garantie, loyer mensuel
- Pour une vente : prix final, date signature, notaire
- Toute transaction implique un acheteur, un vendeur, un bien et un agent
- Commission de l'agence : 3% du prix (vente) ou 1 mois de loyer (location)

## Travail demande

1. Diagramme de classes complet (minimum 7 classes)
2. Utiliser l'heritage pour les types de biens et types de transactions
3. Indiquer toutes les cardinalites
4. Deriver le schema SQL (CREATE TABLE avec FK et contraintes)
