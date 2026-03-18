-- SOLUTION - Exercice 2

-- 1. Commandes avec nom client et nombre d'articles
SELECT c.id, cl.nom AS client, COUNT(lc.id) AS nb_articles, c.statut
FROM commandes c
JOIN clients cl ON c.client_id = cl.id
JOIN lignes_commande lc ON lc.commande_id = c.id
GROUP BY c.id, cl.nom, c.statut;

-- 2. Montant total par commande
SELECT c.id, cl.nom, SUM(lc.quantite * lc.prix_unitaire) AS total
FROM commandes c
JOIN clients cl ON c.client_id = cl.id
JOIN lignes_commande lc ON lc.commande_id = c.id
GROUP BY c.id, cl.nom
ORDER BY total DESC;

-- 3. Clients sans commande
SELECT cl.nom, cl.email
FROM clients cl
LEFT JOIN commandes c ON c.client_id = cl.id
WHERE c.id IS NULL;

-- 4. Top 3 produits les plus vendus (par quantite)
SELECT p.nom, SUM(lc.quantite) AS total_vendu
FROM produits p
JOIN lignes_commande lc ON lc.produit_id = p.id
GROUP BY p.id, p.nom
ORDER BY total_vendu DESC
LIMIT 3;

-- 5. CA par categorie
SELECT cat.nom AS categorie, SUM(lc.quantite * lc.prix_unitaire) AS chiffre_affaires
FROM categories cat
JOIN produits p ON p.categorie_id = cat.id
JOIN lignes_commande lc ON lc.produit_id = p.id
GROUP BY cat.id, cat.nom
ORDER BY chiffre_affaires DESC;
