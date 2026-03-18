# Exercice 2 - Systeme hospitalier de prise en charge patient

## Contexte

Un hopital prive vous confie la modelisation de son systeme de gestion
des patients. Le systeme doit couvrir le parcours complet du patient,
de la prise de rendez-vous a la sortie.

## Acteurs a identifier

Analysez le contexte et identifiez tous les acteurs (humains et systemes externes).

## Fonctionnalites du systeme

**Prise de rendez-vous :**
- Le patient peut prendre RDV en ligne (inscription prealable obligatoire)
- Verification de disponibilite du medecin (inclus dans la prise de RDV)
- Envoi d'un rappel SMS/email 24h avant (inclus)
- Annulation de RDV possible (avec notification medecin)

**Accueil et admission :**
- L'agent d'accueil cree/met a jour le dossier patient
- Verifier la couverture assurance (extension : si premiere visite)
- Orienter vers le bon service

**Consultation medicale :**
- Le medecin consulte le dossier medical du patient
- Mettre a jour le dossier (diagnostic, traitements)
- Prescrire des medicaments (genere une ordonnance numerique)
- Commander des examens complementaires (extension)
- Rediger un compte-rendu de consultation

**Pharmacie et examens :**
- Le pharmacien valide et prepare l'ordonnance
- Le laborantin realise les analyses et saisit les resultats
- Les resultats sont automatiquement ajoutes au dossier patient (inclus)

**Facturation :**
- Generer la facture a la sortie
- Transmettre a l'assurance (extension si patient assure)
- Le patient regle le reste a charge

## Contraintes de modelisation

- Minimum 15 cas d'utilisation
- Au moins 3 relations `<<include>>` justifiees
- Au moins 2 relations `<<extend>>` justifiees
- Justifier par ecrit les 5 relations les plus importantes
