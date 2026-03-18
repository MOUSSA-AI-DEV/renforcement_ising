-- Schema pour les exercices T-SQL du Jour 03
-- Systeme de gestion de stock et de commandes

CREATE DATABASE IF NOT EXISTS gestion_stock;

USE gestion_stock;

CREATE TABLE IF NOT EXISTS categories (
    id INT PRIMARY KEY AUTO_INCREMENT,
    nom VARCHAR(100) NOT NULL,
    description TEXT
);

CREATE TABLE IF NOT EXISTS produits (
    id INT PRIMARY KEY AUTO_INCREMENT,
    categorie_id INT NOT NULL,
    reference VARCHAR(20) UNIQUE NOT NULL,
    nom VARCHAR(150) NOT NULL,
    prix_unitaire DECIMAL(10, 2) NOT NULL,
    stock_actuel INT NOT NULL DEFAULT 0,
    stock_minimum INT NOT NULL DEFAULT 5,
    actif TINYINT(1) NOT NULL DEFAULT 1,
    FOREIGN KEY (categorie_id) REFERENCES categories (id)
);

CREATE TABLE IF NOT EXISTS clients (
    id INT PRIMARY KEY AUTO_INCREMENT,
    nom VARCHAR(100) NOT NULL,
    email VARCHAR(150) UNIQUE NOT NULL,
    solde_credit DECIMAL(10, 2) NOT NULL DEFAULT 0.00
);

CREATE TABLE IF NOT EXISTS commandes (
    id INT PRIMARY KEY AUTO_INCREMENT,
    client_id INT NOT NULL,
    date_commande DATETIME NOT NULL DEFAULT CURRENT_TIMESTAMP,
    montant_total DECIMAL(10, 2) NOT NULL DEFAULT 0.00,
    statut ENUM(
        'en_attente',
        'confirmee',
        'expediee',
        'annulee'
    ) DEFAULT 'en_attente',
    FOREIGN KEY (client_id) REFERENCES clients (id)
);

CREATE TABLE IF NOT EXISTS lignes_commande (
    id INT PRIMARY KEY AUTO_INCREMENT,
    commande_id INT NOT NULL,
    produit_id INT NOT NULL,
    quantite INT NOT NULL,
    prix_unitaire DECIMAL(10, 2) NOT NULL,
    FOREIGN KEY (commande_id) REFERENCES commandes (id),
    FOREIGN KEY (produit_id) REFERENCES produits (id)
);

CREATE TABLE IF NOT EXISTS mouvements_stock (
    id INT PRIMARY KEY AUTO_INCREMENT,
    produit_id INT NOT NULL,
    type_mouvement ENUM(
        'entree',
        'sortie',
        'ajustement'
    ) NOT NULL,
    quantite INT NOT NULL,
    date_mouvement DATETIME NOT NULL DEFAULT CURRENT_TIMESTAMP,
    commande_id INT NULL,
    motif VARCHAR(200),
    FOREIGN KEY (produit_id) REFERENCES produits (id),
    FOREIGN KEY (commande_id) REFERENCES commandes (id)
);

INSERT INTO
    categories (nom, description)
VALUES (
        'Informatique',
        'Materiels et peripheriques informatiques'
    ),
    (
        'Bureautique',
        'Fournitures et mobilier de bureau'
    ),
    (
        'Reseau',
        'Equipements reseaux et connectique'
    );

INSERT INTO
    produits (
        categorie_id,
        reference,
        nom,
        prix_unitaire,
        stock_actuel,
        stock_minimum
    )
VALUES (
        1,
        'LAP-001',
        'Laptop Pro 15',
        8500.00,
        25,
        5
    ),
    (
        1,
        'SOU-001',
        'Souris ergonomique',
        150.00,
        80,
        10
    ),
    (
        1,
        'CLA-001',
        'Clavier mecanique',
        300.00,
        60,
        10
    ),
    (
        1,
        'SCR-001',
        'Ecran 27 pouces',
        2200.00,
        15,
        3
    ),
    (
        2,
        'CHA-001',
        'Chaise ergonomique',
        1800.00,
        20,
        3
    ),
    (
        2,
        'BUR-001',
        'Bureau reglable',
        2500.00,
        8,
        2
    ),
    (
        3,
        'SWT-001',
        'Switch 24 ports',
        1200.00,
        12,
        2
    ),
    (
        3,
        'CAB-001',
        'Cable RJ45 Cat6 (5m)',
        25.00,
        200,
        20
    );

INSERT INTO
    clients (nom, email, solde_credit)
VALUES (
        'TechSolutions SARL',
        'contact@techsol.ma',
        50000.00
    ),
    (
        'Digital Agency',
        'achats@digitalagency.ma',
        30000.00
    ),
    (
        'Startup Hub',
        'procurement@startuphub.ma',
        15000.00
    );