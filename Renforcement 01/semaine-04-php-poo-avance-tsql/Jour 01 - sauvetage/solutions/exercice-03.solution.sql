-- SOLUTION — Exercice 3 : Jointures SQL

-- 1. Tous les clients avec leur nombre de commandes (LEFT JOIN pour inclure ceux sans commande)
SELECT
    c.nom,
    c.prenom,
    c.ville,
    COUNT(co.id) AS nb_commandes
FROM clients c
LEFT JOIN commandes co ON co.client_id = c.id
GROUP BY c.id, c.nom, c.prenom, c.ville
ORDER BY nb_commandes DESC;

-- 2. Clients avec montant total des commandes livrees
SELECT
    c.nom,
    c.prenom,
    c.ville,
    COUNT(co.id)           AS nb_commandes_livrees,
    SUM(co.montant)        AS total_livre
FROM clients c
INNER JOIN commandes co ON co.client_id = c.id
WHERE co.statut = 'livree'
GROUP BY c.id, c.nom, c.prenom, c.ville
HAVING total_livre > 0
ORDER BY total_livre DESC;

-- 3. Clients avec au moins une commande annulee
SELECT
    c.nom,
    c.prenom,
    c.ville,
    COUNT(co.id)           AS nb_annulees,
    SUM(co.montant)        AS montant_total_annule
FROM clients c
INNER JOIN commandes co ON co.client_id = c.id
WHERE co.statut = 'annulee'
GROUP BY c.id, c.nom, c.prenom, c.ville
ORDER BY nb_annulees DESC;

-- 4. Statistiques par ville (avec au moins 2 clients)
SELECT
    c.ville,
    COUNT(DISTINCT c.id)                   AS nb_clients,
    COUNT(co.id)                            AS nb_commandes_livrees,
    ROUND(AVG(co.montant), 2)               AS montant_moyen
FROM clients c
LEFT JOIN commandes co ON co.client_id = c.id AND co.statut = 'livree'
GROUP BY c.ville
HAVING nb_clients >= 2
ORDER BY montant_moyen DESC;

-- 5. Client avec le panier moyen le plus eleve (hors annulees)
SELECT
    c.nom,
    c.prenom,
    c.ville,
    COUNT(co.id)              AS nb_commandes,
    ROUND(AVG(co.montant), 2) AS panier_moyen
FROM clients c
INNER JOIN commandes co ON co.client_id = c.id
WHERE co.statut != 'annulee'
GROUP BY c.id, c.nom, c.prenom, c.ville
ORDER BY panier_moyen DESC
LIMIT 1;

-- 6. Commandes en cours avec anciennete en jours
SELECT
    c.nom,
    c.prenom,
    co.id              AS commande_id,
    co.date_commande,
    co.montant,
    DATEDIFF(NOW(), co.date_commande) AS jours_en_cours
FROM clients c
INNER JOIN commandes co ON co.client_id = c.id
WHERE co.statut = 'en_cours'
ORDER BY jours_en_cours DESC;
