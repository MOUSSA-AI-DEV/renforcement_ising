-- EXERCICE 3 — Jointures SQL sur 2 tables avec agregation
--
-- Schema a creer :
--
-- Table clients : id, nom, prenom, email, ville, date_inscription
-- Table commandes : id, client_id (FK), date_commande, montant, statut (en_cours/livree/annulee)
--
-- Donnees de test incluses ci-dessous.

CREATE TABLE IF NOT EXISTS clients (
    id INT PRIMARY KEY AUTO_INCREMENT,
    nom VARCHAR(50) NOT NULL,
    prenom VARCHAR(50) NOT NULL,
    email VARCHAR(100) UNIQUE NOT NULL,
    ville VARCHAR(50),
    date_inscription DATE NOT NULL
);

CREATE TABLE IF NOT EXISTS commandes (
    id INT PRIMARY KEY AUTO_INCREMENT,
    client_id INT NOT NULL,
    date_commande DATE NOT NULL,
    montant DECIMAL(10,2) NOT NULL,
    statut ENUM('en_cours','livree','annulee') DEFAULT 'en_cours',
    FOREIGN KEY (client_id) REFERENCES clients(id)
);

INSERT INTO clients (nom, prenom, email, ville, date_inscription) VALUES
('Benjelloun', 'Amine', 'amine@email.com', 'Casablanca', '2022-01-15'),
('Tazi', 'Sara', 'sara@email.com', 'Rabat', '2022-03-20'),
('Alaoui', 'Karim', 'karim@email.com', 'Casablanca', '2021-11-08'),
('Chraibi', 'Nadia', 'nadia@email.com', 'Fes', '2023-02-14'),
('Fassi', 'Omar', 'omar@email.com', 'Marrakech', '2022-07-30'),
('Idrissi', 'Leila', 'leila@email.com', 'Rabat', '2023-05-01'),
('Benali', 'Youssef', 'youssef@email.com', 'Tanger', '2021-09-22'),
('Kettani', 'Houda', 'houda@email.com', 'Casablanca', '2022-12-10');

INSERT INTO commandes (client_id, date_commande, montant, statut) VALUES
(1, '2024-01-10', 1200.00, 'livree'),
(1, '2024-02-15', 450.50, 'livree'),
(1, '2024-03-05', 890.00, 'en_cours'),
(2, '2024-01-20', 320.00, 'livree'),
(2, '2024-02-28', 1500.00, 'annulee'),
(3, '2024-01-05', 2200.00, 'livree'),
(3, '2024-02-10', 780.00, 'livree'),
(3, '2024-03-15', 1100.00, 'en_cours'),
(4, '2024-02-01', 560.00, 'livree'),
(5, '2024-01-18', 3200.00, 'livree'),
(5, '2024-03-20', 400.00, 'annulee'),
(7, '2024-02-05', 950.00, 'livree'),
(7, '2024-03-01', 1750.00, 'en_cours'),
(8, '2024-01-25', 620.00, 'livree');

-- REQUETES A ECRIRE :
--
-- 1. Lister tous les clients avec le nombre de commandes qu ils ont passees.
--    Inclure les clients sans commande (afficher 0).
--    Trier par nombre de commandes decroissant.

-- Requete 1 :


-- 2. Lister les clients avec le montant total de leurs commandes livrees uniquement.
--    Exclure les clients dont le total livre est nul.
--    Trier par montant total decroissant.

-- Requete 2 :


-- 3. Trouver les clients qui ont au moins une commande annulee.
--    Afficher : nom, prenom, ville, nombre de commandes annulees, montant total annule.

-- Requete 3 :


-- 4. Calculer par ville : nombre de clients, nombre de commandes livrees, montant moyen des commandes livrees.
--    Afficher seulement les villes avec au moins 2 clients.
--    Trier par montant moyen decroissant.

-- Requete 4 :


-- 5. Trouver le client avec le panier moyen le plus eleve (toutes commandes confondues, hors annulees).
--    Afficher son nom, prenom, ville, nombre de commandes et panier moyen.

-- Requete 5 :


-- 6. Lister les commandes en cours avec les informations du client.
--    Calculer pour chaque commande le nombre de jours depuis la commande (utiliser DATEDIFF et NOW()).
--    Trier par anciennete decroissante.

-- Requete 6 :
