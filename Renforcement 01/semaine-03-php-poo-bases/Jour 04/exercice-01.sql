-- EXERCICE 1 - Calculs de notes et classements scolaires
-- Utiliser le schema schema-ecole.sql

-- 1. Calculer la moyenne ponderee de chaque apprenant actif de la promotion 1.
--    (Moyenne des notes de chaque module * coefficient du module) / somme des coefficients
--    Afficher : nom, promotion, moyenne_ponderee
--    Trier par moyenne decroissante.

-- 2. Pour chaque module, afficher la note moyenne, min, max, et le taux de reussite (>= 10).
--    Trier par taux de reussite croissant.

-- 3. Identifier les apprenants en situation critique :
--    Moyenne < 10 dans au moins 2 modules.
--    Afficher : nom, liste des modules en difficulte, nombre de modules < 10.

-- 4. Classement final avec mention :
--    Calculer la moyenne finale de chaque apprenant.
--    Ajouter la colonne mention :
--    >= 16 : 'Tres Bien', >= 14 : 'Bien', >= 12 : 'Assez Bien', >= 10 : 'Passable', < 10 : 'Echec'

-- 5. Comparer les moyennes par type d'evaluation (QCM vs Projet) par module.
--    Afficher si les apprenants performent mieux en QCM ou en Projet.

-- Requete 1 : Moyennes ponderees


-- Requete 2 : Stats par module


-- Requete 3 : Apprenants en difficulte


-- Requete 4 : Classement avec mention


-- Requete 5 : QCM vs Projet

