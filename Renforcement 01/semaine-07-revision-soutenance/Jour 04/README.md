# Jour 04 — Simulation de soutenance complete

## Conditions de la simulation

La simulation se deroule en conditions reelles :
- Duree totale : 20 minutes par apprenant
- Le formateur joue le role du jury
- Les autres apprenants observent (silencieusement)
- La grille d evaluation officielle est utilisee

## Deroulement

### 1. Presentation du dossier projet (5 minutes)

L apprenant presente son dossier sans etre interrompu.
Le jury note et prepare ses questions.

### 2. Demonstration technique live (5 a 10 minutes)

Demontrer l application en direct :
- Le parcours utilisateur principal
- Au moins une fonctionnalite technique avancee (API, securite, etc.)
- La gestion d une erreur

### 3. Questions du jury (5 a 10 minutes)

Le formateur pose des questions tirees de la banque ci-dessous.
L apprenant a le droit de dire "je ne sais pas" mais doit proposer comment il trouverait la reponse.

## Banque de questions jury

### Questions sur la conception

- Pourquoi avoir utilise une table de jointure plutot qu une cle etrangere simple pour [relation X] ?
- Si vous deviez ajouter un systeme de notifications, comment modifieriez-vous votre schema ?
- Votre diagramme de classes a-t-il une relation de composition ou d agregation ici ? Pourquoi ?

### Questions sur le SQL

- Montrez-moi la requete la plus complexe de votre application et expliquez-la.
- Comment optimiseriez-vous cette requete si la table avait 10 millions de lignes ?
- Que se passe-t-il si la connexion BDD tombe pendant une transaction ?

### Questions sur le PHP

- Montrez-moi comment vous avez implemente la protection CSRF.
- Si je vous soumets `<img src=x onerror=alert(1)>` dans un formulaire, que se passe-t-il ?
- Pourquoi avez-vous utilise une classe abstraite ici plutot qu une interface ?

### Questions sur le JavaScript

- Montrez-moi comment vous consommez votre API depuis le frontend.
- Que se passe-t-il si la requete fetch echoue apres que l utilisateur ait clique ?
- Comment avez-vous gere l etat de l application cote client ?

### Questions generales

- Qu est-ce que vous changeriez en priorite si vous aviez 2 semaines de plus ?
- Comment deployeriez-vous cette application en production ?
- Qu avez-vous appris de plus important pendant ce programme ?

## Grille d evaluation officielle (simulation)

| Competence | Indicateurs | Note /4 |
|------------|-------------|---------|
| C1 Maquetter | Diagrammes UML coherents, schema BDD complet | /4 |
| C3 Front-end dynamique | JS asynchrone, manipulation DOM, gestion erreurs | /4 |
| C5 Base de donnees | Schema correct, requetes optimisees, securite | /4 |
| C6 Acces aux donnees | PDO, requetes preparees, gestion des erreurs | /4 |
| C7 Back-end | MVC, authentification, securite, API | /4 |
| Transversal oral | Clarte, maitrise technique, reponses aux questions | /4 |
| **Total** | | **/24** |

## Debriefing individuel (apres simulation)

Chaque apprenant recoit un debriefing de 5 minutes :
- Points forts identifies
- 2 a 3 axes d amelioration prioritaires
- Plan d action pour demain (derniere simulation)
