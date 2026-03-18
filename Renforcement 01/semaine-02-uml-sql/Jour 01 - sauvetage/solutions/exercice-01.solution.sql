-- SOLUTION - Exercice 1

-- 1. Employes du departement Technologie, tries par salaire decroissant
SELECT e.nom, e.prenom, e.salaire
FROM employes e
JOIN departements d ON e.departement_id = d.id
WHERE d.nom = 'Technologie'
ORDER BY e.salaire DESC;

-- 2. Nombre d'employes par departement
SELECT d.nom, COUNT(e.id) AS nb_employes
FROM departements d
LEFT JOIN employes e ON e.departement_id = d.id
GROUP BY d.id, d.nom
ORDER BY nb_employes DESC;

-- 3. Employes avec salaire superieur a la moyenne
SELECT nom, prenom, salaire
FROM employes
WHERE salaire > (SELECT AVG(salaire) FROM employes)
ORDER BY salaire DESC;

-- 4. Employes embauch es en 2022 ou 2023 avec nom departement
SELECT e.nom, e.prenom, e.date_embauche, d.nom AS departement
FROM employes e
JOIN departements d ON e.departement_id = d.id
WHERE YEAR(e.date_embauche) IN (2022, 2023)
ORDER BY e.date_embauche;

-- 5. Departements dont la masse salariale > 50 000
SELECT d.nom, SUM(e.salaire) AS masse_salariale
FROM departements d
JOIN employes e ON e.departement_id = d.id
GROUP BY d.id, d.nom
HAVING SUM(e.salaire) > 50000
ORDER BY masse_salariale DESC;

-- 6. Employe le mieux paye par departement
SELECT d.nom AS departement, e.nom, e.prenom, e.salaire
FROM employes e
JOIN departements d ON e.departement_id = d.id
WHERE e.salaire = (
    SELECT MAX(e2.salaire)
    FROM employes e2
    WHERE e2.departement_id = e.departement_id
)
ORDER BY e.salaire DESC;
