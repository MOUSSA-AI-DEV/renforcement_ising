# Exercice 2 - Plateforme de formation en ligne (LMS)

## Contexte

Vous concevez le modele objet d'une plateforme de formations en ligne
de type Udemy/OpenClassrooms.

## Entites et regles metier

**Utilisateurs**
- Instructeur : peut creer des cours, voir ses statistiques de vente
- Apprenant : peut s'inscrire a des cours, suivre sa progression
- Administrateur : gere la plateforme
- Un utilisateur peut etre instructeur ET apprenant

**Catalogue de cours**
- Un cours appartient a un seul instructeur
- Un cours est organise en sections, chaque section en lecons
- Types de lecons : video, article, quiz, exercice de code
- Un cours a un niveau (debutant / intermediaire / avance), des tags, un prix
- Un cours peut avoir des pre-requis (autres cours)

**Inscription et progression**
- Un apprenant s'inscrit a un cours (paiement ou gratuit)
- Sa progression est trackee : pour chaque lecon, statut (non commence / en cours / termine)
- Le taux de completion = nb lecons terminees / total lecons
- Un certificat est genere quand la completion atteint 100%

**Evaluations**
- Un apprenant peut noter et commenter un cours (1 avis par apprenant par cours)
- Note moyenne du cours = moyenne des notes des apprenants
- Un avis peut etre signale par d'autres utilisateurs

**Paiements**
- Un paiement est associe a une inscription
- Les instructeurs touchent 70% du prix, la plateforme 30%
- Historique des versements aux instructeurs

## Travail demande

1. Diagramme de classes complet (minimum 9 classes)
2. Bien gerer l'heritage des types de lecons et d'utilisateurs
3. Indiquer toutes les cardinalites
4. Schema SQL (CREATE TABLE avec FK, index sur les colonnes de jointure frequentes)
