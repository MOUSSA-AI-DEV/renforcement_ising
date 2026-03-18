-- Schema de la base de donnees Chaine de Restaurants
-- A executer avant les exercices

CREATE TABLE IF NOT EXISTS villes (
    id INT PRIMARY KEY,
    nom VARCHAR(50),
    region VARCHAR(50)
);

CREATE TABLE IF NOT EXISTS restaurants (
    id INT PRIMARY KEY,
    nom VARCHAR(100),
    ville_id INT,
    date_ouverture DATE,
    note_moyenne DECIMAL(3,2),
    nb_places INT,
    FOREIGN KEY (ville_id) REFERENCES villes(id)
);

CREATE TABLE IF NOT EXISTS employes (
    id INT PRIMARY KEY,
    nom VARCHAR(100),
    poste VARCHAR(50),
    restaurant_id INT,
    salaire DECIMAL(10,2),
    date_embauche DATE,
    FOREIGN KEY (restaurant_id) REFERENCES restaurants(id)
);

CREATE TABLE IF NOT EXISTS menus (
    id INT PRIMARY KEY,
    restaurant_id INT,
    nom VARCHAR(100),
    description TEXT,
    prix DECIMAL(8,2),
    categorie VARCHAR(50),
    disponible BOOLEAN DEFAULT TRUE,
    FOREIGN KEY (restaurant_id) REFERENCES restaurants(id)
);

CREATE TABLE IF NOT EXISTS clients (
    id INT PRIMARY KEY,
    nom VARCHAR(100),
    email VARCHAR(100) UNIQUE,
    telephone VARCHAR(20),
    date_inscription DATE,
    programme_fidelite BOOLEAN DEFAULT FALSE
);

CREATE TABLE IF NOT EXISTS commandes (
    id INT PRIMARY KEY,
    restaurant_id INT,
    client_id INT,
    date_commande DATETIME,
    type VARCHAR(20),  -- 'sur_place', 'emporter', 'livraison'
    statut VARCHAR(20),
    montant_total DECIMAL(10,2),
    FOREIGN KEY (restaurant_id) REFERENCES restaurants(id),
    FOREIGN KEY (client_id) REFERENCES clients(id)
);

CREATE TABLE IF NOT EXISTS lignes_commande (
    id INT PRIMARY KEY,
    commande_id INT,
    menu_id INT,
    quantite INT,
    prix_unitaire DECIMAL(8,2),
    FOREIGN KEY (commande_id) REFERENCES commandes(id),
    FOREIGN KEY (menu_id) REFERENCES menus(id)
);

INSERT INTO villes VALUES
(1,'Casablanca','Grand Casablanca'),(2,'Rabat','Rabat-Sale'),(3,'Marrakech','Marrakech-Safi'),
(4,'Fes','Fes-Meknes'),(5,'Tanger','Tanger-Tetouan');

INSERT INTO restaurants VALUES
(1,'Casa Grill',1,'2018-03-15',4.2,80),(2,'Jardin de Rabat',2,'2019-06-01',4.5,60),
(3,'Riad Marrakech',3,'2017-01-20',4.7,50),(4,'Fes Medina',4,'2020-09-10',4.1,40),
(5,'Casa Grill Maarif',1,'2021-04-05',4.0,70);

INSERT INTO employes VALUES
(1,'Alami K.','Chef',1,18000,'2018-03-15'),(2,'Benali S.','Serveur',1,6500,'2019-05-01'),
(3,'Chraibi O.','Manager',2,14000,'2019-06-01'),(4,'Drissi H.','Chef',2,17500,'2019-07-15'),
(5,'Ennaji Y.','Serveur',3,7000,'2020-01-10'),(6,'Fassi L.','Chef',3,20000,'2017-01-20'),
(7,'Ghazali M.','Serveur',4,6000,'2021-03-01'),(8,'Hamdaoui N.','Manager',1,13000,'2020-06-01'),
(9,'Idrissi K.','Plongeur',5,4500,'2021-04-05'),(10,'Jalal F.','Serveur',5,6500,'2022-01-15');

INSERT INTO menus VALUES
(1,1,'Tajine Agneau','Tajine traditionnel a l''agneau',85,'Plat',TRUE),
(2,1,'Couscous Royal','Couscous aux 7 legumes',75,'Plat',TRUE),
(3,1,'Bastilla Poulet','Pastilla au poulet et amandes',55,'Entree',TRUE),
(4,2,'Sardines Grillees','Sardines fraiches au citron',45,'Plat',TRUE),
(5,2,'Rfissa','Rfissa au poulet et lentilles',70,'Plat',TRUE),
(6,3,'Pastilla aux Fruits de Mer','Pastilla royale',95,'Plat',TRUE),
(7,3,'Tajine Kefta','Tajine kefta oeufs tomates',65,'Plat',TRUE),
(8,4,'Hrir','Soupe traditionnelle marocaine',25,'Entree',TRUE),
(9,4,'Mechoui','Agneau roti entier (portion)',110,'Plat',TRUE),
(10,5,'Brochettes Mix','Mix viandes grillees',80,'Plat',TRUE),
(11,5,'Couscous Legumes','Couscous vegetarien',55,'Plat',TRUE),
(12,1,'Cornes de Gazelle','Patisserie marocaine',20,'Dessert',TRUE),
(13,2,'Chebakia','Gateau au miel et sesame',15,'Dessert',TRUE);

INSERT INTO clients VALUES
(1,'Alami Hassan','h.alami@email.ma','0661234567','2020-01-15',TRUE),
(2,'Benali Sara','s.benali@email.ma','0662345678','2020-03-20',TRUE),
(3,'Chraibi Omar','o.chraibi@web.ma','0663456789','2021-06-10',FALSE),
(4,'Drissi Fatima','f.drissi@web.ma','0664567890','2022-01-05',TRUE),
(5,'Ennaji Youssef','y.ennaji@mail.ma','0665678901','2022-08-15',FALSE),
(6,'Fassi Leila','l.fassi@mail.ma','0666789012','2023-02-28',FALSE);

INSERT INTO commandes VALUES
(1,1,1,'2024-01-10 12:30:00','sur_place','livre',160),
(2,1,2,'2024-01-10 13:00:00','sur_place','livre',75),
(3,2,3,'2024-01-15 19:30:00','sur_place','livre',115),
(4,3,1,'2024-01-20 20:00:00','sur_place','livre',160),
(5,1,4,'2024-02-05 12:00:00','emporter','livre',85),
(6,2,2,'2024-02-10 13:30:00','sur_place','livre',70),
(7,4,5,'2024-02-15 19:00:00','sur_place','livre',135),
(8,1,1,'2024-03-01 12:45:00','sur_place','livre',220),
(9,5,3,'2024-03-10 20:00:00','sur_place','livre',135),
(10,3,6,'2024-03-15 19:30:00','sur_place','livre',95),
(11,1,2,'2024-03-20 12:30:00','livraison','livre',75),
(12,2,4,'2024-03-25 20:00:00','sur_place','livre',115);

INSERT INTO lignes_commande VALUES
(1,1,1,1,85),(2,1,2,1,75),(3,2,2,1,75),(4,3,4,1,45),(5,3,5,1,70),
(6,4,6,1,95),(7,4,7,1,65),(8,5,1,1,85),(9,6,5,1,70),(10,7,8,2,25),
(11,7,9,1,110),(12,8,1,1,85),(13,8,2,1,75),(14,8,12,3,20),(15,9,10,1,80),
(16,9,11,1,55),(17,10,6,1,95),(18,11,2,1,75),(19,12,4,1,45),(20,12,5,1,70);
